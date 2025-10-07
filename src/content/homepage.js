export const heroHighlights = [
  { title: '销售额提升', value: '36%' },
  { title: '客户满意度', value: '4.9/5' },
  { title: '部署时间', value: '7天' },
];

export const featureList = [
  {
    key: 'workflow',
    icon: 'workflow',
    title: '一体化销售流程',
    description:
      '统一线索、商机与回款流程，智能分配任务，自动提醒下一个最佳行动。',
  },
  {
    key: 'assistant',
    icon: 'assistant',
    title: 'AI 驱动的对话助手',
    description:
      '实时生成电话与邮件话术，支持智能质检，轻松复制明星销售经验。',
  },
  {
    key: 'analytics',
    icon: 'analytics',
    title: '多维度数据洞察',
    description:
      '构建从市场到客户成功的全链路仪表盘，决策更快更准确。',
  },
  {
    key: 'collaboration',
    icon: 'collaboration',
    title: '协同赋能团队',
    description:
      '跨部门共享客户画像与协作记录，实现销售、市场、客服的一体化协作。',
  },
];

export const solutionList = [
  {
    key: 'saas',
    sector: 'SaaS & 互联网',
    title: '订阅收入增长方案',
    description:
      '从试用到续费的关键节点实现自动化触达，结合 AI 健康度评分预警流失风险。',
    tags: ['试用激活', '续费预测', '客户成功'],
    price: '¥1,999/月起',
    image: '/images/solution-saas.svg',
  },
  {
    key: 'manufacturing',
    sector: '制造业',
    title: '渠道分销数字化方案',
    description:
      '整合经销商数据，实现跨区域线索同步，提升报价效率与订单透明度。',
    tags: ['渠道管理', '移动巡店', 'BI 报表'],
    price: '¥2,899/月起',
    image: '/images/solution-manufacturing.svg',
  },
  {
    key: 'finance',
    sector: '金融服务',
    title: '精准营销与合规监控方案',
    description:
      '基于客户画像自动筛选理财产品，通过智能质检与通话存档满足监管要求。',
    tags: ['客户画像', '智能质检', '合规管理'],
    price: '¥3,299/月起',
    image: '/images/solution-finance.svg',
  },
  {
    key: 'retail',
    sector: '零售连锁',
    title: '全渠道会员增长方案',
    description:
      '联动门店、APP 与小程序，实现精准优惠推送与会员生命周期价值管理。',
    tags: ['会员运营', '全渠道触达', '库存联动'],
    price: '¥1,499/月起',
    image: '/images/solution-retail.svg',
  },
];

export const pricingPlans = [
  {
    key: 'growth',
    name: '成长版',
    price: '¥299/月',
    description: '适合 10 人以内销售团队，快速搭建标准化 CRM 流程。',
    features: ['线索与客户管理', '自动提醒与任务分配', '邮件与日历集成'],
  },
  {
    key: 'professional',
    name: '专业版',
    price: '¥599/月',
    description: '覆盖从线索到回款的全流程，内置行业模板与自动化引擎。',
    features: ['多渠道线索捕获', 'AI 智能话术与质检', '自定义仪表盘'],
    highlighted: true,
  },
  {
    key: 'enterprise',
    name: '企业版',
    price: '定制报价',
    description: '满足大型集团与跨区域团队的复杂协作、安全与合规需求。',
    features: ['专属客户成功团队', '私有化或混合云部署', '高级安全与审计'],
  },
];

export const testimonialList = [
  {
    key: 'saleplus',
    name: '李晨',
    title: 'SalePlus 销售副总裁',
    quote:
      'SkySales 帮我们在两个月内搭建起统一的销售流程，AI 对话助手让新人上手速度提升了 3 倍。',
  },
  {
    key: 'manufacture',
    name: '王静',
    title: '晨曦制造 数字化总监',
    quote:
      '我们将经销商系统与 SkySales 打通后，报价效率提升 45%，管理层能实时看到渠道健康度。',
  },
  {
    key: 'finance',
    name: '陈浩',
    title: '恒泰金融 客户成功负责人',
    quote:
      'SkySales 的数据仪表盘帮助我们精准定位流失风险，合规质检也极大减少了审查时间。',
  },
];

export const partnerLogos = [
  { key: 'bytewave', name: 'ByteWave' },
  { key: 'fusionpay', name: 'FusionPay' },
  { key: 'nova', name: 'Nova Logistics' },
  { key: 'aurora', name: 'Aurora Labs' },
  { key: 'zenwell', name: 'Zenwell Bank' },
  { key: 'visionmax', name: 'VisionMax Retail' },
];

export const faqList = [
  {
    key: 'deploy',
    question: '部署与上线需要多久？',
    answer:
      '标准云版本最快 7 天即可完成部署并培训到位。若需私有化或混合云部署，我们会提供专项项目经理与迁移方案，确保数据安全与业务连续性。',
  },
  {
    key: 'integration',
    question: 'SkySales 能与现有系统打通吗？',
    answer:
      '支持与主流 ERP、财务、客服系统进行 API 或中间件集成，并提供开放平台与 Webhook，帮助企业构建自己的数字化闭环。',
  },
  {
    key: 'security',
    question: '数据安全如何保障？',
    answer:
      '我们通过 ISO 27001、等级保护等安全认证，提供细粒度权限、操作审计、数据加密与备份策略，帮助企业满足合规要求。',
  },
  {
    key: 'support',
    question: '是否提供客户成功服务？',
    answer:
      '专业版及以上客户将拥有专属客户成功顾问，提供定期业务回顾、行业最佳实践与二次培训，协助团队持续产出价值。',
  },
];
