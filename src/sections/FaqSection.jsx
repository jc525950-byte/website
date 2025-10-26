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
        subtitle="基于网站提供的信息，总结常见的访问与合作问题。"
        eyebrow="站点 FAQ"
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
