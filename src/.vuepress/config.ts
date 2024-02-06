import { viteBundler } from '@vuepress/bundler-vite';
import { defineUserConfig } from 'vuepress';
import { searchProPlugin } from 'vuepress-plugin-search-pro';

import theme from './theme.js';

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: '温故而知新~',
  description: '俗话说, 好记心不如烂笔头',
  bundler: viteBundler(),
  theme,
  shouldPrefetch: false,
  plugins: [
    searchProPlugin({
      // https://vuepress-theme-hope.github.io/v2/search-pro/zh/
      // 索引全部内容
      indexContent: true,
    }),
  ],
});
