import { Typography } from 'antd';
import './SectionHeader.css';

const { Title, Paragraph } = Typography;

export default function SectionHeader({
  id,
  title,
  subtitle,
  align = 'center',
  level = 2,
  eyebrow,
}) {
  return (
    <header className={`section-header section-header--${align}`}>
      {eyebrow ? (
        <span className="section-header__eyebrow" aria-hidden="true">
          {eyebrow}
        </span>
      ) : null}
      <Title level={level} id={id}>
        {title}
      </Title>
      {subtitle ? <Paragraph>{subtitle}</Paragraph> : null}
    </header>
  );
}
