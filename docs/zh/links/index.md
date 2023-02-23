---
title: 链接
icon: link-variant
article: false
timeline: false
dependence:
  - name: VuePress
    desc: Vue 驱动的静态网站生成器
    logo: https://v2.vuepress.vuejs.org/images/hero.png
    url: https://v2.vuepress.vuejs.org/zh/
    repo: https://github.com/vuepress/vuepress-next
    preview: /assets/links/VuePress.png
  - name: VuePress Theme Hope
    desc: 一个具有强大功能的 vuepress 主题✨
    logo: https://theme-hope.vuejs.press/logo.svg
    url: https://theme-hope.vuejs.press/zh/
    repo: https://github.com/vuepress-theme-hope/vuepress-theme-hope
    preview: /assets/links/VuePress-theme-hope.png
links:
  - name: White's Note
    desc: 温故而知新~
    logo: https://blog.white233.top/logo.png
    url: https://blog.white233.top/
    repo: https://github.com/whiteChen233/whitechen233.github.io
    preview: /assets/links/WhiteBlog.png
---

## 框架与主题

<SiteInfo
  v-for="item in $frontmatter.dependence"
  :key="item.link"
  v-bind="item"
/>

## 友情链接

<SiteInfo
v-for="item in $frontmatter.links"
:key="item.link"
v-bind="item"
/>