import { Button, Col, Row, Space, Statistic, Tag } from 'antd';
import './HeroSection.css';

const stats = [
  { title: '销售额提升', value: '36%' },
  { title: '客户满意度', value: '4.9/5' },
  { title: '部署时间', value: '7天' },
];

export default function HeroSection() {
  return (
    <section id="hero" className="hero section" aria-labelledby="hero-title">
      <Row gutter={[48, 48]} align="middle" justify="space-between">
        <Col xs={24} lg={12}>
          <Tag color="blue" className="hero-tag">
            新版 v3.2 发布 · AI 销售助手全面升级
          </Tag>
          <h1 id="hero-title" className="hero-title">
            SkySales — 让销售团队的每一次对话更智能
          </h1>
          <p className="hero-subtitle">
            集成 CRM、自动化营销、AI 话术建议与全渠道数据分析，打造以客户为中心的销售增长闭环。
          </p>
          <Space size="large" className="hero-actions">
            <Button type="primary" size="large" href="#pricing">
              获取专业版
            </Button>
            <Button size="large" href="#cta">
              预约顾问演示
            </Button>
          </Space>
          <div className="hero-stats" role="list">
            {stats.map((item) => (
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
