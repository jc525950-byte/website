import { useEffect, useMemo, useState } from 'react';
import { Layout, Button, Drawer, Menu, Space } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import './ResponsiveHeader.css';

const { Header } = Layout;

const SCROLL_OFFSET = 96;

const homeNavItems = [
  { key: 'hero', label: '首页', href: '#hero' },
  { key: 'categories', label: '栏目导航', href: '#categories' },
  { key: 'features', label: '服务亮点', href: '#features' },
  { key: 'resources', label: '最新源码', href: '#resources' },
  { key: 'services', label: '合作服务', href: '#services' },
  { key: 'testimonials', label: '服务承诺', href: '#testimonials' },
  { key: 'faq', label: '常见问题', href: '#faq' },
  { key: 'contact', label: '联系我们', href: '#contact' },
];

const detailNavItems = [
  { key: 'top', label: '概览', href: '#top' },
  { key: 'download', label: '下载', href: '#download' },
  { key: 'content', label: '详情', href: '#content' },
  { key: 'gallery', label: '截图', href: '#gallery' },
  { key: 'related', label: '相关资源', href: '#related' },
];

const scrollToHash = (hash) => {
  if (typeof window === 'undefined' || !hash || !hash.startsWith('#')) {
    return;
  }
  const target = document.querySelector(hash);
  if (!target) {
    return;
  }
  const position = target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
  window.scrollTo({ top: position > 0 ? position : 0, behavior: 'smooth' });
};

export default function ResponsiveHeader() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 992 : false,
  );
  const location = useLocation();
  const navigate = useNavigate();
  const isDetail = location.pathname.startsWith('/detail');
  const navItems = useMemo(() => (isDetail ? detailNavItems : homeNavItems), [isDetail]);
  const menuKey = isDetail ? 'detail-menu' : 'home-menu';

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 992;
      setIsMobile(mobile);
      if (!mobile) {
        setOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 160);

    return () => window.clearTimeout(timer);
  }, [menuKey, isMobile]);

  const handleAnchorNavigation = (href) => {
    if (!href.startsWith('#')) {
      navigate(href);
      return;
    }

    const performScroll = () => scrollToHash(href);
    if (isDetail || location.pathname !== '/') {
      navigate('/');
      setTimeout(performScroll, 120);
    } else {
      performScroll();
    }
  };

  const handleNavClick = (event, href) => {
    event.preventDefault();
    handleAnchorNavigation(href);
    setOpen(false);
  };

  const handleLogoClick = (event) => {
    event.preventDefault();
    if (isDetail) {
      navigate('/');
      setTimeout(() => scrollToHash('#hero'), 120);
    } else {
      scrollToHash('#hero');
    }
    setOpen(false);
  };

  const menuContent = (
    <Menu
      mode="vertical"
      selectable={false}
      className="header-menu"
      items={navItems.map((item) => ({
        key: item.key,
        label: (
          <a href={item.href} onClick={(event) => handleNavClick(event, item.href)}>
            {item.label}
          </a>
        ),
      }))}
    />
  );

  return (
    <Header className="header">
      <div className="header-inner">
        <a
          href="#hero"
          className="logo"
          aria-label="南亚源码网 首页"
          onClick={handleLogoClick}
        >
          南亚源码网
        </a>
        {!isMobile ? (
          <>
            <nav className="desktop-menu" aria-label="主导航">
              <Menu
                key={menuKey}
                mode="horizontal"
                selectable={false}
                items={navItems.map((item) => ({
                  key: item.key,
                  label: (
                    <a href={item.href} onClick={(event) => handleNavClick(event, item.href)}>
                      {item.label}
                    </a>
                  ),
                }))}
              />
            </nav>
            <Space className="desktop-actions">
              <Button type="link" href="https://www.kvxr.com/login" target="_blank" rel="noreferrer">
                登录 / 注册
              </Button>
            </Space>
          </>
        ) : (
          <Button
            className="mobile-menu-button"
            type="text"
            icon={<MenuOutlined />}
            aria-label="打开导航"
            onClick={() => setOpen(true)}
          />
        )}
      </div>
      <Drawer
        placement="right"
        onClose={() => setOpen(false)}
        open={isMobile && open}
        closeIcon={false}
        styles={{ body: { padding: '24px 16px' } }}
        width={280}
      >
        <div className="mobile-drawer">
          {menuContent}
          <Space direction="vertical" style={{ width: '100%' }}>
            <Button
              block
              href="https://www.kvxr.com/login"
              size="large"
              target="_blank"
              rel="noreferrer"
            >
              登录 / 注册
            </Button>
          </Space>
        </div>
      </Drawer>
    </Header>
  );
}
