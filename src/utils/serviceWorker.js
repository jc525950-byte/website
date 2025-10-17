/**
 * Service Worker 注册和管理工具
 */

// Service Worker 注册
export async function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });
      
      console.log('Service Worker registered successfully:', registration);
      
      // 监听更新
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // 新的 Service Worker 已安装，提示用户刷新
              showUpdateNotification();
            }
          });
        }
      });
      
      return registration;
    } catch (error) {
      console.error('Service Worker registration failed:', error);
      return null;
    }
  } else {
    console.warn('Service Worker not supported');
    return null;
  }
}

// 显示更新通知
function showUpdateNotification() {
  // 可以使用 Ant Design 的 notification 组件
  if (window.antd && window.antd.notification) {
    window.antd.notification.info({
      message: '应用更新',
      description: '发现新版本，点击刷新页面以获取最新功能。',
      btn: React.createElement('button', {
        onClick: () => {
          window.location.reload();
        }
      }, '立即刷新'),
      duration: 0,
      key: 'sw-update'
    });
  } else {
    // 降级到原生提示
    if (confirm('发现新版本，是否立即刷新页面？')) {
      window.location.reload();
    }
  }
}

// 卸载 Service Worker
export async function unregisterServiceWorker() {
  if ('serviceWorker' in navigator) {
    try {
      const registrations = await navigator.serviceWorker.getRegistrations();
      for (const registration of registrations) {
        await registration.unregister();
      }
      console.log('Service Worker unregistered successfully');
      return true;
    } catch (error) {
      console.error('Service Worker unregistration failed:', error);
      return false;
    }
  }
  return false;
}

// 获取缓存大小
export async function getCacheSize() {
  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    return new Promise((resolve) => {
      const messageChannel = new MessageChannel();
      messageChannel.port1.onmessage = (event) => {
        if (event.data.type === 'CACHE_SIZE') {
          resolve(event.data.payload);
        }
      };
      
      navigator.serviceWorker.controller.postMessage(
        { type: 'GET_CACHE_SIZE' },
        [messageChannel.port2]
      );
    });
  }
  return 0;
}

// 清理缓存
export async function clearCache(cacheName) {
  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    return new Promise((resolve) => {
      const messageChannel = new MessageChannel();
      messageChannel.port1.onmessage = (event) => {
        if (event.data.type === 'CACHE_CLEARED') {
          resolve(true);
        }
      };
      
      navigator.serviceWorker.controller.postMessage(
        { type: 'CLEAR_CACHE', payload: { cacheName } },
        [messageChannel.port2]
      );
    });
  }
  return false;
}

// 检查网络状态
export function getNetworkStatus() {
  return {
    online: navigator.onLine,
    connection: navigator.connection || navigator.mozConnection || navigator.webkitConnection
  };
}

// 监听网络状态变化
export function onNetworkStatusChange(callback) {
  const handleOnline = () => callback({ online: true });
  const handleOffline = () => callback({ online: false });
  
  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);
  
  // 返回清理函数
  return () => {
    window.removeEventListener('online', handleOnline);
    window.removeEventListener('offline', handleOffline);
  };
}

// 预缓存关键资源
export async function precacheResources(urls) {
  if ('caches' in window) {
    try {
      const cache = await caches.open('precache-v1');
      await cache.addAll(urls);
      console.log('Resources precached successfully');
      return true;
    } catch (error) {
      console.error('Precaching failed:', error);
      return false;
    }
  }
  return false;
}

// 缓存策略配置
export const CACHE_STRATEGIES = {
  CACHE_FIRST: 'cache-first',
  NETWORK_FIRST: 'network-first',
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate',
  NETWORK_ONLY: 'network-only',
  CACHE_ONLY: 'cache-only'
};

// 默认在生产环境启用 Service Worker
if (process.env.NODE_ENV === 'production') {
  // 页面加载完成后注册
  window.addEventListener('load', () => {
    registerServiceWorker();
  });
}