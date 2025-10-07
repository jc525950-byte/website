import { useState } from 'react';
import { Layout, Button, Drawer, Menu, Space } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import './ResponsiveHeader.css';

const { Header } = Layout;

const homeNavItems = [
  { key: 'hero', label: '首页', href: '#hero' },
  { key: 'categories', label: '源码分类', href: '#categories' },
  { key: 'features', label: '服务亮点', href: '#features' },
  { key: 'resources', label: '最新上架', href: '#resources' },
  { key: 'services', label: '合作入口', href: '#services' },
  { key: 'faq', label: '常见问题', href: '#faq' },
  { key: 'contact', label: '联系我们', href: '#contact' },
];

const detailNavItems = [
  { key: 'top', label: '概览', href: '#top' },
  { key: 'download', label: '资源下载', href: '#download' },
  { key: 'content', label: '项目详情', href: '#content' },
  { key: 'gallery', label: '截图', href: '#gallery' },
  { key: 'related', label: '相关资源', href: '#related' },
];

function scrollToHash(hash) {
  if (!hash.startsWith('#')) return;
  const target = document.querySelector(hash);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function ResponsiveHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isDetail = location.pathname.startsWith('/detail');
  const navItems = isDetail ? detailNavItems : homeNavItems;

  const handleAnchorNavigation = (href) => {
    if (href.startsWith('#')) {
      const performScroll = () => scrollToHash(href);
      if (!isDetail && location.pathname !== '/') {
        navigate('/');
        setTimeout(performScroll, 120);
      } else {
        performScroll();
      }
    } else {
      navigate(href);
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
        <a href="#hero" className="logo" aria-label="南亚源码网 首页" onClick={handleLogoClick}>
          南亚源码网
        </a>
        <nav className="desktop-menu" aria-label="主导航">
          <Menu
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
          <Button type="primary" href="https://t.me/qipaibocaijiaoyisuolaohujigupiao" target="_blank" rel="noreferrer">
            在线客服
          </Button>
        </Space>
        <Button
          className="mobile-menu-button"
          type="text"
          icon={<MenuOutlined />}
          aria-label="打开导航"
          onClick={() => setOpen(true)}
        />
      </div>
      <Drawer
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        closeIcon={false}
        bodyStyle={{ padding: '24px 16px' }}
        width={280}
      >
        <div className="mobile-drawer">
          {menuContent}
          <Space direction="vertical" style={{ width: '100%' }}>
            <Button
              block
              type="primary"
              href="https://t.me/qipaibocaijiaoyisuolaohujigupiao"
              size="large"
              target="_blank"
              rel="noreferrer"
            >
              在线客服
            </Button>
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
