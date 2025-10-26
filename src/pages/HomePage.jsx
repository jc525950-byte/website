import { useMemo } from 'react';
import SEOHead from '../components/SEOHead.jsx';
import HeroSection from '../sections/HeroSection.jsx';
import PartnersSection from '../sections/PartnersSection.jsx';
import FeaturesSection from '../sections/FeaturesSection.jsx';
import SolutionsSection from '../sections/SolutionsSection.jsx';
import ArticlesSections from '../sections/ArticlesSections.jsx';
import PricingSection from '../sections/PricingSection.jsx';
import TestimonialsSection from '../sections/TestimonialsSection.jsx';
import FaqSection from '../sections/FaqSection.jsx';
import CallToActionSection from '../sections/CallToActionSection.jsx';

export default function HomePage() {
  const currentUrl = useMemo(
    () => (typeof window !== 'undefined' ? `${window.location.origin}/` : 'https://www.kvxr.com/'),
    [],
  );

  return (
    <>
      <SEOHead
        title="南亚源码网 - 包网搭建与源码交易平台"
        description="南亚源码网提供棋牌、菠菜、直播、H5 等热门源码资源，支持包网搭建、源码交易、技术运维与营销推广服务，助力项目快速上线。"
        keywords="源码交易,包网搭建,棋牌源码,菠菜源码,直播源码,H5源码,南亚源码网"
        ogTitle="南亚源码网 - 全品类源码资源中心"
        ogDescription="精选亲测源码与包网服务，覆盖棋牌、菠菜、直播、交易所等多种业态，支持快速部署与定制。"
        ogImage="https://www.kvxr.com/wp-content/uploads/2025/09/10215921366-300x200.jpg"
        ogUrl={currentUrl}
        canonical={currentUrl}
      />
      <HeroSection />
      <ArticlesSections />
    </>
  );
}
