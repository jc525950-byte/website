import { Button, Card, Col, Row, Typography } from 'antd';
import SectionHeader from '../components/SectionHeader.jsx';
import { resourceList } from '../content/homepage.js';
import './SolutionsSection.css';

const { Title, Paragraph, Text } = Typography;

export default function SolutionsSection() {
  return (
    <section id="resources" className="solutions section" aria-labelledby="solutions-title">
      <SectionHeader
        id="solutions-title"
        title="最新上架源码与热门资源"
        subtitle="从加拿大PC28到真人直播、彩票、区块链交易所，多类源码均可在站内获取。"
        eyebrow="最新发布"
      />
      <Row gutter={[24, 24]} justify="center">
        {resourceList.slice(0, 12).map((resource) => (
          <Col key={resource.key} xs={24} md={12} lg={8}>
            <Card className="resource-card" bordered={false} hoverable>
              <Text className="resource-card__category">{resource.category}</Text>
              <Title level={4} className="resource-card__title">
                <a href={resource.link} target="_blank" rel="noreferrer">
                  {resource.title}
                </a>
              </Title>
              <Paragraph className="resource-card__excerpt">{resource.excerpt}</Paragraph>
              <div className="resource-card__footer">
                <Text className="resource-card__price">¥{resource.price}</Text>
                <Button
                  type="primary"
                  href={resource.link}
                  target="_blank"
                  rel="noreferrer"
                  size="middle"
                >
                  查看详情
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
