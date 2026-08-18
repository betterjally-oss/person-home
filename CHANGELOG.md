# 更新日志（CHANGELOG）

> 本文件用于记录个人网站的历次改动、部署方式和待办事项，方便中断后快速恢复上下文。

## 项目概况

- **网站主人**：刘佳磊（betterjally）
- **定位**：AI 产品经理
- **标语**：把大模型的能力，变成真实可用的产品
- **公开域名**：https://betterjally-oss.github.io/
- **联系信息**：
  - 邮箱：betterjally@gmail.com
  - GitHub：https://github.com/betterjally-oss
  - 微信：317874273

## 文件结构

```
index.html        # 主页（首屏 Hero / 关于 / 技能 / 项目 / 联系）
about.html        # 独立关于页（我是谁 / 我在做什么 / 观点 / 最后）
css/style.css     # 全部样式（含响应式）
js/main.js        # 主题切换 / 移动端导航 / 滚动动画 / 数字动画 / 关于折叠
CHANGELOG.md      # 本文件
```

## Git 仓库（2026-08-18 更新：原 person-home 已更名为 betterjally-oss.github.io）

- **唯一 remote `origin`**：https://github.com/betterjally-oss/betterjally-oss.github.io.git
- 部署与开发共用同一仓库，`main` 分支根目录即 GitHub Pages 内容

### 部署命令

```bash
git add -A
git commit -m "描述本次改动"
git push origin main   # 推送后等 1–2 分钟 Pages 构建完成
```

- Pages 为用户名站点，从 `main` 分支**根目录**部署
- 验证域名：`curl -s https://betterjally-oss.github.io/ | grep 刘佳磊`

---

## 2026-08-18 改动记录（本次大版本）

### 1. 品牌定位：全栈开发者 → AI 产品经理
- 首屏名字 `HT Li` → **刘佳磊**
- 标题 / meta / favicon（JL）/ 导航与页脚 Logo（刘+佳磊）/ 页脚标语「用 AI 产品改变世界」
- 首屏标语：专注 AI 产品与智能体的产品经理，把大模型能力变成真实可用的产品
- 关于段落、数据卡标签（年产品经验 / AI 应用案例）、兴趣（AI 应用 · Agent · 产品设计）
- JS 主题存储 key：`htli-theme` → `liujialei-theme`

### 2. 联系信息（真实值）
- 邮箱 betterjally@gmail.com / GitHub betterjally-oss / 微信 317874273

### 3. 技能栈改版（主页 #skills）
- 4 组 2×2 布局（原 3 组前端/后端/工具）
- 产品设计：需求分析 · 用户调研 · 原型设计 · PRD 撰写 · 交互流程
- AI 能力：Prompt 工程 · RAG · Agent 工作流 · 模型评估 · AI 应用落地
- 数据分析：SQL · 埋点分析 · A/B 测试 · 指标拆解 · 数据看板
- 协作与工具：Figma · Notion · Jira · XMind · Git

### 4. 关于模块（主页 #about）
- 去掉「状态：开放合作/自由职业」一行（现保留 坐标、兴趣）
- 新增「了解更多 →」按钮跳转 about.html
  - 样式 `.btn-ghost-accent`：默认 accent 色描边+文字，悬停渐变填充白字
  - 仅此按钮用该样式，其余幽灵按钮不受影响
- 内容自动折叠（`.about-body.collapsed` + 渐变遮罩 + 「阅读全文 ↓/收起 ↑」）
  - 内容超过阈值（scrollHeight > 320）才显示折叠按钮，内容短自动隐藏

### 5. 独立关于页 about.html
- 风格与主页统一（同一 CSS/JS、同导航页脚、主题切换、滚动动画）
- 内容参考李佳芮 rui.juzi.bot 的叙事结构（简单版，待用户优化）：
  - 我是谁 → 「2 年。30 个项目。1 个信念。」（数据为占位！）
  - 我在做什么（01 定义需求 / 02 设计交互 / 03 搭建 Agent 工作流 / 04 验证价值闭环）
  - 我的一些观点 / 最后（欢迎聊聊）
- 新增样式：`.about-article` `.article-lead` `.stat-line` `.work-list` `.view-list` `.nav-links a.active`

### 6. 导航更新（两个页面一致）
- 顺序：**首页 / 关于 / 技能 / 项目 / 联系 / GitHub ↗ / 🌙**
- 首页「关于」→ about.html；关于页其余项 → index.html 对应锚点
- GitHub ↗ 新窗口打开 https://github.com/betterjally-oss（`.nav-ext` accent 高亮）

### 7. 首屏下滑提示（鼠标图标）修复
- **根因**：图标原为 `.hero-inner` 子元素，而 hero-inner 是相对定位，`bottom` 相对内容盒计算 → 图标一直压在按钮文字上，之前几次调整是「越挪越贴」
- **修复**：图标移出 hero-inner，作为 `.hero`（整屏）直接子元素，`bottom: 54px` 相对整个首屏定位
- **响应式保障（重要）**：
  - `.hero` 加 `min-height: 100svh` 回退（手机地址栏伸缩不撑出屏幕）
  - 移动端（≤860px）压缩 hero 内边距 `96px 0 64px`
  - 极矮视口（≤640px 高）自动隐藏图标（`display: none`），杜绝裁切/重叠

### 8. 部署到 GitHub Pages
- 原 person-home 仓库更名为 betterjally-oss.github.io，本地统一为单个 `origin` remote
- 已验证公开域名：主页标题、首屏名字、about.html、最新 CSS 全部生效

### 9. 移除技能模块（主页 #skills）
- 删除主页「技能栈」整个区块（产品设计 / AI 能力 / 数据分析 / 协作与工具）
- 导航同步调整：首页与关于页均移除「技能」入口，现为：首页 / 关于 / 项目 / 联系 / GitHub ↗
- 技能相关 CSS（.skills-grid 等）保留未删，如需恢复可重新加回 HTML 区块即可

---

## 待办 / 提醒

- [ ] 数据卡数字是占位：5 年产品经验 / 30 完成项目 / 10 AI 应用案例 → 需替换真实数据
- [ ] about.html 中的「2 年 / 30 个项目」也是占位 → 需替换
- [ ] 精选项目区仍是模板占位（效率工具箱 / 数据可视化面板 / AI 智能助手）→ 待替换为真实项目
- [ ] 关于页介绍为简单初版，用户后续自行优化
- [ ] 「Skill 到底是什么」文章卡片是真实内容（小红书写作相关），保留
- [ ] 微信联系方式显示为数字号 317874273（无前缀，已确认）

## 常用操作备忘

- 主题：浅/深色切换由 js/main.js 管理，存储在 localStorage（key: liujialei-theme）
- 数字动画：`data-count` 属性控制，`data-reveal` 控制滚动入场
- 折叠逻辑：`.about-body` + `.about-more` 按钮，见 js/main.js「关于我 · 折叠阅读」段
