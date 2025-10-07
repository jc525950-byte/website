import { Button, Col, Row, Space, Statistic, Tag } from 'antd';
import { heroHighlights } from '../content/homepage.js';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section id="hero" className="hero section" aria-labelledby="hero-title">
      <Row gutter={[48, 48]} align="middle" justify="space-between">
        <Col xs={24} lg={12}>
          <Tag color="orange" className="hero-tag">
            南亚源码网 · 包网搭建与源码交易平台
          </Tag>
          <h1 id="hero-title" className="hero-title">
            南亚源码网 — 免费源码、源码交易、网站源码下载
          </h1>
          <p className="hero-subtitle">
            马来西亚专业技术团队一站式平台包网搭建开发，提供棋牌、菠菜、直播、交易所、H5 等多类源码资源，站长亲测调试，助你项目快速上线。
          </p>
          <Space size="large" className="hero-actions">
            <Button type="primary" size="large" href="#resources">
              浏览最新源码
            </Button>
            <Button size="large" href="#contact">
              联系客服对接
            </Button>
          </Space>
          <div className="hero-stats" role="list">
            {heroHighlights.map((item) => (
              <div key={item.title} role="listitem" className="hero-stat">
                <Statistic value={item.value} title={item.title} />
              </div>
            ))}
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-screen">
              <div className="hero-screen__header">
                <span />
                <span />
                <span />
              </div>
              <div className="hero-screen__content">
                <div className="hero-screen__chart" />
                <div className="hero-screen__list">
                  <div className="hero-screen__list-item" />
                  <div className="hero-screen__list-item" />
                  <div className="hero-screen__list-item" />
                  <div className="hero-screen__list-item" />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}
