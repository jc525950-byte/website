import { Layout, ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import ResponsiveHeader from './components/ResponsiveHeader.jsx';
import HeroSection from './sections/HeroSection.jsx';
import PartnersSection from './sections/PartnersSection.jsx';
import FeaturesSection from './sections/FeaturesSection.jsx';
import SolutionsSection from './sections/SolutionsSection.jsx';
import PricingSection from './sections/PricingSection.jsx';
import TestimonialsSection from './sections/TestimonialsSection.jsx';
import FaqSection from './sections/FaqSection.jsx';
import CallToActionSection from './sections/CallToActionSection.jsx';
import FooterSection from './sections/FooterSection.jsx';

const { Content } = Layout;

const theme = {
  token: {
    colorPrimary: '#2f54eb',
    fontFamily: "'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif",
    borderRadius: 12,
  },
};

export default function App() {
  return (
    <ConfigProvider locale={zhCN} theme={theme}>
      <Layout>
        <ResponsiveHeader />
        <Content>
          <HeroSection />
          <PartnersSection />
          <FeaturesSection />
          <SolutionsSection />
          <PricingSection />
          <TestimonialsSection />
          <FaqSection />
          <CallToActionSection />
        </Content>
        <FooterSection />
      </Layout>
    </ConfigProvider>
  );
}
