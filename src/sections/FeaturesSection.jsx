import { Card, Col, Row, Typography } from 'antd';
import {
  ThunderboltOutlined,
  RobotOutlined,
  BarChartOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import SectionHeader from '../components/SectionHeader.jsx';
import { featureList } from '../content/homepage.js';
import './FeaturesSection.css';

const iconMap = {
  workflow: ThunderboltOutlined,
  assistant: RobotOutlined,
  analytics: BarChartOutlined,
  collaboration: TeamOutlined,
};

const { Title, Paragraph } = Typography;

export default function FeaturesSection() {
  return (
    <section id="features" className="features section" aria-labelledby="features-title">
      <SectionHeader
        id="features-title"
        title="用一套系统解决增长过程中遇到的阻力"
        subtitle="SkySales 聚焦客户全生命周期，通过自动化引擎和数据驱动的洞察帮助团队持续复盘与优化。"
        eyebrow="核心能力"
      />
      <Row gutter={[24, 24]}>
        {featureList.map((feature) => {
          const IconComponent = iconMap[feature.icon];
          return (
            <Col key={feature.key} xs={24} sm={12} xl={6}>
            <Card className="feature-card" bordered={false}>
              <div className="feature-icon" aria-hidden="true">
                <IconComponent />
              </div>
              <Title level={4}>{feature.title}</Title>
              <Paragraph>{feature.description}</Paragraph>
            </Card>
            </Col>
          );
        })}
      </Row>
    </section>
  );
}
