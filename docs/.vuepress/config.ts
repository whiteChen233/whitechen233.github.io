import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "温故而知新~",
      description: "俗话说，好记心不如烂笔头",
    },
    "/en/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    }
  },
  theme,
  shouldPrefetch: false,
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        }
      }
    })
  ]
});
