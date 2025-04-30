import Link from 'next/link'
import Image from 'next/image'
import { Post } from 'contentlayer/generated'
// Import the new types as well
import { getCategoryName, getDefaultCover, CategoryKey, CoverKey } from '@/lib/images'
import { formatDate } from '@/lib/utils'
import { FaCalendarAlt } from 'react-icons/fa'

/**
 * PostCard 组件的 Props 定义
 */
interface PostCardProps extends Post {
  priority?: boolean // 是否优先加载图片
}

/**
 * 渲染博客文章的卡片预览。
 * 处理分类名称查找和默认封面图片获取。
 * @param {PostCardProps} props - 组件 props，包含文章数据和 priority 标志。
 * @returns {JSX.Element} 渲染后的文章卡片组件。
 */
export function PostCard({
  title,
  description,
  date,
  url, // url 应该是 PostRoute 类型，Link 组件可以直接处理
  categoryPath, // 使用 categoryPath，它对应目录名
  cover,
  priority = false,
}: PostCardProps) {
  // 将 categoryPath 强制转换为预期的键类型
  const categoryName = getCategoryName(categoryPath as CategoryKey)
  const imageSrc = cover || getDefaultCover(categoryPath as CoverKey) // 使用获取默认封面的函数

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 ease-in-out hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-lg dark:hover:shadow-gray-700/50">
      {imageSrc && (
        <div className="relative h-48 w-full overflow-hidden">
          {/* 移除ref属性 */}
          <Link className="absolute inset-0 z-10" aria-label={`Read more about ${title}`} href={{ pathname: url }}>
            <span className="sr-only">Read more about {title}</span>
          </Link>
          <Image
            src={imageSrc}
            alt={title || 'Post cover image'}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            priority={priority} // 为首屏图片添加优先加载
          />
          {/* 可选的覆盖层 */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div> */}
        </div>
      )}

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <div className="mb-2 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          {categoryName && (
            <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              {categoryName}
            </span>
          )}
          <time dateTime={date} className="flex items-center gap-1">
            <FaCalendarAlt className="h-3 w-3" />
            {formatDate(date)}
          </time>
        </div>

        <h2 className="mb-2 text-lg font-semibold leading-tight text-gray-900 dark:text-gray-100">
          {/* 移除ref属性 */}
          <Link className="hover:text-blue-600 dark:hover:text-blue-400" href={{ pathname: url }}>
            {title}
          </Link>
        </h2>

        {description && (
          <p className="mb-4 flex-grow text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
            {description}
          </p>
        )}
      </div>
    </article>
  )
}
