import { useState } from 'react';
import { Layout, Button, Drawer, Menu, Space } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { articleCategories } from '../content/homepage.js';
import './ResponsiveHeader.css';

const { Header } = Layout;

const navItems = articleCategories.map((category) => ({
  key: category.key,
  label: category.label,
  href: `#${category.key}`,
}));

export default function ResponsiveHeader() {
  const [open, setOpen] = useState(false);

  const menuContent = (
    <Menu
      mode="vertical"
      selectable={false}
      className="header-menu"
      items={navItems.map((item) => ({
        key: item.key,
        label: (
          <a href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ),
      }))}
    />
  );

  return (
    <Header className="header">
      <div className="header-inner">
        <a href="#hero" className="logo" aria-label="南亚源码网 首页">
          南亚源码网
        </a>
        <nav className="desktop-menu" aria-label="主导航">
          <Menu
            mode="horizontal"
            selectable={false}
            items={navItems.map((item) => ({
              key: item.key,
              label: <a href={item.href}>{item.label}</a>,
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
