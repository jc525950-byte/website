import { Layout, ConfigProvider, FloatButton } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import enUS from 'antd/locale/en_US';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useEffect, useState } from 'react';
import ResponsiveHeader from './components/ResponsiveHeader.jsx';
import FooterSection from './sections/FooterSection.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';
import { CustomerServiceOutlined, GlobalOutlined, TranslationOutlined } from '@ant-design/icons';
import './App.css';

// 路由级别的代码分割
const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const DetailPage = lazy(() => import('./sections/DetailPage.jsx'));

const { Content } = Layout;

const theme = {
  token: {
    colorPrimary: '#ff926f',
    fontFamily: "'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif",
    borderRadius: 12,
  },
};

export default function App() {
  const [localeKey, setLocaleKey] = useState('zh');

  const currentLocale = localeKey === 'zh' ? zhCN : enUS;

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = localeKey === 'zh' ? 'zh-CN' : 'en-US';
    }
  }, [localeKey]);

  const handleToggleLocale = () => {
    setLocaleKey((prev) => (prev === 'zh' ? 'en' : 'zh'));
  };

  const languageTooltip =
    localeKey === 'zh' ? '切换为 English' : 'Switch to 中文';

  return (
    <ConfigProvider locale={currentLocale} theme={theme}>
      <BrowserRouter>
        <Layout>
          <ResponsiveHeader />
          <Content>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/detail" element={<DetailPage />} />
              </Routes>
            </Suspense>
          </Content>
          <FooterSection />
          <FloatButton.Group
            trigger="hover"
            type="primary"
            icon={<GlobalOutlined />}
            open
            closeIcon={null}
            shape="circle"
            style={{ right: 24, bottom: 80 }}
          >
            <FloatButton
              icon={<CustomerServiceOutlined />}
              tooltip={<span>在线客服</span>}
              href="https://t.me/qipaibocaijiaoyisuolaohujigupiao"
              target="_blank"
              rel="noreferrer"
            />
            <FloatButton.BackTop tooltip={<span>返回顶部</span>} visibilityHeight={200} />
            <FloatButton
              icon={<TranslationOutlined />}
              tooltip={<span>{languageTooltip}</span>}
              onClick={handleToggleLocale}
            />
          </FloatButton.Group>
        </Layout>
      </BrowserRouter>
    </ConfigProvider>
  );
}
