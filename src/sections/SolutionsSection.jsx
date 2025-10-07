import { Card, Col, Row, Tag, Typography } from 'antd';
import SectionHeader from '../components/SectionHeader.jsx';
import { solutionList } from '../content/homepage.js';
import './SolutionsSection.css';

const { Title, Paragraph, Text } = Typography;

export default function SolutionsSection() {
  return (
    <section id="solutions" className="solutions section" aria-labelledby="solutions-title">
      <SectionHeader
        id="solutions-title"
        title="针对不同行业的深度解决方案"
        subtitle="根据行业特性预置流程模板与指标，支持快速上线并与现有系统打通，助力业务全面数字化。"
        eyebrow="行业实践"
      />
      <Row gutter={[24, 24]}>
        {solutionList.map((solution) => (
          <Col key={solution.key} xs={24} lg={8}>
            <Card className="solution-card" bordered={false}>
              <Text className="solution-sector">{solution.sector}</Text>
              <Title level={4}>{solution.title}</Title>
              <Paragraph>{solution.description}</Paragraph>
              <div className="solution-tags">
                {solution.tags.map((tag) => (
                  <Tag key={tag} color="blue">
                    {tag}
                  </Tag>
                ))}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
