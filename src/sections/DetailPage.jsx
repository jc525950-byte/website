import { Breadcrumb, Tag, Typography } from 'antd';
import {
  detailBreadcrumb,
  detailHeader,
  detailSections,
  servicePerks,
  downloadInfo,
  galleryImages,
  relatedPosts,
} from '../content/detail.js';
import SEOHead from '../components/SEOHead.jsx';
import './DetailPage.css';

const { Title, Paragraph } = Typography;

const FALLBACK_IMAGE = 'https://via.placeholder.com/640x400?text=No+Image';

export default function DetailPage() {
  return (
    <>
      <SEOHead 
        title="Lucky Dragons美国老虎机源码 - 英文版拉霸角子老虎机游戏 | SkySales"
        description="Lucky Dragons美国老虎机源码，英文版拉霸角子老虎机游戏，已测试可运营，支持快速部署。提供完整源码和技术支持。"
        keywords="老虎机源码,拉霸游戏,H5游戏源码,Lucky Dragons,角子老虎机"
        ogTitle="Lucky Dragons美国老虎机源码 - 英文版拉霸角子老虎机游戏"
        ogDescription="Lucky Dragons美国老虎机源码，英文版拉霸角子老虎机游戏，已测试可运营，支持快速部署。提供完整源码和技术支持。"
        ogImage={detailHeader.cover}
        ogUrl={window.location.href}
        canonical={window.location.href}
      />
      <main className="detail-page">
        <section className="detail-container" aria-labelledby="detail-title">
          <Breadcrumb className="detail-breadcrumb">
            {detailBreadcrumb.map((crumb) => (
              <Breadcrumb.Item key={crumb.label}>
                {crumb.href ? (
                  <a href={crumb.href} target="_blank" rel="noreferrer">
                    {crumb.label}
                  </a>
                ) : (
                  crumb.label
                )}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>

          <div className="detail-header-box">
            <figure className="detail-header-box__media">
              <img
                src={detailHeader.cover}
                alt={`${detailHeader.title} 封面图`}
                title={`${detailHeader.title} - 查看详细介绍`}
                width="640"
                height="400"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = FALLBACK_IMAGE;
                }}
              />
            </figure>

            <div className="detail-header-box__content">
              <header className="detail-header">
                <Tag color="green" className="detail-status">
                  {detailHeader.status}
                </Tag>
                <Title level={1} id="detail-title">
                  {detailHeader.title}
                </Title>
                <div className="detail-meta">
                  {detailHeader.categories.map((category) => (
                    <Tag key={category} color="cyan">
                      {category}
                    </Tag>
                  ))}
                </div>
              </header>

              <Paragraph className="detail-summary">
                {detailHeader.summary}
              </Paragraph>
            </div>
          </div>

          <div className="detail-main">
            <article className="detail-article" aria-label="项目详情内容">
              <div className="detail-article__content">
                {detailSections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="detail-article__section"
                  >
                    <Title level={2}>{section.title}</Title>
                    {section.content.map((paragraph, index) => (
                      <Paragraph key={index}>{paragraph}</Paragraph>
                    ))}
                  </section>
                ))}
              </div>

              {galleryImages.length > 0 && (
                <section className="detail-gallery" aria-label="演示截图">
                  <Title level={3}>演示截图</Title>
                  <div className="detail-gallery__grid">
                    {galleryImages.map((src, index) => (
                      <figure key={src} className="detail-gallery__item">
                        <img
                          src={src}
                          alt={`${detailHeader.title} 演示截图 ${index + 1}`}
                          loading="lazy"
                          onError={(event) => {
                            event.currentTarget.onerror = null;
                            event.currentTarget.src = FALLBACK_IMAGE;
                          }}
                        />
                      </figure>
                    ))}
                  </div>
                </section>
              )}
            </article>

            <aside className="detail-sidebar" aria-label="页面辅助信息">
              <nav className="detail-toc" aria-label="文章目录">
                <Title level={3}>文章目录</Title>
                <ol>
                  {detailSections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>{section.title}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              <section className="detail-download-card" role="group" aria-label="资源下载信息">
                <span className="detail-download-card__title">资源下载</span>
                <div className="detail-download-card__body">
                  <div className="detail-download-card__price">
                    <span className="detail-download-card__label">下载价格</span>
                    <strong className="detail-download-card__value">
                      {downloadInfo.price}
                    </strong>
                    <span className="detail-download-card__currency">
                      {downloadInfo.currency}
                    </span>
                  </div>
                  <a
                    className="detail-download-card__cta"
                    href={downloadInfo.ctaLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {downloadInfo.ctaLabel}
                  </a>
                </div>
                <Paragraph type="secondary" className="detail-download-card__tip">
                  {downloadInfo.tip}
                </Paragraph>
              </section>

              <section className="detail-service-card" aria-label="服务保障">
                <Title level={4} className="detail-service-card__title">
                  服务保障
                </Title>
                <ul className="detail-service-list">
                  {servicePerks.map((perk) => (
                    <li key={perk}>
                      <span className="detail-service-list__dot" aria-hidden="true" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </aside>
          </div>

          {relatedPosts.length > 0 && (
            <section className="detail-related" aria-label="相关源码推荐">
              <header className="detail-related__header">
                <Title level={3}>相关源码</Title>
              </header>
              <div className="detail-related__grid">
                {relatedPosts.map((post) => (
                  <article key={post.link} className="detail-related__item">
                    <a href={post.link} target="_blank" rel="noreferrer">
                      <figure className="detail-related__media">
                        <img
                          src={post.cover}
                          alt={post.title}
                          loading="lazy"
                          onError={(event) => {
                            event.currentTarget.onerror = null;
                            event.currentTarget.src = FALLBACK_IMAGE;
                          }}
                        />
                      </figure>
                      <div className="detail-related__body">
                        <div className="detail-related__categories">
                          {post.categories.join(' · ')}
                        </div>
                        <h4 className="detail-related__title">{post.title}</h4>
                        <div className="detail-related__footer">
                          <span className="detail-related__price">
                            {post.price}
                            <span className="detail-related__currency">
                              {downloadInfo.currency}
                            </span>
                          </span>
                        </div>
                      </div>
                    </a>
                  </article>
                ))}
              </div>
            </section>
          )}
        </section>
      </main>
    </>
  );
}
