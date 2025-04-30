
# 初稿 Blog

这是**“初稿”**博客的开源代码仓库。**“初稿”**是一个专注于**人工智能 (AI) 与媒体跨界研究**的探索性博客。我们不追求终极答案，而是记录、分享并讨论这一快速发展领域中的“第一份草稿”——最新的技术趋势、初步的应用尝试、真实的实践案例、实用的工具方法以及亲手的实验探索。

我们使用现代 Web 技术栈构建此博客平台，致力于提供清晰、流畅的阅读和贡献体验。

> 本项目基于 [ChangoMan/nextjs-mdx-blog](https://github.com/ChangoMan/nextjs-mdx-blog) 开发，感谢该项目提供的优秀起点。在此基础上，我们进行了大量定制化开发，包括界面重设计、功能增强和性能优化等，并将其**应用于“初稿”博客的内容承载**。

## 技术栈

- **框架**: [Next.js 14](https://nextjs.org/) (App Router)
- **语言**: [TypeScript](https://www.typescriptlang.org/)
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **内容**: [Contentlayer](https://contentlayer.dev/) (MDX)
- **动画**: [Framer Motion](https://www.framer.com/motion/)
- **包管理**: [pnpm](https://pnpm.io/)

## 特性

- 🚀 基于 Next.js 14 App Router 和 React Server Components
- 📝 使用 MDX 编写文章，支持自定义组件
- 🎨 使用 Tailwind CSS 构建的响应式设计
- 🌙 支持深色模式
- 🔍 内置全文搜索功能
- 📊 文章目录自动生成
- 🖼️ 图片优化和渐进式加载
- 🎯 基于分类和标签的文章组织
- 📱 移动端优化

## 开发环境要求

- Node.js 18.17 或更高版本
- pnpm 8.0 或更高版本

## 快速开始

1. 克隆仓库（请将 `yourusername/chu-gao-blog` 替换为实际的仓库地址）：

```bash
git clone https://github.com/yourusername/chu-gao-blog.git
cd chu-gao-blog
```

2. 安装依赖：

```bash
pnpm install
```

3. 启动开发服务器：

```bash
pnpm dev
```

4. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 项目结构

```
.
├── app/                  # Next.js 应用路由
├── components/          # React 组件
├── content/            # MDX 文章和资源
├── lib/                # 工具函数和配置
├── public/             # 静态资源
├── styles/            # 全局样式
├── contentlayer.config.ts  # Contentlayer 配置
├── tailwind.config.ts     # Tailwind 配置
└── next.config.mjs        # Next.js 配置
```

## 写作指南

欢迎为“初稿”博客贡献关于 AI 与媒体跨界研究的内容。以下是写作指南：

1. 在 `posts` 目录下创建新的 `.mdx` 文件
2. 添加必要的 frontmatter 信息：

   ```yaml
   ---
   title: 文章标题 (建议体现“初稿”或探索的意味)
   description: 文章描述 (简洁概括文章内容)
   date: 2024-01-01 (文章发布日期)
   category: 例如：未来素描 (对应博客栏目)
   tags: 例如：AIGC, 新闻AI, 伦理 (对应文章主题标签)
   cover: /covers/example.jpg (文章封面图路径，存放在 public/covers 或 public/images 目录下)
   ---
   ```
   *注：category 建议使用博客规划的栏目名称（未来素描, 应用构想, 实践摹本, 工具箱备忘, 实验记录）或其他合适的自定义分类。*

3. 使用 MDX 语法编写文章内容。你可以使用 Markdown 的全部功能，并可以嵌入 React 组件来增强表现力。

## 部署

项目使用 Vercel 或其他兼容 Next.js App Router 的平台进行部署。每次推送到 main 分支时会自动触发部署（具体配置取决于你的部署平台）。

## 设计规范

查看 [design.md](./design.md) 了解项目的设计规范。

## 开发路线图

查看 [tasks.md](./tasks.md) 了解计划中的功能和改进。

## 媒体文件管理

本博客使用 Cloudflare R2 存储来管理媒体文件（图片、视频等）。提供了一个自动化工具来处理媒体文件的上传、替换和清理。

### 配置

1. 在 Cloudflare R2 控制台创建存储桶并获取以下信息：
   - Account ID
   - R2 Access Key ID
   - R2 Secret Access Key
   - Bucket Name
   - Public URL（如果配置了自定义域名）

2. 在项目根目录创建 `.env` 文件并填写以下配置：
```env
CLOUDFLARE_ACCOUNT_ID=your_account_id
R2_ACCESS_KEY_ID=your_access_key_id
R2_SECRET_ACCESS_KEY=your_secret_access_key
R2_BUCKET_NAME=your_bucket_name
R2_PUBLIC_URL=https://your-public-bucket-url.r2.dev
```
*注：请确保 `.env` 文件在 `.gitignore` 中被忽略，不要提交到 Git 仓库。*

### 使用方法

在项目根目录运行以下命令来管理媒体文件：

```bash
# 正常运行（扫描 MDX 文件，上传新的本地媒体文件，更新引用，并清理未使用的本地文件）
pnpm upload-media

# 测试运行（不会实际修改文件或上传，仅显示将要执行的操作）
pnpm upload-media --dry-run

# 跳过本地文件备份
pnpm upload-media --skip-backup

# 跳过清理未使用的本地文件
pnpm upload-media --skip-cleanup

# 显示帮助信息
pnpm upload-media --help
```

### 功能特点

1. 自动处理：
   - 自动扫描 MDX 文件中的媒体引用 (支持相对路径引用 `/images/...` 或 `/covers/...`)
   - 自动检查引用的本地媒体文件是否存在 `public/images` 或 `public/covers` 目录下
   - 自动上传新的本地媒体文件到 R2 存储桶
   - 自动更新 MDX 文件中的引用路径为 R2 的 Public URL
   - 可选自动清理 `public/images` 和 `public/covers` 目录下不再被任何 MDX 文件引用的本地文件

2. 文件验证：
   - 支持的文件类型：jpg、jpeg、png、gif、webp、mp4、mov、webm
   - 文件大小限制：可在配置文件中设置，默认 50MB
   - 自动检测文件类型和 MIME 类型

3. 安全特性：
   - 自动备份被修改或删除的本地 MDX 文件到 `backups` 目录
   - 自动备份被删除的本地媒体文件到 `backups` 目录
   - 保留最近 N 天（可在配置文件中设置，默认 7 天）的备份
   - 测试模式支持（`--dry-run`）
   - 详细的操作日志输出

4. 性能优化：
   - 并发处理文件上传，提高效率
   - 可配置并发数量

### 注意事项

1. 首次运行媒体文件管理工具前，**强烈建议**使用 `--dry-run` 选项进行测试，查看操作预览。
2. 运行工具前，建议手动备份你的 `posts` 目录和 `public` 目录。虽然工具提供自动备份，但多一份保障更安心。
3. 被删除的文件（包括 MDX 和媒体文件）可以在 `backups` 目录找到，并会保留配置的天数。
4. 确保 `.env` 文件已正确配置 R2 相关信息，并且该文件**没有**被提交到 Git 仓库中。

### 配置文件

可以在 `scripts/config.ts` 中自定义媒体文件管理工具的以下配置：

```typescript
{
  // 允许的文件类型和 MIME 类型映射
  mimeTypes: { ... },
  // 文件大小限制（默认 50MB），单位为字节
  maxFileSize: 50 * 1024 * 1024,
  // 并发上传文件的数量
  concurrency: 3,
  // 上传到 R2 的文件的 Cache-Control 头
  cacheControl: 'public, max-age=31536000', // 例如，缓存一年
  // 备份设置
  backup: {
    enabled: true, // 是否启用备份
    dir: 'backups', // 备份文件存放目录
    keepDays: 7, // 备份文件保留天数
  },
  // 项目中的关键路径设置
  paths: {
    public: 'public', // 静态资源根目录
    images: 'images', // 默认图片子目录 (public/images)
    covers: 'covers', // 封面图片子目录 (public/covers)
    posts: 'posts', // MDX 文章存放目录
  }
}
```
