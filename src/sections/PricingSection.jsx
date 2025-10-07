import { Badge, Button, Card, Col, Row, Typography } from 'antd';
import './PricingSection.css';

const plans = [
  {
    name: '成长版',
    price: '¥299/月',
    description: '适合 10 人以内销售团队，快速搭建标准化 CRM 流程。',
    features: ['线索与客户管理', '自动提醒与任务分配', '邮件与日历集成'],
  },
  {
    name: '专业版',
    price: '¥599/月',
    description: '覆盖从线索到回款的全流程，内置行业模板与自动化引擎。',
    features: ['多渠道线索捕获', 'AI 智能话术与质检', '自定义仪表盘'],
    highlighted: true,
  },
  {
    name: '企业版',
    price: '定制报价',
    description: '满足大型集团与跨区域团队的复杂协作、安全与合规需求。',
    features: ['专属客户成功团队', '私有化或混合云部署', '高级安全与审计'],
  },
];

const { Title, Paragraph, Text } = Typography;

export default function PricingSection() {
  return (
    <section id="pricing" className="pricing section" aria-labelledby="pricing-title">
      <div className="section-header">
        <Title level={2} id="pricing-title">
          灵活定价，按需成长
        </Title>
        <Paragraph>
          根据团队规模随时升级，数据和流程无缝迁移。支持企业定制与私有化部署。
        </Paragraph>
      </div>
      <Row gutter={[24, 24]}>
        {plans.map((plan) => (
          <Col key={plan.name} xs={24} md={8}>
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
