import { Layout, ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import ResponsiveHeader from './components/ResponsiveHeader.jsx';
import HeroSection from './sections/HeroSection.jsx';
import ArticlesSections from './sections/ArticlesSections.jsx';
import FooterSection from './sections/FooterSection.jsx';

const { Content } = Layout;

const theme = {
  token: {
    colorPrimary: '#ff926f',
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
          <ArticlesSections />
        </Content>
        <FooterSection />
      </Layout>
    </ConfigProvider>
  );
}
