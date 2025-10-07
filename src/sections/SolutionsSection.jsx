import { Card, Col, Row, Tag, Typography } from 'antd';
import './SolutionsSection.css';

const solutions = [
  {
    sector: 'SaaS & 互联网',
    title: '订阅收入增长方案',
    description:
      '从试用到续费的关键节点实现自动化触达，结合 AI 健康度评分预警流失风险。',
    tags: ['试用激活', '续费预测', '客户成功'],
  },
  {
    sector: '制造业',
    title: '渠道分销数字化方案',
    description: '整合经销商数据，实现跨区域线索同步，提升报价效率与订单透明度。',
    tags: ['渠道管理', '移动巡店', 'BI 报表'],
  },
  {
    sector: '金融服务',
    title: '精准营销与合规监控方案',
    description: '基于客户画像自动筛选理财产品，通过智能质检与通话存档满足监管要求。',
    tags: ['客户画像', '智能质检', '合规管理'],
  },
];

const { Title, Paragraph, Text } = Typography;

export default function SolutionsSection() {
  return (
    <section id="solutions" className="solutions section" aria-labelledby="solutions-title">
      <div className="section-header">
        <Title level={2} id="solutions-title">
          针对不同行业的深度解决方案
        </Title>
        <Paragraph>
          根据行业特性预置流程模板与指标，支持快速上线并与现有系统打通，助力业务全面数字化。
        </Paragraph>
      </div>
      <Row gutter={[24, 24]}>
        {solutions.map((solution) => (
          <Col key={solution.title} xs={24} lg={8}>
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
