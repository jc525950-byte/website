import { useEffect } from 'react';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  ogTitle, 
  ogDescription, 
  ogImage, 
  ogUrl,
  canonical 
}) => {
  useEffect(() => {
    // 设置页面标题
    if (title) {
      document.title = title;
    }

    // 创建或更新meta标签的通用函数
    const updateMetaTag = (name, content, property = false) => {
      if (!content) return;
      
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // 设置基本meta标签
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('applicable-device', 'pc,mobile');
    updateMetaTag('renderer', 'webkit');

    // 设置Open Graph标签
    updateMetaTag('og:title', ogTitle || title, true);
    updateMetaTag('og:description', ogDescription || description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', ogUrl, true);
    updateMetaTag('og:type', 'website', true);

    // 设置Twitter Card标签
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', ogTitle || title);
    updateMetaTag('twitter:description', ogDescription || description);
    updateMetaTag('twitter:image', ogImage);

    // 设置canonical链接
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // 清理函数 - 组件卸载时不需要清理，因为这些是页面级别的设置
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, canonical]);

  return null; // 这个组件不渲染任何内容
};

export default SEOHead;
