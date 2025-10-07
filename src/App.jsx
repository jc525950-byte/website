import { Layout, ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResponsiveHeader from './components/ResponsiveHeader.jsx';
import FooterSection from './sections/FooterSection.jsx';
import HomePage from './pages/HomePage.jsx';
import DetailPage from './sections/DetailPage.jsx';

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
      <BrowserRouter>
        <Layout>
          <ResponsiveHeader />
          <Content>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/detail" element={<DetailPage />} />
            </Routes>
          </Content>
          <FooterSection />
        </Layout>
      </BrowserRouter>
    </ConfigProvider>
  );
}
