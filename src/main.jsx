import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import performanceMonitor from './utils/performance.js'
import { registerServiceWorker } from './utils/serviceWorker.js'

// 性能监控已在模块中自动初始化

// 注册 Service Worker（仅在生产环境）
if (import.meta.env.PROD) {
  registerServiceWorker();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
