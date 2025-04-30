import { NavigationConfig } from '@/types/navigation'
import {
  FaHome,
  FaUser,
  FaCode,
  FaBrain,
  FaLaptopCode,
  FaRocket,
  FaBook,
  FaLightbulb,
  FaGithub,
  FaTwitter,
  FaRobot,
  FaWeixin,
  FaFeather,
  FaMicroscope,
  FaTools,
  FaFlask,
  FaPaintBrush,
  FaProjectDiagram,
} from 'react-icons/fa'
import { createCategoryRoute } from '@/lib/routes'

export const navigation: NavigationConfig = {
  main: [
    { href: '/', label: '首页', icon: FaHome },
    { href: '/about', label: '关于我', icon: FaUser },
  ],
  posts: [
    {
      href: createCategoryRoute('future-sketch'),
      label: '未来素描',
      icon: FaPaintBrush,
    },
    {
      href: createCategoryRoute('application-concepts'),
      label: '应用构想',
      icon: FaProjectDiagram,
    },
    {
      href: createCategoryRoute('practice-tracing'),
      label: '实践摹本',
      icon: FaMicroscope,
    },
    {
      href: createCategoryRoute('toolbox-memo'),
      label: '工具箱备忘',
      icon: FaTools,
    },
    {
      href: createCategoryRoute('experiment-log'),
      label: '实验记录',
      icon: FaFlask,
    },
  ],
  projects: [
    { href: 'https://bestblogs.dev', label: 'BestBlogs.dev', icon: FaCode },
    { href: 'https://wenrun.ai', label: 'WenRun.ai', icon: FaFeather },
    { href: 'https://hiagent.io', label: 'HiAgent.io', icon: FaRobot },
    { href: 'https://tiky.ai', label: 'Tiky.ai', icon: FaLightbulb },
  ],
  online: [
    { href: 'https://github.com/ginobefun', label: 'GitHub', icon: FaGithub },
    {
      href: 'https://twitter.com/hongming731',
      label: 'Twitter',
      icon: FaTwitter,
    },
    {
      href: 'https://mp.weixin.qq.com/s/5ulE6cqhyHDNhhDT08hOXA',
      label: '微信公众号',
      icon: FaWeixin,
    },
  ],
}
