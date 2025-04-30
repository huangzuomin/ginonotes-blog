import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { PostRoute, createPostRoute } from './src/lib/routes'

/**
 * 定义博客文章的文档类型
 * @returns {DocumentTypeDef<string>} Post 文档类型定义
 */
export const Post = defineDocumentType(() => ({
  name: 'Post',
  // 将 contentDirPath 指向新的 content/posts 目录
  filePathPattern: `**/*.mdx`, // 这个模式通常是相对于 contentDirPath 的，可能不需要修改
  // 修改下面这行
  contentDirPath: 'content/posts',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    description: { type: 'string' },
    category: { type: 'string', required: true },
    tags: { type: 'string' },
    cover: { type: 'string' },
    slug: { type: 'string' },
    featured: { type: 'boolean', default: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post): PostRoute => {
        const slug = (post.slug || post._raw.flattenedPath).replace(/_/g, '-')
        return createPostRoute(slug)
      },
    },
    categoryPath: {
      type: 'string',
      resolve: (post) => {
        const pathParts = post._raw.flattenedPath.split('/')
        return pathParts[0]
      },
    },
  },
}))

/**
 * 创建 Contentlayer 数据源
 * @returns {Source} Contentlayer 数据源实例
 */
export default makeSource({
  // 指定包含内容的目录，相对于项目根目录
  contentDirPath: 'content', // 如果 makeSource 也有 contentDirPath，确保它指向 'content'
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, {
        theme: 'github-dark',
        onVisitLine(node: any) {
          if (node.children.length === 0) {
            node.children = [{ type: 'text', value: ' ' }]
          }
        },
      }],
      [rehypeAutolinkHeadings, {
        properties: {
          className: ['anchor'],
        },
      }],
    ],
  },
})
