# Repository Guidelines

## 项目结构与模块组织
核心 React 源码位于 `src/`，其中 `components/` 存放可复用 UI，`pages/` 定义路由页面，`sections/` 承载首页分块，`utils/` 集中工具函数。静态资源放在 `public/`，打包结果在 `dist/`（仅由 `npm run build` 生成，勿手动修改）。根目录的 `vite.config.js`、`postcss.config.cjs` 和 `index.html` 控制构建、样式后处理与入口模版，提交前请确认改动是否必要。

## 构建、测试与开发命令
`npm run dev` 会启动 Vite 开发服务器（默认 http://localhost:5173），支持热更新。部署前运行 `npm run build` 生成生产包；若需本地验收，可用 `npm run preview` 以生产配置启动只读服务器。执行这些脚本前请确保依赖已经通过 `npm install` 安装完成。

## 代码风格与命名约定
项目默认使用 ES Module、React 18 函数组件与 Hooks，保持 2 空格缩进及单引号字符串。组件文件命名采用帕斯卡命名，例如 `ResponsiveHeader.jsx`；工具函数使用驼峰（如 `formatCurrency`）。样式集中在全局 CSS 文件中，若新增局部样式，建议创建配套的 `.css` 文件并在组件内按需导入。保持 Ant Design 5 的主题 token 样式一致，避免直接内联硬编码颜色。

## 测试规范
仓库尚未集成自动化测试框架，提交前请至少完成以下检查：在主要浏览器窗口中确认首页与详情页加载正常；切换语言浮动按钮可正确生效；响应式布局在桌面与移动视图下无异常。如果引入 Vitest 或 React Testing Library，请将测试文件命名为 `*.test.jsx` 并放在与源码同级目录，未来合并时附上覆盖率说明。

## 提交与 Pull Request 指南
Git 历史采用约定式提交，如 `feat: integrate react router for home and detail routes`。提交信息首词使用动词短语描述变化，必要时追加中文补充说明。提交 PR 时需包含：1) 变更摘要与动机；2) 相关 issue 链接或需求编号；3) UI 改动附上截图或录屏（桌面与移动）；4) 验证步骤与命令。变更会影响生产配置或第三方链接时，请在描述中显式标注并提醒评审者重点验证。

## 附加提示
多语言支持依赖 `ConfigProvider` 与自定义切换逻辑，新增文案请同时覆盖中英文并放在 `src/content/` 下。远程客服与跳转链接在 `FloatButton.Group` 中配置，如需更新务必确认外链安全性。调试时若使用 `tmp-detail.html` 等临时文件，请在 `.gitignore` 中登记以免污染版本库。
