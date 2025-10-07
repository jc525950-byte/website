import { Card, Image, Space, Tag, Typography } from 'antd';
import {
  detailBreadcrumb,
  detailHeader,
  servicePerks,
  downloadInfo,
  detailSections,
  galleryImages,
  relatedPosts,
} from '../content/detail.js';
import './DetailPage.css';

const { Title, Paragraph, Text } = Typography;

const FALLBACK_IMAGE = 'https://via.placeholder.com/640x400?text=No+Image';

export default function DetailPage() {
  return (
    <div className="detail-page">
      <div className="detail-container">
        <nav className="detail-breadcrumb" aria-label="breadcrumb">
          {detailBreadcrumb.map((crumb, index) => (
            <span key={crumb.label} className="detail-breadcrumb__item">
              {crumb.href ? (
                <a href={crumb.href} target="_blank" rel="noreferrer">
                  {crumb.label}
                </a>
              ) : (
                <span>{crumb.label}</span>
              )}
              {index < detailBreadcrumb.length - 1 ? <span className="detail-breadcrumb__divider">/</span> : null}
            </span>
          ))}
        </nav>

        <header className="detail-hero" id="top">
          <div className="detail-hero__media">
            <img
              src={detailHeader.cover}
              alt={detailHeader.title}
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = FALLBACK_IMAGE;
              }}
            />
          </div>
          <div className="detail-hero__content">
            <Tag color="green" className="detail-status">
              {detailHeader.status}
            </Tag>
            <Title level={1}>{detailHeader.title}</Title>
            <div className="detail-meta">
              {detailHeader.categories.map((category) => (
                <Tag key={category} color="cyan">
                  {category}
                </Tag>
              ))}
            </div>
            <Paragraph className="detail-summary">{detailHeader.summary}</Paragraph>
            <ul className="detail-perks">
              {servicePerks.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
          </div>
        </header>

        <section id="download" className="detail-download" aria-labelledby="download-title">
          <Card className="detail-download__card">
            <div className="detail-download__info">
              <Title level={3} id="download-title">
                资源下载
              </Title>
              <Paragraph className="detail-download__price">
                <Text strong>下载价格：</Text>
                <Text className="detail-download__amount">{downloadInfo.price}</Text>
                <Text className="detail-download__currency">{downloadInfo.currency}</Text>
              </Paragraph>
              <Paragraph className="detail-download__tip">{downloadInfo.tip}</Paragraph>
            </div>
            <a
              className="detail-download__action"
              href={downloadInfo.ctaLink}
              target="_blank"
              rel="noreferrer"
            >
              {downloadInfo.ctaLabel}
            </a>
          </Card>
        </section>

        <section id="content" className="detail-content" aria-labelledby="content-title">
          <Title level={2} id="content-title">
            项目详情
          </Title>
          <div className="detail-content__body">
            {detailSections.map((section) => (
              <article key={section.id} id={section.id} className="detail-section">
                <Title level={3}>{section.title}</Title>
                {section.content.map((paragraph, index) => (
                  <Paragraph key={index}>{paragraph}</Paragraph>
                ))}
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="detail-gallery" aria-labelledby="gallery-title">
          <div className="detail-section-header">
            <Title level={2} id="gallery-title">
              测试游戏截图
            </Title>
            <Paragraph>精选试玩截图，帮助您快速了解前端视觉表现。</Paragraph>
          </div>
          <div className="detail-gallery__grid">
            {galleryImages.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`Lucky Dragons 测试截图 ${index + 1}`}
                height={160}
                fallback={FALLBACK_IMAGE}
                preview={{ mask: '查看大图' }}
              />
            ))}
          </div>
        </section>

        <section id="related" className="detail-related" aria-labelledby="related-title">
          <div className="detail-section-header">
            <Title level={2} id="related-title">
              相关资源
            </Title>
            <Paragraph>更多已测试的热门源码，支持快速部署与运营。</Paragraph>
          </div>
          <Space direction="vertical" size={16} className="detail-related__list">
            {relatedPosts.map((post) => (
              <Card key={post.link} className="detail-related__item" hoverable>
                <div className="detail-related__item-inner">
                  <div className="detail-related__thumb">
                    <img
                      src={post.cover}
                      alt={post.title}
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = FALLBACK_IMAGE;
                      }}
                    />
                  </div>
                  <div className="detail-related__content">
                    <a href={post.link} target="_blank" rel="noreferrer" className="detail-related__title">
                      {post.title}
                    </a>
                    <div className="detail-related__meta">
                      {post.categories.map((cat) => (
                        <Tag key={cat}>{cat}</Tag>
                      ))}
                      <Tag color="orange">¥{post.price}</Tag>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </Space>
        </section>
      </div>
    </div>
  );
}
