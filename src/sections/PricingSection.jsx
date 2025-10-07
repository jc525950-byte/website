import { Badge, Button, Card, Col, Row, Typography } from 'antd';
import SectionHeader from '../components/SectionHeader.jsx';
import { pricingPlans } from '../content/homepage.js';
import './PricingSection.css';

const { Title, Paragraph, Text } = Typography;

export default function PricingSection() {
  return (
    <section id="pricing" className="pricing section" aria-labelledby="pricing-title">
      <SectionHeader
        id="pricing-title"
        title="灵活定价，按需成长"
        subtitle="根据团队规模随时升级，数据和流程无缝迁移。支持企业定制与私有化部署。"
        eyebrow="价格方案"
      />
      <Row gutter={[24, 24]}>
        {pricingPlans.map((plan) => (
          <Col key={plan.key} xs={24} md={8}>
            <Badge.Ribbon text="最受欢迎" color="blue" style={{ display: plan.highlighted ? 'block' : 'none' }}>
              <Card className={`pricing-card ${plan.highlighted ? 'pricing-card--highlighted' : ''}`}>
                <Title level={4}>{plan.name}</Title>
                <Text className="pricing-card__price">{plan.price}</Text>
                <Paragraph>{plan.description}</Paragraph>
                <ul className="pricing-card__list">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Button
                  type={plan.highlighted ? 'primary' : 'default'}
                  size="large"
                  block
                  href="#cta"
                >
                  联系销售
                </Button>
              </Card>
            </Badge.Ribbon>
          </Col>
        ))}
      </Row>
    </section>
  );
}
