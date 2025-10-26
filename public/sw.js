/**
 * Service Worker 基础框架
 * 实现静态资源缓存和离线支持
 */

const CACHE_NAME = 'skysales-v1.0.0';
const STATIC_CACHE_NAME = 'skysales-static-v1.0.0';
const DYNAMIC_CACHE_NAME = 'skysales-dynamic-v1.0.0';

// 需要缓存的静态资源
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/favicon.svg',
  '/manifest.json'
];

// 需要缓存的API路径模式
const API_CACHE_PATTERNS = [
  /^https:\/\/fonts\.googleapis\.com/,
  /^https:\/\/fonts\.gstatic\.com/,
  /^https:\/\/picsum\.photos/
];

// 安装事件 - 预缓存静态资源
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Static assets cached');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Failed to cache static assets', error);
      })
  );
});

// 激活事件 - 清理旧缓存
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE_NAME && 
                cacheName !== DYNAMIC_CACHE_NAME &&
                cacheName !== CACHE_NAME) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated');
        return self.clients.claim();
      })
  );
});

// 拦截请求 - 实现缓存策略
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // 跳过非GET请求
  if (request.method !== 'GET') {
    return;
  }

  // 跳过Chrome扩展请求
  if (url.protocol === 'chrome-extension:') {
    return;
  }

  event.respondWith(
    handleRequest(request)
  );
});

// 请求处理策略
async function handleRequest(request) {
  const url = new URL(request.url);
  
  try {
    // 1. HTML文档 - 网络优先，缓存回退
    if (request.destination === 'document') {
      return await networkFirstStrategy(request, STATIC_CACHE_NAME);
    }
    
    // 2. 静态资源 (JS, CSS, 图片) - 缓存优先
    if (request.destination === 'script' || 
        request.destination === 'style' || 
        request.destination === 'image') {
      return await cacheFirstStrategy(request, STATIC_CACHE_NAME);
    }
    
    // 3. 字体文件 - 缓存优先，长期缓存
    if (request.destination === 'font' || 
        API_CACHE_PATTERNS.some(pattern => pattern.test(url.href))) {
      return await cacheFirstStrategy(request, STATIC_CACHE_NAME, { 
        maxAge: 30 * 24 * 60 * 60 * 1000 // 30天
      });
    }
    
    // 4. API请求 - 网络优先，短期缓存
    if (url.pathname.startsWith('/api/')) {
      return await networkFirstStrategy(request, DYNAMIC_CACHE_NAME, {
        maxAge: 5 * 60 * 1000 // 5分钟
      });
    }
    
    // 5. 其他请求 - 网络优先
    return await networkFirstStrategy(request, DYNAMIC_CACHE_NAME);
    
  } catch (error) {
    console.error('Service Worker: Request handling failed', error);
    
    // 返回离线页面或默认响应
    if (request.destination === 'document') {
      const cache = await caches.open(STATIC_CACHE_NAME);
      const cachedResponse = await cache.match('/');
      return cachedResponse || new Response('离线模式', { 
        status: 200, 
        headers: { 'Content-Type': 'text/html' } 
      });
    }
    
    throw error;
  }
}

// 缓存优先策略
async function cacheFirstStrategy(request, cacheName, options = {}) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    // 检查缓存是否过期
    if (options.maxAge) {
      const cachedDate = new Date(cachedResponse.headers.get('date'));
      const now = new Date();
      if (now - cachedDate > options.maxAge) {
        // 缓存过期，尝试更新
        try {
          const networkResponse = await fetch(request);
          if (networkResponse.ok) {
            cache.put(request, networkResponse.clone());
            return networkResponse;
          }
        } catch (error) {
          console.warn('Service Worker: Network update failed, using cached version');
        }
      }
    }
    
    return cachedResponse;
  }
  
  // 缓存中没有，从网络获取
  const networkResponse = await fetch(request);
  if (networkResponse.ok) {
    cache.put(request, networkResponse.clone());
  }
  
  return networkResponse;
}

// 网络优先策略
async function networkFirstStrategy(request, cacheName, options = {}) {
  const cache = await caches.open(cacheName);
  
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // 只缓存成功的响应
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.warn('Service Worker: Network failed, trying cache');
    
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    throw error;
  }
}

// 消息处理 - 与主线程通信
self.addEventListener('message', (event) => {
  const { type, payload } = event.data;
  
  switch (type) {
    case 'SKIP_WAITING':
      self.skipWaiting();
      break;
      
    case 'GET_CACHE_SIZE':
      getCacheSize().then(size => {
        event.ports[0].postMessage({ type: 'CACHE_SIZE', payload: size });
      });
      break;
      
    case 'CLEAR_CACHE':
      clearCache(payload?.cacheName).then(() => {
        event.ports[0].postMessage({ type: 'CACHE_CLEARED' });
      });
      break;
      
    default:
      console.warn('Service Worker: Unknown message type', type);
  }
});

// 获取缓存大小
async function getCacheSize() {
  const cacheNames = await caches.keys();
  let totalSize = 0;
  
  for (const cacheName of cacheNames) {
    const cache = await caches.open(cacheName);
    const requests = await cache.keys();
    
    for (const request of requests) {
      const response = await cache.match(request);
      if (response) {
        const blob = await response.blob();
        totalSize += blob.size;
      }
    }
  }
  
  return totalSize;
}

// 清理缓存
async function clearCache(cacheName) {
  if (cacheName) {
    return caches.delete(cacheName);
  } else {
    const cacheNames = await caches.keys();
    return Promise.all(cacheNames.map(name => caches.delete(name)));
  }
}

// 错误处理
self.addEventListener('error', (event) => {
  console.error('Service Worker: Global error', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
  console.error('Service Worker: Unhandled promise rejection', event.reason);
});