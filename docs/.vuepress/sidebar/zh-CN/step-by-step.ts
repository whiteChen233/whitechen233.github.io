import { arraySidebar } from 'vuepress-theme-hope';

export const stepByStep = arraySidebar([
  {
    text: '手把手系列',
    icon: 'Grab-Hand',
    link: '/zh/step-by-step/',
    prefix: '/zh/step-by-step/',
    children: ['java-installation-and-configuration', 'quickly-build-personal-documents'],
  },
]);
