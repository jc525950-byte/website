import { Card, Col, Row, Tag, Typography } from 'antd';
import SectionHeader from '../components/SectionHeader.jsx';
import { categoryMenu } from '../content/homepage.js';
import './PartnersSection.css';

const { Title, Paragraph, Link } = Typography;

export default function PartnersSection() {
  return (
    <section id="categories" className="partners section" aria-labelledby="partners-title">
      <SectionHeader
        id="partners-title"
        title="热门源码分类与栏目导航"
        subtitle="快速进入棋牌、菠菜、直播、网站等主力栏目，同时了解合作、资讯与站内提醒。"
        eyebrow="分类导航"
      />
      <Row gutter={[24, 24]} justify="center">
        {categoryMenu.map((item) => (
          <Col key={item.key} xs={24} sm={12} lg={8}>
            <Card className="category-card" bordered={false} hoverable>
              <Title level={4} className="category-card__title">
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              </Title>
              {item.children ? (
                <div className="category-card__tags">
                  {item.children.map((child) => (
                    <Tag key={child.href} color="processing">
                      <a href={child.href} target="_blank" rel="noreferrer">
                        {child.label}
                      </a>
                    </Tag>
                  ))}
                </div>
              ) : null}
              {!item.children ? (
                <Paragraph className="category-card__hint">
                  <Link href={item.href} target="_blank" rel="noreferrer">
                    立即查看
                  </Link>
                </Paragraph>
              ) : null}
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
