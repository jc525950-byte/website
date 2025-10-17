/**
 * Core Web Vitals 性能监控工具
 * 监控 LCP、FID、CLS 等关键性能指标
 */

// 性能指标收集器
class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.observers = [];
    this.init();
  }

  init() {
    // 监控页面加载性能
    this.observeNavigation();
    // 监控 Core Web Vitals
    this.observeCoreWebVitals();
    // 监控资源加载
    this.observeResources();
  }

  // 监控导航性能
  observeNavigation() {
    if ('performance' in window && 'getEntriesByType' in performance) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0];
          if (navigation) {
            this.metrics.navigation = {
              // DNS查询时间
              dnsLookup: navigation.domainLookupEnd - navigation.domainLookupStart,
              // TCP连接时间
              tcpConnect: navigation.connectEnd - navigation.connectStart,
              // 请求响应时间
              request: navigation.responseEnd - navigation.requestStart,
              // DOM解析时间
              domParse: navigation.domContentLoadedEventEnd - navigation.responseEnd,
              // 页面完全加载时间
              pageLoad: navigation.loadEventEnd - navigation.navigationStart,
              // 首字节时间 (TTFB)
              ttfb: navigation.responseStart - navigation.navigationStart
            };
            this.reportMetrics('navigation', this.metrics.navigation);
          }
        }, 0);
      });
    }
  }

  // 监控 Core Web Vitals
  observeCoreWebVitals() {
    // 监控 LCP (Largest Contentful Paint)
    this.observeLCP();
    // 监控 FID (First Input Delay)
    this.observeFID();
    // 监控 CLS (Cumulative Layout Shift)
    this.observeCLS();
  }

  // 监控 LCP
  observeLCP() {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          
          this.metrics.lcp = {
            value: lastEntry.startTime,
            element: lastEntry.element?.tagName || 'unknown',
            url: lastEntry.url || window.location.href
          };
          
          this.reportMetrics('lcp', this.metrics.lcp);
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.push(observer);
      } catch (e) {
        console.warn('LCP monitoring not supported:', e);
      }
    }
  }

  // 监控 FID
  observeFID() {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            this.metrics.fid = {
              value: entry.processingStart - entry.startTime,
              eventType: entry.name
            };
            
            this.reportMetrics('fid', this.metrics.fid);
          });
        });
        
        observer.observe({ entryTypes: ['first-input'] });
        this.observers.push(observer);
      } catch (e) {
        console.warn('FID monitoring not supported:', e);
      }
    }
  }

  // 监控 CLS
  observeCLS() {
    if ('PerformanceObserver' in window) {
      try {
        let clsValue = 0;
        let sessionValue = 0;
        let sessionEntries = [];

        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          
          entries.forEach((entry) => {
            if (!entry.hadRecentInput) {
              const firstSessionEntry = sessionEntries[0];
              const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

              if (sessionValue && 
                  entry.startTime - lastSessionEntry.startTime < 1000 &&
                  entry.startTime - firstSessionEntry.startTime < 5000) {
                sessionValue += entry.value;
                sessionEntries.push(entry);
              } else {
                sessionValue = entry.value;
                sessionEntries = [entry];
              }

              if (sessionValue > clsValue) {
                clsValue = sessionValue;
                this.metrics.cls = {
                  value: clsValue,
                  entries: sessionEntries.length
                };
                
                this.reportMetrics('cls', this.metrics.cls);
              }
            }
          });
        });
        
        observer.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(observer);
      } catch (e) {
        console.warn('CLS monitoring not supported:', e);
      }
    }
  }

  // 监控资源加载
  observeResources() {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          
          entries.forEach((entry) => {
            if (entry.initiatorType === 'img' || 
                entry.initiatorType === 'script' || 
                entry.initiatorType === 'css') {
              
              const resourceMetric = {
                name: entry.name,
                type: entry.initiatorType,
                duration: entry.duration,
                size: entry.transferSize || 0,
                cached: entry.transferSize === 0 && entry.decodedBodySize > 0
              };
              
              this.reportMetrics('resource', resourceMetric);
            }
          });
        });
        
        observer.observe({ entryTypes: ['resource'] });
        this.observers.push(observer);
      } catch (e) {
        console.warn('Resource monitoring not supported:', e);
      }
    }
  }

  // 上报性能指标
  reportMetrics(type, data) {
    // 在开发环境下输出到控制台
    if (process.env.NODE_ENV === 'development') {
      console.group(`🚀 Performance Metric: ${type.toUpperCase()}`);
      console.table(data);
      console.groupEnd();
    }

    // 在生产环境下可以发送到分析服务
    if (process.env.NODE_ENV === 'production') {
      // 这里可以集成 Google Analytics、百度统计等
      this.sendToAnalytics(type, data);
    }

    // 触发自定义事件
    window.dispatchEvent(new CustomEvent('performance-metric', {
      detail: { type, data }
    }));
  }

  // 发送到分析服务
  sendToAnalytics(type, data) {
    // Google Analytics 4 示例
    if (typeof gtag !== 'undefined') {
      gtag('event', 'web_vitals', {
        event_category: 'Performance',
        event_label: type,
        value: Math.round(data.value || 0),
        custom_parameter_1: JSON.stringify(data)
      });
    }

    // 自定义分析服务示例
    // fetch('/api/analytics/performance', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ type, data, timestamp: Date.now() })
    // }).catch(console.error);
  }

  // 获取当前性能指标
  getMetrics() {
    return { ...this.metrics };
  }

  // 清理观察器
  disconnect() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// 创建全局性能监控实例
const performanceMonitor = new PerformanceMonitor();

// 导出工具函数
export const getPerformanceMetrics = () => performanceMonitor.getMetrics();

export const disconnectPerformanceMonitor = () => performanceMonitor.disconnect();

// 页面可见性变化时的性能监控
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    // 页面隐藏时上报最终指标
    const finalMetrics = performanceMonitor.getMetrics();
    performanceMonitor.reportMetrics('page_hidden', {
      ...finalMetrics,
      timeOnPage: performance.now()
    });
  }
});

export default performanceMonitor;