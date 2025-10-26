import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // 构建优化配置
  build: {
    // 启用代码分割
    rollupOptions: {
      output: {
        // 手动分割代码块
        manualChunks: {
          // 将React相关库分离到单独的chunk
          'react-vendor': ['react', 'react-dom'],
          // 将Ant Design分离到单独的chunk
          'antd-vendor': ['antd', '@ant-design/icons']
        },
        // 优化chunk文件名
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
            return `assets/media/[name]-[hash].${ext}`;
          }
          if (/\.(png|jpe?g|gif|svg|webp|avif)(\?.*)?$/i.test(assetInfo.name)) {
            return `assets/img/[name]-[hash].${ext}`;
          }
          if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash].${ext}`;
          }
          return `assets/[ext]/[name]-[hash].${ext}`;
        }
      }
    },
    
    // 启用默认压缩
    minify: true,
    
    // 启用CSS代码分割
    cssCodeSplit: true,
    
    // 设置chunk大小警告限制
    chunkSizeWarningLimit: 1000,
    
    // 启用源码映射（生产环境可关闭）
    sourcemap: false,
    
    // 资源内联阈值
    assetsInlineLimit: 4096
  },
  
  // 开发服务器配置
  server: {
    // 启用HTTP/2
    https: false,
    // 预热常用文件
    warmup: {
      clientFiles: [
        './src/App.jsx',
        './src/pages/HomePage.jsx',
        './src/sections/DetailPage.jsx'
      ]
    }
  },
  
  // 依赖优化
  optimizeDeps: {
    // 预构建依赖
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'antd',
      '@ant-design/icons'
    ],
    // 排除预构建
    exclude: []
  },
  
  // 路径别名
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@sections': resolve(__dirname, 'src/sections'),
      '@content': resolve(__dirname, 'src/content'),
      '@assets': resolve(__dirname, 'src/assets')
    }
  },
  
  // CSS配置
  css: {
    // 启用CSS模块
    modules: {
      localsConvention: 'camelCase'
    },
    // PostCSS配置
    postcss: {
      plugins: []
    }
  },
  
  // 实验性功能
  experimental: {
    // 启用渲染内置优化
    renderBuiltUrl: (filename) => {
      // 可以自定义资源URL生成逻辑
      return filename;
    }
  }
});
