import { arraySidebar } from 'vuepress-theme-hope';

export const frontEnd = arraySidebar([
  {
    text: 'Web 开发',
    icon: 'web',
    children: [
      {
        text: 'ES6',
        prefix: 'ES6/',
        collapsible: true,
        children: ['Promise'],
      },
      {
        text: 'Vue',
        children: [
          {
            text: 'Vue 2',
            prefix: 'Vue2/',
            collapsible: true,
            children: ['Runtime', 'Component', 'Slot', 'Modules', 'Webpack', 'Vue_CLI', 'Vue_Router', 'Vuex'],
          },
          {
            text: 'Vue 3',
            prefix: 'Vue3/',
            collapsible: true,
            children: [''],
          },
        ],
      },
    ],
  },
]);
