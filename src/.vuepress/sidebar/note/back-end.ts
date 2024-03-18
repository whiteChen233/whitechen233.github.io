import { arraySidebar } from 'vuepress-theme-hope';

export const backEnd = arraySidebar([
  {
    text: '服务端开发',
    icon: 'server',
    children: [
      {
        text: 'Java Language',
        prefix: 'java/',
        collapsible: true,
        children: ['', 'JVM', 'Collection', 'Concurrent', 'SPI'],
      },
      {
        text: 'Spring Framework',
        prefix: 'spring/',
        collapsible: true,
        children: ['', 'Spring_Basics'],
      },
    ],
  },
]);
