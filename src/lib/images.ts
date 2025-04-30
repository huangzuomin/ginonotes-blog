// 分类映射
export const CATEGORY_MAP = {
  // dev: '编程技术', // 移除或注释掉旧的分类
  // ai: '人工智能',
  // build: '构建之路',
  // reading: '阅读记录',
  // thoughts: '随想思考',
  'future-sketch': '未来素描', // 新增
  'application-concepts': '应用构想', // 新增
  'practice-tracing': '实践摹本', // 新增 (这个分类已经存在)
  'toolbox-memo': '工具箱备忘', // 新增
  'experiment-log': '实验记录', // 新增
} as const

// 默认的封面图片 - 你可能需要为新分类添加默认封面图
export const DEFAULT_COVERS = {
  // dev: '/images/covers/dev.jpg',
  // ai: '/images/covers/ai.jpg',
  // build: '/images/covers/build.jpg',
  // reading: '/images/covers/reading.jpg',
  // thoughts: '/images/covers/thoughts.jpg',
  'future-sketch': '/images/covers/future-sketch.jpg', // 示例路径，请确保图片存在
  'application-concepts': '/images/covers/application-concepts.jpg', // 示例路径
  'practice-tracing': '/images/covers/practice-tracing.jpg', // 示例路径
  'toolbox-memo': '/images/covers/toolbox-memo.jpg', // 示例路径
  'experiment-log': '/images/covers/experiment-log.jpg', // 示例路径
} as const

// 根据分类获取封面图片
export function getRandomCover(category: keyof typeof DEFAULT_COVERS): string {
  return DEFAULT_COVERS[category] || DEFAULT_COVERS['future-sketch']
}

// 获取分类的中文名称
/**
 * 获取分类的中文名称
 * @param {CategoryKey} category - 分类 slug (必须是 CATEGORY_MAP 中的键)
 * @returns {string} 分类的中文名称或原始 slug
 */
export function getCategoryName(category: CategoryKey): string {
  return CATEGORY_MAP[category] || category
}

/**
 * 获取指定分类的默认封面图路径
 * @param {CoverKey} category - 分类 slug (必须是 DEFAULT_COVERS 中的键)
 * @returns {string | undefined} 封面图路径，如果找不到则返回 undefined
 */
export function getDefaultCover(category: CoverKey): string | undefined {
  return DEFAULT_COVERS[category]
}
// 类型别名，表示有效的分类键
export type CategoryKey = keyof typeof CATEGORY_MAP;
export type CoverKey = keyof typeof DEFAULT_COVERS;