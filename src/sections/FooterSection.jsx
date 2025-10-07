import { Layout, Space, Typography } from 'antd';
import './FooterSection.css';

const { Footer } = Layout;
const { Text, Link } = Typography;

export default function FooterSection() {
  return (
    <Footer className="footer" aria-label="页脚">
      <div>
        <Text strong className="footer-brand">
          SkySales
        </Text>
        <Text className="footer-description">
          © {new Date().getFullYear()} SkySales Technologies. 保留所有权利。
        </Text>
      </div>
      <Space size="large" className="footer-links" aria-label="页脚导航">
        <Link href="#partners">合作伙伴</Link>
        <Link href="#features">产品特性</Link>
        <Link href="#solutions">行业方案</Link>
        <Link href="#pricing">价格</Link>
        <Link href="#cta">联系我们</Link>
        <Link href="#faq">常见问题</Link>
        <Link href="#">隐私政策</Link>
      </Space>
    </Footer>
  );
}
