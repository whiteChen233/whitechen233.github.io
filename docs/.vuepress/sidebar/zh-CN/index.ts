import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    "intro"
  ],
  "/zh/front-end": [
    "",
    {
      text: "ES6",
      prefix: "ES6/",
      collapsable: true,
      children: [
        "Promise"
      ]
    },
    {
      text: "Vue 2",
      prefix: "Vue2/",
      collapsable: true,
      children: [
        "Runtime",
        "Component",
        "Slot",
        "Modules",
        "Webpack",
        "Vue_CLI",
        "Vue_Router",
        "Vuex"
      ]
    }
  ],
  "/zh/QCCSTP/": [
    "",
    {
      text: "软件设计师",
      prefix: "software-design-engineer/",
      collapsable: true,
      children: [
        "说明",
        "计算机组成与结构",
        "程序语言",
        "操作系统",
        "软件工程基础",
        "系统开发与运行",
        "网络与多媒体基础知识",
        "数据库技术",
        "算法与数据结构",
        "面向对象技术",
        "标准化和知识产权"
      ]
    },
    {
      text: "系统架构设计师",
      prefix: "system-architect/",
      collapsable: true,
      children: [
        "start",
        "enterprise-informatization-strategy-and-implementation",
        "software-engineering",
        "software-architecture-design",
        "design-thesis",
        "system-security-analysis-and-design",
        "system-reliability-analysis-and-design",
        "project-management",
        "computer-composition-and-architecture",
        "system-configuration-and-performance-evaluation"
      ]
    }
  ],
  "/zh/others/": [
    "",
    "UML/UML"
  ]
});
