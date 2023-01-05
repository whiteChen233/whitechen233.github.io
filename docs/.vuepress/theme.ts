import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar";
import { enSidebar, zhSidebar } from "./sidebar";

export default hopeTheme({
  hostname: "https://whiteChen233/whitechen233.github.io",
  author: {
    name: "White",
    url: "https://github.com/whiteChen233",
  },
  iconAssets: "//at.alicdn.com/t/c/font_3670193_ieexsngpaa.css",
  logo: "/logo.png",
  repo: "whiteChen233/whitechen233.github.io",
  docsDir: "docs",
  pageInfo: [
    "Author",
    "Original",
    "Date",
    "Category",
    "Tag",
    "Word",
    "ReadingTime",
  ],
  themeColor: {
    white: "#ffffff",
    red: "#e53e31",
    green: "#3eaf7c",
    orange: "#f29e00",
  },
  fullscreen: true,
  blog: {
    name: "White",
    description: "Today.do(() -> new Bug());",
    timeline: "温故而知新~",
    roundAvatar: true,
    medias: {
      Email: "mailto:white996@qq.com",
      Gmail: "mailto:white294476387@gmail.com",
      GitHub: "https://github.com/whiteChen233",
      Gitee: "https://gitee.com/294476387",
      Steam: "https://steamcommunity.com/profiles/76561198819524928/",
    },
  },
  locales: {
    "/zh/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      displayFooter: true,
      blog: {
        intro: "/zh/intro.html",
      },
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
    "/en/": {
      navbar: enNavbar,
      sidebar: enSidebar,
      displayFooter: true,
      blog: {
        intro: "/en/intro.html",
      },
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
  },
  // encrypt: {
  //   config: {
  //     "/en/demo/encrypt.html": ["1234"],
  //     "/zh/demo/encrypt.html": ["1234"],
  //   },
  // },
  plugins: {
    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    // comment: {
    /**
     * Using Giscus
     */
    // provider: "Giscus",
    // repo: "vuepress-theme-hope/giscus-discussions",
    // repoId: "R_kgDOG_Pt2A",
    // category: "Announcements",
    // categoryId: "DIC_kwDOG_Pt2M4COD69",

    /**
     * Using Twikoo
     */
    // provider: "Twikoo",
    // envId: "https://twikoo.ccknbc.vercel.app",

    /**
     * Using Waline
     */
    // provider: "Waline",
    // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },
    blog: true,
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imgSize: true,
      include: true,
      katex: true,
      imgLazyload: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
        revealConfig: {
          controlsLayout: "edges",
        },
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
