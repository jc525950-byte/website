import { useMemo, useState, memo } from 'react';
import { Card, Pagination, Tag, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { articleCategories, resourceList } from '../content/homepage.js';
import './ArticlesSections.css';

const { Title, Paragraph } = Typography;
const PAGE_SIZE = 10;
const FALLBACK_IMAGE = 'https://via.placeholder.com/600x400?text=No+Image';

// 使用 memo 优化文章卡片组件
const ArticleCard = memo(({ item }) => {
  const priceTag = item.price ? `¥${item.price}` : null;
  
  return (
    <Card
      key={item.key}
      className="article-card"
      hoverable
      cover={
        <Link to="/detail" className="article-card__cover" title={`查看${item.title}的详细介绍`}>
          <img
            src={item.image}
            alt={`${item.title} - ${item.categories.join('、')}源码详情`}
            title={`查看${item.title}的详细信息和下载链接`}
            loading="lazy"
            width="300"
            height="200"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = FALLBACK_IMAGE;
            }}
          />
        </Link>
      }
    >
      <div className="article-card__tags">
        {item.categories.map((cat) => (
          <Tag key={cat} color="processing">
            {cat}
          </Tag>
        ))}
        {priceTag ? (
          <Tag color="orange">
            {priceTag}
          </Tag>
        ) : null}
      </div>
      <Link to="/detail" className="article-card__title" title={`前往 ${item.title} 源码详情页`}>
        {item.title}
      </Link>
    </Card>
  );
});

ArticleCard.displayName = 'ArticleCard';

// 使用 memo 优化分类组件
const CategorySection = memo(({ category }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const items = useMemo(
    () => resourceList.filter((item) => item.categories.includes(category.label)),
    [category.label],
  );

  const pagedItems = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return items.slice(start, start + PAGE_SIZE);
  }, [currentPage, items]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const sectionEl = document.getElementById(category.key);
    if (sectionEl) {
      const offset = Math.max(sectionEl.offsetTop - 120, 0);
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id={category.key} className="section article-section" aria-labelledby={`${category.key}-title`}>
      <header className="article-section__header">
        <Title level={2} id={`${category.key}-title`}>
          {category.label}
        </Title>
        <Paragraph>
          站长亲测调试的最新 {category.label} 资源，点击卡片可跳转至详情页查看完整介绍。
        </Paragraph>
      </header>
      <div className="article-grid">
        {pagedItems.map((item) => (
          <ArticleCard key={item.key} item={item} />
        ))}
      </div>
      {items.length > PAGE_SIZE ? (
        <div className="article-pagination">
          <Pagination
            current={currentPage}
            pageSize={PAGE_SIZE}
            total={items.length}
            onChange={handlePageChange}
            showSizeChanger={false}
          />
        </div>
      ) : null}
    </section>
  );
});

CategorySection.displayName = 'CategorySection';

export default function ArticlesSections() {
  return (
    <>
      {articleCategories.map((category) => (
        <CategorySection key={category.key} category={category} />
      ))}
    </>
  );
}
