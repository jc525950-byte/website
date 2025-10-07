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
        title="倾听客户的真实声音"
        subtitle="来自不同行业的客户正在通过 SkySales 驱动可持续增长。"
        eyebrow="客户故事"
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
