import { navbar } from 'vuepress-theme-hope';

export const defaultNavbar = navbar([
  {
    text: '首页',
    icon: 'home',
    link: '/docs/',
    activeMatch: '^/docs/$',
  },
  {
    text: '烂笔头',
    icon: 'lead-pencil',
    prefix: '/docs/note/',
    children: [
      { text: '软考', icon: 'certificate', link: 'QCCSTP/' },
      { text: 'Web 开发', icon: 'web', link: 'front-end/' },
      { text: '服务端开发', icon: 'server', link: 'back-end/' },
      { text: '软件工具', icon: 'toolbox', link: 'tools/' },
      { text: '软件设计', icon: 'palette', link: 'design/' },
    ],
  },
  {
    text: '系列',
    prefix: '/docs/series/',
    icon: 'format-list-bulleted-type',
    children: [
      { text: '手把手', icon: 'sign-language', link: 'step-by-step/' },
      { text: '第九艺术', icon: 'controller', link: 'games/' },
    ],
  },
  { text: '链接', icon: 'link-variant', link: '/docs/links/' },
]);
