import { Card, Col, Row, Typography } from 'antd';
import {
  ThunderboltOutlined,
  RobotOutlined,
  BarChartOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import './FeaturesSection.css';

const features = [
  {
    icon: <ThunderboltOutlined />,
    title: '一体化销售流程',
    description: '统一线索、商机与回款流程，智能分配任务，自动提醒下一个最佳行动。',
  },
  {
    icon: <RobotOutlined />,
    title: 'AI 驱动的对话助手',
    description: '实时生成电话与邮件话术，支持智能质检，轻松复制明星销售经验。',
  },
  {
    icon: <BarChartOutlined />,
    title: '多维度数据洞察',
    description: '构建从市场到客户成功的全链路仪表盘，决策更快更准确。',
  },
  {
    icon: <TeamOutlined />,
    title: '协同赋能团队',
    description: '跨部门共享客户画像与协作记录，实现销售、市场、客服的一体化协作。',
  },
];

const { Title, Paragraph } = Typography;

export default function FeaturesSection() {
  return (
    <section id="features" className="features section" aria-labelledby="features-title">
      <div className="section-header">
        <Title level={2} id="features-title">
          用一套系统解决增长过程中遇到的阻力
        </Title>
        <Paragraph>
          SkySales 聚焦客户全生命周期，通过自动化引擎和数据驱动的洞察帮助团队持续复盘与优化。
        </Paragraph>
      </div>
      <Row gutter={[24, 24]}>
        {features.map((feature) => (
          <Col key={feature.title} xs={24} sm={12} xl={6}>
            <Card className="feature-card" bordered={false}>
              <div className="feature-icon" aria-hidden="true">
                {feature.icon}
              </div>
              <Title level={4}>{feature.title}</Title>
              <Paragraph>{feature.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
