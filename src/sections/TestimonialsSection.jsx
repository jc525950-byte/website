import { Avatar, Card, Carousel, Typography } from 'antd';
import { StarFilled } from '@ant-design/icons';
import SectionHeader from '../components/SectionHeader.jsx';
import { testimonialList } from '../content/homepage.js';
import './TestimonialsSection.css';

const { Paragraph, Text } = Typography;

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="testimonials section"
      aria-labelledby="testimonials-title"
    >
      <SectionHeader
        id="testimonials-title"
        title="站点服务承诺"
        subtitle="以下引述均来自网站公开信息，涵盖平台定位、运维团队与质量保障。"
        eyebrow="站内摘录"
      />
      <Carousel autoplay dots className="testimonial-carousel">
        {testimonialList.map((testimonial) => (
          <div key={testimonial.key} className="testimonial-slide">
            <Card bordered={false} className="testimonial-card">
              <div className="testimonial-rating" aria-label="五星好评">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarFilled key={index} />
                ))}
              </div>
              <Paragraph className="testimonial-quote">“{testimonial.quote}”</Paragraph>
              <div className="testimonial-author">
                <Avatar size={56} className="testimonial-avatar">
                  {testimonial.name.slice(0, 1)}
                </Avatar>
                <div>
                  <Text strong>{testimonial.name}</Text>
                  <Paragraph>{testimonial.title}</Paragraph>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
