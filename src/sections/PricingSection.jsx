import { Button, Card, Col, Row, Typography } from 'antd';
import SectionHeader from '../components/SectionHeader.jsx';
import { servicePlans } from '../content/homepage.js';
import './PricingSection.css';

const { Title, Paragraph } = Typography;

export default function PricingSection() {
  return (
    <section id="services" className="pricing section" aria-labelledby="pricing-title">
      <SectionHeader
        id="pricing-title"
        title="合作服务入口"
        subtitle="广告投放、支付渠道、营销渠道及云服务等合作信息，可通过以下入口对接站长团队。"
        eyebrow="商务合作"
      />
      <Row gutter={[24, 24]}>
        {servicePlans.map((plan) => (
          <Col key={plan.key} xs={24} md={8}>
            <Card className="pricing-card" bordered={false} hoverable>
              <Title level={4}>{plan.name}</Title>
              <Paragraph>{plan.description}</Paragraph>
              <ul className="pricing-card__list">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Button type="primary" size="large" block href={plan.href} target="_blank" rel="noreferrer">
                查看合作详情
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
