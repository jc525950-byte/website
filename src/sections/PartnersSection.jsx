import { Col, Row } from 'antd';
import SectionHeader from '../components/SectionHeader.jsx';
import { partnerLogos } from '../content/homepage.js';
import './PartnersSection.css';

export default function PartnersSection() {
  return (
    <section id="partners" className="partners section" aria-labelledby="partners-title">
      <SectionHeader
        id="partners-title"
        title="受到行业领先团队信赖"
        subtitle="超过 500+ 成长型企业选择 SkySales 作为统一的销售与客户运营平台。"
        eyebrow="合作伙伴"
      />
      <Row gutter={[24, 24]} justify="center" className="partners-grid">
        {partnerLogos.map((partner) => (
          <Col key={partner.key} xs={12} sm={8} md={6} lg={4}>
            <div className="partner-badge" role="img" aria-label={`${partner.name} 标识`}>
              {partner.name}
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}
