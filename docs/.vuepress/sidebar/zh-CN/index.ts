import { sidebar } from 'vuepress-theme-hope';

import { qccstp, backEnd, frontEnd, tools, design } from './note';
import { stepByStep } from './step-by-step';

export const zhSidebar = sidebar({
  '/zh/': [
    '',
    'intro',
    {
      text: '随笔',
      icon: 'heart',
      link: '/zh/essay/',
      prefix: '/zh/essay/',
      children: ['me', 'love', 'rain', 'tearsOfRouge', 'SlowSlowSong'],
    },
  ],
  '/zh/note/QCCSTP/': qccstp,
  '/zh/note/front-end/': frontEnd,
  '/zh/note/back-end/': backEnd,
  '/zh/note/design/': design,
  '/zh/note/tools/': tools,
  '/zh/step-by-step/': stepByStep,
  '/zh/links': [],
});
