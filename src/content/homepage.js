export const heroHighlights = [
  { title: '行业经验', value: '15年' },
  { title: '运维保障', value: '24小时' },
  { title: '质量保障', value: '亲测调试' },
];

export const categoryMenu = [
  {
    key: 'menu-qipai',
    label: '棋牌源码专区',
    href: 'https://www.kvxr.com/qipaiyuanma',
    children: [
      { label: '德州扑克源码', href: 'https://www.kvxr.com/tag/dezhoupuke' },
      { label: '牛牛游戏合集', href: 'https://www.kvxr.com/tag/niuniu' },
      { label: '地方棋牌定制', href: 'https://www.kvxr.com/tag/difangqipai' },
    ],
  },
  {
    key: 'menu-bocai',
    label: '菠菜源码导航',
    href: 'https://www.kvxr.com/bocaiyuanma',
    children: [
      { label: '体育投注系统', href: 'https://www.kvxr.com/tag/tiyudupan' },
      { label: '彩票下注平台', href: 'https://www.kvxr.com/tag/caipiao' },
      { label: '真人视讯包网', href: 'https://www.kvxr.com/tag/zhenrenshixun' },
    ],
  },
  {
    key: 'menu-live',
    label: '直播源码中心',
    href: 'https://www.kvxr.com/zhiboyuanma',
    children: [
      { label: '海外直播平台', href: 'https://www.kvxr.com/tag/haiwaizhibo' },
      { label: '成人内容合规', href: 'https://www.kvxr.com/tag/chengrenzhibo' },
      { label: '互动礼物系统', href: 'https://www.kvxr.com/tag/liwuxitong' },
    ],
  },
  {
    key: 'menu-h5',
    label: 'H5 游戏与小程序',
    href: 'https://www.kvxr.com/h5yuanma',
    children: [
      { label: '热门H5合集', href: 'https://www.kvxr.com/tag/h5game' },
      { label: '小游戏联运', href: 'https://www.kvxr.com/tag/lianyun' },
      { label: '推广裂变工具', href: 'https://www.kvxr.com/tag/tuiguang' },
    ],
  },
  {
    key: 'menu-website',
    label: '企业网站源码',
    href: 'https://www.kvxr.com/vipyuanma',
  },
  {
    key: 'menu-service',
    label: '包网搭建与售后',
    href: 'https://www.kvxr.com/baowang',
  },
  {
    key: 'menu-news',
    label: '行业资讯',
    href: 'https://www.kvxr.com/news',
  },
];

export const articleCategories = [
  { key: 'qipai', label: '棋牌源码' },
  { key: 'bocai', label: '菠菜源码' },
  { key: 'website', label: '网站源码' },
  { key: 'live', label: '直播源码' },
  { key: 'h5', label: 'H5源码' },
];

export const featureList = [
  {
    key: 'workflow',
    icon: 'workflow',
    title: '包网流程一条龙',
    description:
      '覆盖域名、服务器、程序部署与支付渠道对接，全程由站长团队跟进，保障极速上线。',
  },
  {
    key: 'assistant',
    icon: 'assistant',
    title: '项目顾问在线值守',
    description:
      '提供需求咨询、渠道对接与营销策略建议，帮助团队评估风险并制定上线计划。',
  },
  {
    key: 'analytics',
    icon: 'analytics',
    title: '稳定系统实时监控',
    description:
      '长驻运维团队24小时监控程序运行状态，故障快速响应，确保业务不中断。',
  },
  {
    key: 'collaboration',
    icon: 'collaboration',
    title: '多语言协同支持',
    description:
      '支持中文、英文、越南语等多种语言资料与客服通道，助力东南亚市场本地化运营。',
  },
];

export const servicePlans = [
  {
    key: 'technical',
    name: '源码部署服务',
    description: '购买即享安装调试，包含服务器环境优化与数据库初始化配置。',
    features: ['24小时内交付', '提供常用安全策略', '赠送基础运维手册'],
    href: 'https://www.kvxr.com/kaifufuwu',
  },
  {
    key: 'operation',
    name: '包网托管计划',
    description: '适合希望快速上线的团队，站长负责搭建、监控与日常维护。',
    features: ['专属项目经理', '运维与安全巡检', '数据备份与恢复'],
    href: 'https://www.kvxr.com/baowang',
  },
  {
    key: 'marketing',
    name: '推广流量合作',
    description: '整合广告渠道、代理拓展与支付方案，帮助项目冷启动。',
    features: ['Telegram 渠道推广', '代理分销策略', '支付与结算咨询'],
    href: 'https://www.kvxr.com/tuiguang',
  },
];

export const testimonialList = [
  {
    key: 'operator',
    name: '刘总',
    title: '东南亚包网运营商',
    quote:
      '源码交付速度很快，技术团队配合也到位，遇到风控问题能够在半小时内响应并解决。',
  },
  {
    key: 'agent',
    name: 'Yong',
    title: '马来西亚渠道代理',
    quote:
      '站长团队帮助我们定制本地化界面，同时提供 Telegram 运营建议，渠道转化率明显提升。',
  },
  {
    key: 'studio',
    name: 'Tran',
    title: '越南工作室负责人',
    quote:
      '源码质量过关，二开需求响应及时，售后团队提供的安全策略让我们更安心地运营。',
  },
];

export const faqList = [
  {
    key: 'delivery-time',
    question: '购买源码后多久可以交付？',
    answer:
      '常规整站源码在确认服务器信息后 24 小时内完成部署。若涉及多站联动或二次开发，会在沟通需求时给出详细排期。',
  },
  {
    key: 'after-sale',
    question: '源码是否提供售后与更新？',
    answer:
      '所有付费源码均包含基础售后与漏洞修复，针对大版本更新或定制需求提供单独报价。',
  },
  {
    key: 'payment',
    question: '支持哪些支付方式？',
    answer:
      '目前支持 USDT、TRX、银行卡转账等多种方式，具体支付通道会在下单前与您确认。',
  },
  {
    key: 'compliance',
    question: '是否提供合规风险提示？',
    answer:
      '站长团队会结合不同地区政策提供风险提示与备案建议，但请您务必遵守当地法律法规，在合规范围内使用源码。',
  },
];

export const resourceList = [
  {
    key: '59359',
    title: '金鑫娱乐源码/多玩法加拿大PC28/无限代推广/带接口游戏',
    link: 'https://www.kvxr.com/59359.html',
    categories: ['H5源码', '菠菜源码'],
    excerpt:
      '【金鑫娱乐源码】是一个集真人视讯、电子、体育、棋牌、彩票游戏等综合游戏平台，...',
    price: '1380',
    image: 'https://picsum.photos/300/200?random=1',
  },
  {
    key: '59325',
    title: 'Stripchat全球性爱直播源码/免费视频直播节目/最佳成人色情网站',
    link: 'https://www.kvxr.com/59325.html',
    categories: ['直播源码'],
    excerpt:
      'Stripchat全球性爱直播源码 是一个国际成人网络直播平台，拥有来自世界各地的模特...',
    price: '1680',
    image: 'https://picsum.photos/300/200?random=2',
  },
  {
    key: '59290',
    title: '魅思视频二开星空影视源码/真人直播漫画小说约炮游戏一体',
    link: 'https://www.kvxr.com/59290.html',
    categories: ['H5源码', '直播源码'],
    excerpt:
      '网上的流传的版本有很多BUG，而且手机版非常卡。而且没有APP设置。源码是花重金购...',
    price: '2180',
    image: 'https://picsum.photos/300/200?random=3',
  },
  {
    key: '59263',
    title: 'Lucky Dragons美国老虎机源码/英文版拉霸角子老虎机游戏',
    link: 'https://www.kvxr.com/59263.html',
    categories: ['H5源码', '棋牌源码'],
    excerpt:
      'Lucky Dragons美国老虎机源码是 Pragmatic Play 推出的一款在线老虎机游戏。它具有...',
    price: '2380',
    image: 'https://picsum.photos/300/200?random=4',
  },
  {
    key: '59223',
    title: 'GO99越南综合盘源码/东南亚第一老虎机博彩游戏网站',
    link: 'https://www.kvxr.com/59223.html',
    categories: ['菠菜源码'],
    excerpt:
      'GO99越南综合盘源码 是一家成立于 2025 年、信誉卓著的在线博彩公司，持有 PAGCOR ...',
    price: '1680',
    image: 'https://picsum.photos/300/200?random=5',
  },
  {
    key: '59197',
    title: '最新番摊机器人源码/澳洲幸运5番摊/1234机器人/澳洲幸运8番摊',
    link: 'https://www.kvxr.com/59197.html',
    categories: ['H5源码', '菠菜源码'],
    excerpt:
      '最新拿下番摊机器人源码，前端vue，后端GO，前端丝滑般流畅，目前有澳洲幸运5、澳...',
    price: '1580',
    image: 'https://picsum.photos/300/200?random=6',
  },
  {
    key: '59152',
    title: 'YunGou云购夺宝源码/海外版一元购系统/多语言云购竞猜',
    link: 'https://www.kvxr.com/59152.html',
    categories: ['网站源码'],
    excerpt:
      '2025最新运营版YunGou云购夺宝源码，海外版云购源码多语言版本，4套前端UI界面，带...',
    price: '1680',
    image: 'https://picsum.photos/300/200?random=7',
  },
  {
    key: '59114',
    title: '妹团约会交友品茶源码/妹团俱乐部/空降约炮APP/楼凤社交圈',
    link: 'https://www.kvxr.com/59114.html',
    categories: ['H5源码', '直播源码'],
    excerpt:
      '【妹团约会交友品茶源码】是全网领先的真实品茶服务平台，致力于为高端用户提供安...',
    price: '1880',
    image: 'https://picsum.photos/300/200?random=8',
  },
  {
    key: '59077',
    title: 'MaxPlay基诺游戏源码/国外彩票RNG/TableGame赌场游戏',
    link: 'https://www.kvxr.com/59077.html',
    categories: ['菠菜源码'],
    excerpt:
      'MaxPlay基诺游戏源码是一家在 RNG 行业拥有超过 7 年经验的在线游戏提供商。秉承"...',
    price: '2680',
    image: 'https://picsum.photos/300/200?random=9',
  },
  {
    key: '59049',
    title: '多彩直播APP源码/多彩直播平台/多彩直播官网/多彩直播下载',
    link: 'https://www.kvxr.com/59049.html',
    categories: ['直播源码'],
    excerpt:
      '多彩直播APP源码是原生前端开发的一款直播源码，内置了彩票游戏和API接口游戏！热...',
    price: '2680',
    image: 'https://picsum.photos/300/200?random=10',
  },
  {
    key: '59015',
    title: 'SABA SPORTS沙巴体育源码/体育投注API/足球外放接口/自研体育直播',
    link: 'https://www.kvxr.com/59015.html',
    categories: ['菠菜源码'],
    excerpt:
      'SABA SPORTS沙巴体育源码（前名为IBCBet Sportsbook）是亚洲首屈一指的体育包网博...',
    price: '2380',
    image: 'https://picsum.photos/300/200?random=11',
  },
  {
    key: '58989',
    title: 'Jaiho Spin Yono印度老虎机源码/英文版Slots在线游戏平台',
    link: 'https://www.kvxr.com/58989.html',
    categories: ['棋牌源码'],
    excerpt:
      'Jaiho Spin印度老虎机源码致力于提供高品质娱乐体验，让您轻松畅玩喜爱的游戏。它...',
    price: '2880',
    image: 'https://picsum.photos/300/200?random=12',
  },
  {
    key: '58962',
    title: '圣泰俱乐部台球赛事竞猜源码/台球下注APP/斯诺克在线投注',
    link: 'https://www.kvxr.com/58962.html',
    categories: ['H5源码', '菠菜源码'],
    excerpt:
      '圣泰俱乐部台球赛事竞猜源码平台专注于中式台球领域，国内首家线上竞猜平台，每天...',
    price: '1480',
    image: 'https://picsum.photos/300/200?random=13',
  },
  {
    key: '58937',
    title: '大唐麻将全集源码/大唐麻将app下载/大唐棋牌游戏/大唐互娱官方网站',
    link: 'https://www.kvxr.com/58937.html',
    categories: ['棋牌源码'],
    excerpt:
      '大唐麻将全集源码是一款传统的中国麻将游戏，它源自唐朝时期，是中国最古老的麻将...',
    price: '1280',
    image: 'https://picsum.photos/300/200?random=14',
  },
  {
    key: '58900',
    title: 'NEEX LLC综合交易所源码/智能交易/股票预售/期货交易',
    link: 'https://www.kvxr.com/58900.html',
    categories: ['网站源码'],
    excerpt:
      'NEEX LLC综合交易所源码是一家基于区块链技术产品的国际金融交易公司。我们公司总...',
    price: '1680',
    image: 'https://picsum.photos/300/200?random=15',
  },
  {
    key: '58884',
    title: '走地大球分析软件源码/滚球大球分析软件/足球比赛自动预测系统',
    link: 'https://www.kvxr.com/58884.html',
    categories: ['网站源码'],
    excerpt:
      '走地大球分析软件源码V3是基于最新云端大数据分析引擎的第四代走地大球自动预测系...',
    price: '880',
    image: 'https://picsum.photos/300/200?random=16',
  },
  {
    key: '58868',
    title: '足球分析软件源码高级版（欧赔亚盘大小综合全能版）',
    link: 'https://www.kvxr.com/58868.html',
    categories: ['网站源码'],
    excerpt:
      '足球分析软件源码于2010年正式推出，至今走过超十年时间，为全球数以万计的足球玩...',
    price: '880',
    image: 'https://picsum.photos/300/200?random=17',
  },
  {
    key: '58835',
    title: '28圈娱乐源码/28圈官方网站/28圈app下载/加拿大28预测',
    link: 'https://www.kvxr.com/58835.html',
    categories: ['H5源码', '菠菜源码'],
    excerpt:
      '28圈娱乐源码的快速发展，游戏玩家对游戏的需求也变得越来越高。在众多游戏选择中...',
    price: '1680',
    image: 'https://picsum.photos/300/200?random=18',
  },
  {
    key: '58741',
    title: '147台球赛事源码/斯诺克桌球外围下注盘口/中八九球在线竞猜投注系统',
    link: 'https://www.kvxr.com/58741.html',
    categories: ['菠菜源码'],
    excerpt:
      '147台球赛事源码是中8台球（也称中式台球）赛事指的是结合了斯诺克和美式八球规则...',
    price: '880',
    image: 'https://picsum.photos/300/200?random=19',
  },
  {
    key: '58709',
    title: '高仿Lazada领航跨境电商平台源码/多语言购物网站/商家与供应商入驻',
    link: 'https://www.kvxr.com/58709.html',
    categories: ['网站源码'],
    excerpt:
      'Lazada Group成立于2012年，高仿Lazada领航跨境电商平台源码是东南亚领先的电子商...',
    price: '1580',
    image: 'https://picsum.photos/300/200?random=20',
  },
];
