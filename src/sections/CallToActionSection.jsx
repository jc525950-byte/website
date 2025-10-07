import { Button, Col, Form, Input, Row, Typography } from 'antd';
import './CallToActionSection.css';

const { Title, Paragraph } = Typography;

export default function CallToActionSection() {
  return (
    <section id="cta" className="cta section" aria-labelledby="cta-title">
      <Row gutter={[32, 32]} align="middle" justify="center">
        <Col xs={24} lg={10}>
          <Title level={2} id="cta-title">
            安排一场个性化演示，了解 SkySales 如何助力增长
          </Title>
          <Paragraph>
            留下您的联系方式，我们的顾问将在 1 个工作日内与您联系，提供专属行业演示与 ROI 评估。
          </Paragraph>
        </Col>
        <Col xs={24} lg={10}>
          <div className="cta-form-wrapper" role="form">
            <Form layout="vertical">
              <Form.Item label="姓名" required>
                <Input size="large" placeholder="请输入您的姓名" />
              </Form.Item>
              <Form.Item label="工作邮箱" required>
                <Input size="large" type="email" placeholder="name@company.com" />
              </Form.Item>
              <Form.Item label="所在行业">
                <Input size="large" placeholder="例如：SaaS / 制造 / 金融" />
              </Form.Item>
              <Form.Item label="当前团队规模">
                <Input size="large" placeholder="请输入人数" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" size="large" block>
                  提交信息，预约演示
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </section>
  );
}
