import { defineUserConfig } from "@vuepress/cli";
// import { docsearchPlugin } from "@vuepress/plugin-docsearch";
// import { searchPlugin } from "@vuepress/plugin-search";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "温故而知新~",
      description: "俗话说, 好记心不如烂笔头",
    },
    "/en/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
  },
  theme,
  shouldPrefetch: false,
  plugins: [
    // docsearchPlugin({
    //   appId: "XALWLPJGYK",
    //   apiKey: "4175e05b9869871cece3b39a6dcf9fbe",
    //   indexName: "github_pages",
    //   locales: {
    //     "/zh/": {
    //       placeholder: "搜索",
    //       translations: {
    //         button: {
    //           buttonText: "搜索",
    //           buttonAriaLabel: "搜索",
    //         },
    //         modal: {
    //           searchBox: {
    //             resetButtonTitle: "清除查询条件",
    //             resetButtonAriaLabel: "清除查询条件",
    //             cancelButtonText: "取消",
    //             cancelButtonAriaLabel: "取消",
    //           },
    //           startScreen: {
    //             recentSearchesTitle: "搜索历史",
    //             noRecentSearchesText: "没有搜索历史",
    //             saveRecentSearchButtonTitle: "保存至搜索历史",
    //             removeRecentSearchButtonTitle: "从搜索历史中移除",
    //             favoriteSearchesTitle: "收藏",
    //             removeFavoriteSearchButtonTitle: "从收藏中移除",
    //           },
    //           errorScreen: {
    //             titleText: "无法获取结果",
    //             helpText: "你可能需要检查你的网络连接",
    //           },
    //           footer: {
    //             selectText: "选择",
    //             navigateText: "切换",
    //             closeText: "关闭",
    //             searchByText: "搜索提供者",
    //           },
    //           noResultsScreen: {
    //             noResultsText: "无法找到相关结果",
    //             suggestedQueryText: "你可以尝试查询",
    //             reportMissingResultsText: "你认为该查询应该有结果？",
    //             reportMissingResultsLinkText: "点击反馈",
    //           },
    //         },
    //       },
    //     },
    //     '/en/': {
    //       placeholder: 'Search Documentation',
    //       translations: {
    //         button: {
    //           buttonText: 'Search Documentation',
    //         },
    //       },
    //     },
    //   },
    // })
    // searchPlugin({
    //   locales: {
    //     '/en/': {
    //       placeholder: 'Search',
    //     },
    //     '/zh/': {
    //       placeholder: '搜索',
    //     }
    //   }
    // })
    searchProPlugin({
      // https://vuepress-theme-hope.github.io/v2/search-pro/zh/
      // 索引全部内容
      indexContent: true,
    })
  ]
});
