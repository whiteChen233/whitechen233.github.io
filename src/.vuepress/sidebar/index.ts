import { sidebar } from 'vuepress-theme-hope';

import { qccstp, backEnd, frontEnd, tools, design } from './note/index.js';
import { stepByStep, games } from './series/index.js';

export const defaultSidebar = sidebar({
  '/docs/': [
    '',
    'intro',
    {
      text: '随笔',
      icon: 'heart',
      link: '/docs/essay/',
      prefix: '/docs/essay/',
      children: ['me', 'love', 'rain', 'TearsOfRouge', 'SlowSlowSong'],
    },
  ],
  '/docs/note/QCCSTP/': qccstp,
  '/docs/note/front-end/': frontEnd,
  '/docs/note/back-end/': backEnd,
  '/docs/note/design/': design,
  '/docs/note/tools/': tools,
  '/docs/series/step-by-step/': stepByStep,
  '/docs/series/games/': games,
  '/docs/links': [],
});
