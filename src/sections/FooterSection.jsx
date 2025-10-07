import { Layout, Typography } from 'antd';
import './FooterSection.css';

const { Footer } = Layout;
const { Text, Link } = Typography;

export default function FooterSection() {
  return (
    <Footer className="footer" aria-label="页脚">
      <div className="footer-inner footer-inner--simple">
        <Text className="footer-copy">
          Copyright © 2008 - 2025{' '}
          <Link href="https://www.kvxr.com/" target="_blank" rel="noreferrer">
            南亚源码网
          </Link>{' '}
          版权所有{' '}
          <Link href="https://www.kvxr.com/sitemap.xml" target="_blank" rel="noreferrer">
            网站地图
          </Link>
        </Text>
      </div>
    </Footer>
  );
}
