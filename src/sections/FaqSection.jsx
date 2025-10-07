import { Collapse } from 'antd';
import SectionHeader from '../components/SectionHeader.jsx';
import { faqList } from '../content/homepage.js';
import './FaqSection.css';

export default function FaqSection() {
  const items = faqList.map((faq) => ({
    key: faq.key,
    label: faq.question,
    children: <p>{faq.answer}</p>,
  }));

  return (
    <section id="faq" className="faq section" aria-labelledby="faq-title">
      <SectionHeader
        id="faq-title"
        title="常见问题解答"
        subtitle="从部署方式到客户成功服务，快速了解使用 SkySales 的关键问题。"
        eyebrow="FAQ"
        align="start"
      />
      <Collapse
        items={items}
        accordion
        bordered={false}
        defaultActiveKey={faqList.length ? [faqList[0].key] : undefined}
        className="faq-collapse"
      />
    </section>
  );
}
