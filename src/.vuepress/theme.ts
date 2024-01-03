import { hopeTheme } from 'vuepress-theme-hope';
import { defaultNavbar } from './navbar/index.js';
import { defaultSidebar } from './sidebar/index.js';

export default hopeTheme(
  {
    hostname: 'https://blog.white233.top',
    author: {
      name: 'White',
      url: 'https://blog.white233.top',
      email: 'white996@qq.com',
    },
    iconAssets: 'iconify',
    iconPrefix: 'mdi:',
    logo: '/logo.png',
    repo: 'whiteChen233/whitechen233.github.io',
    docsDir: 'src',
    pageInfo: ['Author', 'Original', 'Date', 'PageView', 'Category', 'Tag', 'Word', 'ReadingTime'],
    themeColor: true,
    fullscreen: true,
    blog: {
      name: 'White',
      description: 'Today.do(Bug::new);',
      timeline: '温故而知新~',
      roundAvatar: true,
      medias: {
        Email: 'mailto:white996@qq.com',
        Gmail: 'mailto:white294476387@gmail.com',
        GitHub: 'https://github.com/whiteChen233',
        Gitee: 'https://gitee.com/294476387',
        Steam: 'https://steamcommunity.com/profiles/76561198819524928/',
      },
      intro: '/docs/intro',
    },
    navbar: defaultNavbar,
    sidebar: defaultSidebar,
    footer: '主题使用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a>',
    metaLocales: {
      editLink: '在 GitHub 上编辑此页',
    },
    displayFooter: true,
    copyright: 'MIT license | Copyright © 2021-present White',
    encrypt: {
      config: {
        '/en/': ['dayByDay996'],
      },
    },
    plugins: {
      // 评论
      comment: {
        provider: 'Waline',
        serverURL: 'https://comment.white233.top',
      },
      blog: true,
      mdEnhance: {
        // 选项卡
        tabs: true,
        // 代码块分组
        codetabs: true,
        // chart, https://www.chartjs.org/docs/latest/
        chart: true,
        // Echarts, https://echarts.apache.org/zh/index.html
        echarts: true,
        // mermaid, https://mermaid.js.org/
        mermaid: true,
        // tax, https://katex.org/docs/options.html
        katex: true,
        // vue 交互演示
        vuePlayground: true,
        // 上角标
        sup: true,
        // 下角标
        sub: true,
        // 交互演示
        playground: {
          presets: ['ts', 'vue'],
        },
        // 代码演示
        demo: true,
        // 任务列表
        tasklist: true,
        // 启用figure
        figure: true,
        // 图片懒加载
        imgLazyload: true,
        // 图片标记
        imgMark: true,
        // 图片大小
        imgSize: true,
        // 导入文件
        include: true,
        // 属性支持
        attrs: true,
        // 幻灯片, https://revealjs.com/
        revealJs: {
          plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
          themes: ['league'],
        },
        // 标记
        mark: true,
        // 样式化
        stylize: [
          {
            matcher: 'Recommanded',
            replacer: ({ tag }) => {
              if (tag === 'em')
                return {
                  tag: 'Badge',
                  attrs: { type: 'tip' },
                  content: 'Recommanded',
                };
            },
          },
        ],
        // 流程图, http://flowchart.js.org/
        flowchart: true,
        // 脚注
        footnote: true,
        // 自定义容器
        hint: true,
        // 自定义对齐
        align: true,
        gfm: true,
        vPre: true,
      },
      autoCatalog: {
        exclude: ['/note/', '/series/'],
      },
      components: {
        components: ['Badge', 'FontIcon', 'SiteInfo'],
      },
      // pwa: {
      //   favicon: '/favicon.ico',
      //   cacheHTML: true,
      //   cachePic: true,
      //   appendBase: true,
      // },
    },
  },
  { custom: true },
);
