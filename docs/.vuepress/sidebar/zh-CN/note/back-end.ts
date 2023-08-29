import { arraySidebar } from 'vuepress-theme-hope';

export const backEnd = arraySidebar([
  {
    text: '服务端开发',
    icon: 'server',
    children: [
      {
        text: 'Java Language',
        prefix: 'java/',
        children: ['', 'JVM', 'SPI'],
      },
    ],
  },
]);
