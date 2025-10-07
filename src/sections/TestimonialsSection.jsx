import { Avatar, Card, Carousel, Typography } from 'antd';
import { StarFilled } from '@ant-design/icons';
import './TestimonialsSection.css';

const testimonials = [
  {
    name: '李晨',
    title: 'SalePlus 销售副总裁',
    quote:
      'SkySales 帮我们在两个月内搭建起统一的销售流程，AI 对话助手让新人上手速度提升了 3 倍。',
  },
  {
    name: '王静',
    title: '晨曦制造 数字化总监',
    quote:
      '我们将经销商系统与 SkySales 打通后，报价效率提升 45%，管理层能实时看到渠道健康度。',
  },
  {
    name: '陈浩',
    title: '恒泰金融 客户成功负责人',
    quote:
      'SkySales 的数据仪表盘帮助我们精准定位流失风险，合规质检也极大减少了审查时间。',
  },
];

const { Title, Paragraph, Text } = Typography;

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="testimonials section"
      aria-labelledby="testimonials-title"
    >
      <div className="section-header">
        <Title level={2} id="testimonials-title">
          倾听客户的真实声音
        </Title>
        <Paragraph>
          来自不同行业的客户正在通过 SkySales 驱动可持续增长。
        </Paragraph>
      </div>
      <Carousel autoplay dots className="testimonial-carousel">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="testimonial-slide">
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
