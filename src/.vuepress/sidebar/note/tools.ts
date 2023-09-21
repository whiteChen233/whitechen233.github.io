import { arraySidebar } from 'vuepress-theme-hope';

export const tools = arraySidebar([
  {
    text: '工具',
    icon: 'toolbox',
    children: [
      {
        text: '构建',
        icon: 'wrench',
        children: ['maven', 'gradle'],
      },
      {
        text: '版本控制',
        icon: 'git',
        children: ['git'],
      },
      {
        text: '开发',
        icon: 'application-braces',
        children: ['idea', 'vs-code'],
      },
    ],
  },
]);
