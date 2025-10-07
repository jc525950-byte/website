import { Button, Col, Form, Input, Row, Typography } from 'antd';
import './CallToActionSection.css';

const { Title, Paragraph } = Typography;

export default function CallToActionSection() {
  return (
    <section id="contact" className="cta section" aria-labelledby="cta-title">
      <Row gutter={[32, 32]} align="middle" justify="center">
        <Col xs={24} lg={10}>
          <Title level={2} id="cta-title">
            提交需求，获取站长快速回应
          </Title>
          <Paragraph>
            留下您的合作意向或源码需求，站长团队会在 24 小时内通过站内私信或 Telegram 与您确认细节。
          </Paragraph>
        </Col>
        <Col xs={24} lg={10}>
          <div className="cta-form-wrapper" role="form">
            <Form layout="vertical">
              <Form.Item label="联系人" required>
                <Input size="large" placeholder="请输入称呼或公司名称" />
              </Form.Item>
              <Form.Item label="联系方式" required>
                <Input size="large" placeholder="微信号 / Telegram / 邮箱" />
              </Form.Item>
              <Form.Item label="需求分类">
                <Input size="large" placeholder="如：棋牌源码、支付渠道、广告投放" />
              </Form.Item>
              <Form.Item label="补充说明">
                <Input.TextArea rows={4} placeholder="补充上线时间、预算或其他说明" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" size="large" block>
                  提交信息，等待站长联系
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </section>
  );
}
