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
        title="平台服务亮点"
        subtitle="聚焦源码收录、亲测调试与运维保障，让站长在东南亚项目落地更安心。"
        eyebrow="服务优势"
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
