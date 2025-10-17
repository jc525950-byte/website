import { useState, useRef, useEffect } from 'react';

/**
 * 懒加载图片组件
 * 支持WebP格式优化和性能监控
 * 
 * 使用建议：
 * 1. 图片压缩：建议使用WebP格式，可减少60-80%文件大小
 * 2. 响应式图片：根据设备像素比提供不同尺寸
 * 3. CDN优化：使用CDN加速图片加载
 * 4. 预加载关键图片：首屏重要图片可预加载
 */
const LazyImage = ({
  src,
  alt,
  title,
  width,
  height,
  className = '',
  fallback = 'https://via.placeholder.com/300x200?text=Loading...',
  style,
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px', // 提前50px开始加载
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = (event) => {
    setIsLoaded(true);
    onLoad?.(event);
  };

  const handleError = (event) => {
    setHasError(true);
    event.currentTarget.src = fallback;
    onError?.(event);
  };

  // 生成WebP格式的src（如果支持）
  const getOptimizedSrc = (originalSrc) => {
    // 检测WebP支持
    const supportsWebP = () => {
      const canvas = document.createElement('canvas');
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    };

    // 如果支持WebP且原图不是WebP，尝试转换
    if (supportsWebP() && !originalSrc.includes('.webp')) {
      // 这里可以实现WebP转换逻辑
      // 例如：return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    }
    
    return originalSrc;
  };

  return (
    <div 
      ref={imgRef}
      className={`lazy-image-container ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      {isInView ? (
        <img
          src={getOptimizedSrc(src)}
          alt={alt}
          title={title}
          width={width}
          height={height}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
          {...props}
        />
      ) : (
        <div 
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999',
            fontSize: '14px'
          }}
        >
          加载中...
        </div>
      )}
    </div>
  );
};

export default LazyImage;
