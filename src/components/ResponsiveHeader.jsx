import { useState } from 'react';
import { Layout, Button, Drawer, Menu, Space } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './ResponsiveHeader.css';

const { Header } = Layout;

const navItems = [
  { key: 'features', label: '产品特性', href: '#features' },
  { key: 'solutions', label: '行业方案', href: '#solutions' },
  { key: 'pricing', label: '价格套餐', href: '#pricing' },
  { key: 'testimonials', label: '客户成功', href: '#testimonials' },
];

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
      <a href="#hero" className="logo" aria-label="SkySales 首页">
        SkySales
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
        <Button type="link" href="#cta">
          预约演示
        </Button>
        <Button type="primary" href="#pricing">
          立即购买
        </Button>
      </Space>
      <Button
        className="mobile-menu-button"
        type="text"
        icon={<MenuOutlined />}
        aria-label="打开导航"
        onClick={() => setOpen(true)}
      />
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
            <Button block type="primary" href="#pricing" size="large">
              立即购买
            </Button>
            <Button block href="#cta" size="large">
              预约演示
            </Button>
          </Space>
        </div>
      </Drawer>
    </Header>
  );
}
