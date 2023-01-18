---
title: 快速搭建个人文档网站
date: 2023-01-05
---

## 什么是 docsify

> 一个神奇的文档生成器

### 概述

docsify 可以快速帮你生成文档网站。不同于 Gitbook、Hexo 的地方是它不会生成静态的 `.html` 文件, 所有的转换工作都是在运行时。如果你想要开始使用它, 只需要创建一个 `index.html` 就可以开始编写文档并直接部署在 GitHub Pages

### 特性

- 无需构建, 写完文档直接发布
- 容易使用并且轻量（压缩后~21kB）
- 智能的全文搜索
- 提供多套主题
- 丰富的 API
- 支持 Emoji
- 兼容 IE11
- 支持服务器渲染 SSR

## 快速开始

开始之前需要安装 NodeJS

### 安装

安装官方提供的工具 `docsify-cli`, 可以方便地创建及在本地预览生成的文档

::: tabs
@tab npm

```shell
npm i docsify-cli -g
```

@tab yarn

```shell
yarn global add docsify-cli
```

:::

参考 <a href="#docsify-cli-的使用">docsify-cli 的使用</a>

### 初始化

新建一个项目（文件夹） `demo`, 然后执行如下命令

```shell
docsify i docs
```

初始化成功后, 可以看到生成了一个新的目录 `/docs`, 里面有 3 个文件: `.nojekyll`、`index.html`、`README.md`

- `index.html`: 入口文件
- `README.md`: 会做为主页内容渲染
- `.nojekyll`: 用于阻止 GitHub Pages 忽略掉下划线开头的文件

### 本地预览

通过 `docsify serve` 启动一个本地服务器, 可以方便的实时预览效果. 默认的访问地址是 `http://localhost:3000`

```shell
docsify s docs
```

## 部署

现在, 我们可以直接把文档网站部署到 GitHub Pages 上

::: tip GitHub Pages
GitHub Pages 支持从三个地方读取文件

- docs/ 目录
- master 分支
- gh-pages 分支

docsify 官方推荐使用直接放在 `docs/` 目录下的方式
:::

首先将项目上传到 GitHub, 然后进入 GitHub Pages 页面: `Setting -> Pages`

- Source: 选择 `Deploy from a branch`
- Branch: select branch 选主分支（一般是 master 或者 main）, select folder 选择 `/docs`

::: tip 关于部署后的访问地址

- 如果你在 GitHub 上创建的仓库名字是叫 `{username}.github.io`, username 是 github 用户名, 那么直接访问 `https://{username}.github.io`
- 如果不是上面的名字, 那么访问的地址就是 `https://{username}.github.io/{your_repository_name}`, your_repository_name 就是仓库名字

:::

## 多页文档

> 文档网站不能只有一个页面吧

docsify 实现多个页面, 或者需要多级路由的网站都是很容易实现的

如果你的目录结构是这样

```text
.
└── docs
    ├── README.md
    ├── page1.md
    └── pages
        ├── README.md
        └── page2.md
```

那么对应的访问路径将是

```text
docs/README.md        => http://localhost:3000
docs/page1.md         => http://localhost:3000/pages1
docs/pages/README.md  => http://localhost:3000/pages/
docs/pages/page2.md   => http://localhost:3000/pages/page2
```

### 定制侧边栏

随着页面的增多, 需要创建 `_sidebar.md` 文件来定义侧边栏, 默认情况下侧边栏会通过 Markdown 文件自动生成. 通过配置 `loadSidebar` 选项, 具体配置见 <a href="#loadsidebar">配置项#loadSidebar</a>

### 嵌套的侧边栏

有时浏览到一个目录时, 想只显示这个目录自己的侧边栏, 此时可以通过在每个文件夹中添加一个 `_sidebar.md` 来实现

`_sidebar.md` 的加载逻辑是从每层目录下获取文件, 如果当前目录不存在该文件则回退到上一级目录. 例如当前路径为 `/zh-cn/more-pages` 则从 `/zh-cn/_sidebar.md` 获取文件, 如果不存在则从 `/_sidebar.md` 获取

如果希望避免不必要的回退过程, 那么就需要配置 `alias` , 更多用法见 <a href="#alias">配置项#alias</a>

```html
<script>
  window.$docsify = {
    loadSidebar: true,
    alias: {
      '/.*/_sidebar.md': '/_sidebar.md'
    }
  }
</script>
```

### 页面标题

一个页面的 `title` 标签是由侧边栏中选中条目的名称所生成的. 为了更好的 SEO , 可以在指定文件后面指定页面标题.

```html
<!-- docs/_sidebar.md -->

* [Home](/)
* [page1](page1.md "Page 1")
```

### 忽略副标题

当设置了 `subMaxLevel` 时, 默认情况下每个标题都会自动添加到目录中. 如果需要忽略特定的标题, 可以添加 `<!-- {docsify-ignore} -->`

```markdown
# 一级标题

## 二级标题 <!-- {docsify-ignore} -->
```

如果需要忽略整个页面上所有的标题, 在页面的第一个标题上使用 `<!-- {docsify-ignore-all} -->`

```markdown
# 一级标题 <!-- {docsify-ignore-all} -->

## 二级标题
```

`<!-- {docsify-ignore} -->` 和 `<!-- {docsify-ignore-all} -->` 都不会在页面上呈现

## 导航栏

docsify 也支持自定义导航栏, 可以通过 HTML 和 Markdown 两种方式

### HTML 方式

通过用 HTML 创建一个导航栏

```html
<!-- index.html -->

<body>
  <nav>
    <a href="#/en-us/">EN</a>
    <a href="#/zh-cn/">中文</a>
  </nav>
  <div id="app"></div>
</body>
```
::: warning
文档的链接必须要以 `#/` 开头
:::

### Markdown

通过 Markdown 的方式需要配置 `loadNavbar`, 通过 `_navbar.md` 文件来定义 navbar, 具体配置见 <a href="#loadnavbar">配置项#loadNavbar</a>

### 嵌套

如果导航内容比较多, 可以携程嵌套的列表, docsify 会将其渲染成下拉列表的样式

```markdown
<!-- _navbar.md -->

* 导航一
  * [页面1](page1.md)
  * [页面2](page2.md)
  * [页面3](page3.md)

* 导航二
  * [页面4](pages/page4.md)
  * [页面5](pages/page5.md)
  * [页面6](pages/page6.md)
```

`_navbar.md` 加载逻辑和 sidebar 文件一致, 从每层目录下获取. 例如当前路由为 `/zh-cn/custom-navbar` 那么是从 `/zh-cn/_navbar.md` 获取导航栏

## 封面

通过设置 `coverpage` 参数, 可以开启渲染封面的功能. 具体配置见 <a href="#coverpage">配置项#coverpage</a>

### 自定义背景

docsify 默认的背景是随机生成的渐变色, 可以通过在 `_coverpage.md` 末尾添加图片的 Markdown 语法来设置背景, 支持图片和颜色

```markdown
<!-- _coverpage.md -->

[GitHub](https://github.com/whiteChen233/whitechen233.github.io)
[Get Started](#Headline)

<!-- 背景图片 -->

![](https://blog.white233.top/Lucy-David.png)

<!-- 背景色 -->

![color](#f0f0f0)
```

### 多个封面

可以对不同的目录设置不同的封面

如果你的目录结构是这样

```text
.
└── docs
    ├── README.md
    ├── page1.md
    ├── _coverpage.md
    └── pages
        ├── README.md
        └── page2.md
        └── _coverpage.md
```

那么对应配置是

```js
window.$docsify = {
  coverpage: ['/', '/pages/']
};
```

## 配置项

### name

- 描述: 在侧边栏中显示的（网站）名字
- 类型: `String`
- 默认值: 无

#### 基本用法

修改 index.html 中的配置

```html
<!-- index.html -->
<script>
  window.$docsify = {
    name: '我的文档网站'
  };
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
```

同时 name 还支持自定义 HTML 元素

```js
window.$docsify = {
  name: '<span>Name</span>',
};
```

### repo

- 描述: 配置存储库 URL 或用户名/存储库字符串, 在网站右上角添加一个 [Github Corner](http://tholman.com/github-corners/) 组件
- 类型: `String`
- 默认值: 无

#### 基本用法

修改 index.html 中的配置

```html
<!-- index.html -->
<script>
  window.$docsify = {
    // 使用用户名/存储库字符串
    repo: 'whiteChen233/whitechen233.github.io'
    // 或者使用仓库 URL
    // repo: 'https://github.com/whiteChen233/whitechen233.github.io',
  };
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
```

### homepage

- 描述: 默认情况下 README.md 会被作为网站的首页, 也可以通过此项自定义
- 类型: `String`
- 默认值: `README.md`

#### 基本用法

修改 index.html 中的配置

```html
<!-- index.html -->
<script>
  window.$docsify = {
    // 使用别的文件
    homepage: 'home.md',
    // 或者指向仓库的 README
    // homepage: 'https://raw.githubusercontent.com/whiteChen233/whitechen233.github.io/main/README.adoc',
  };
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
```

### auto2top

- 描述: 在路由变化的时候自动跳转至页面顶部
- 类型: `Boolean`
- 默认值: `false`

#### 基本用法

修改 index.html 中的配置

```html
<!-- index.html -->
<script>
  window.$docsify = {
    auto2top: true
  };
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
```

### coverpage

- 描述: 通过设置 coverpage 参数, 可以开启渲染封面功能
- 类型: `Boolean|String|String[]|Object`
- 默认值: `false`

#### 基本用法

修改 index.html 中的配置

```html
<!-- index.html -->
<script>
  window.$docsify = {
    coverpage: true
  }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
```

然后需要创建一个 `_coverpage.md` 

```markdown
<!-- _coverpage.md -->

![logo](_media/icon.svg)

# docsify <small>3.5</small>

> 一个神奇的文档网站生成器。

- 简单、轻便 (压缩后 ~21kB)
- 无需生成 html 文件
- 众多主题

[GitHub](https://github.com/whiteChen233/whitechen233.github.io)
[Get Started](#Headline)
```

#### 其他用法

- 如果不想封面叫这个名字, 你也可以自定义名字, 比如 `my-cover`

```js
window.$docsify = {
    coverpage: 'my-cover.md'
  }
```

- 如果有多个目录需要各自设置封面, 比如多语言的时候

```js
window.$docsify = {
    coverpage: ['/en-us', 'zh-cn']
  }
```

- 如果有多个封面, 又想自定义名字

```js
window.$docsify = {
  coverpage: {
    '/en-us': 'cover-en.md',
    'zh-cn': 'cover-zh.md'
  }
}
```

### loadSidebar

- 描述: 通过设置 loadSidebar 参数, 可以定制侧边栏
- 类型: `Boolean|String`
- 默认值: `false`

#### 基本用法

修改 index.html 中的配置

```html
<!-- index.html -->

<script>
  window.$docsify = {
    loadSidebar: true
  }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
```

在初始化的基础上添加一个 `page1.md`, `pages\README.md`, 然后需要创建一个 `_sidebar.md`, 内容如下

```markdown
- 目录
  - [pages](pages/)
  - [index](README.md)
  - [Page 1](page1.md)
```

::: tip
子目录中的 README.md 文件可以作为路由的默认网页 
:::

也可以通过指定文件名来自定义文件名, 像这样

```js
window.$docsify = {
  loadSidebar: 'my_sidebar.md'
}
```

### loadNavbar

- 描述: 自定义导航栏
- 类型: `Boolean|String`
- 默认值: false

#### 基本用法

修改 index.html 中的配置

```html
<!-- index.html -->

<script>
  window.$docsify = {
  loadNavbar: true
}
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
```

创建 `_navbar.md` 文件

```markdown
<!-- _navbar.md -->

* [En](/)
* [简体中文](/zh-cn/)
```

### alias

- 描述: 设置别名
- 类型: `Object`
- 默认值: 无

可以自由管理路由规则, 且支持正则表达式

::: warning 请注意, 顺序很重要！
如果路由可以由多个别名匹配, 那么首先声明的别名优先级更高
:::

#### 基本用法

```js
window.$docsify = {
  alias: {
    '/pages/(.*)': '/test/$1', // 正则
    '/pages/changelog': '/changelog',
    '/changelog': 'https://raw.githubusercontent.com/docsifyjs/docsify/master/CHANGELOG',
    '/.*/_sidebar.md': '/_sidebar.md', // 配置 sidebar 别名
  },
};
```

### subMaxLevel

在自定义边栏中添加目录（TOC）

- 类型: `Number`
- 默认值: `0`

```js
window.$docsify = {
  subMaxLevel: 2,
};
```

如果在侧边栏中有指向主页的链接, 并希望它在访问根网址时显示为活动状态, 请确保相应地更新侧边栏：

```markdown
- Sidebar
  - [Home](/)
  - [Another page](page.md)
```

## docsify-cli 的使用

### 初始化命令: init

使用 `init` 来初始化文档

```shell
# 完整
docsify init <path> [--local false] [--theme vue] [--plugins false]

# 简写
docsify i <path> [-l false] [-t vue] [-p false]
```

- `<path>`: 初始化的路径, 默认是当前目录. 可以使用相对路径, 类似 `./docs` 或者 `docs`
- `--local`
  - 简写: `-l`
  - 类型: boolean
  - 默认值: `false`
  - 说明: 将 docsify 文件复制到文档路径, 默认为 false, 使用 `cdn.jsdelivr.net` 作为内容分发网络 （CDN）. 使用 `--no-local` 将此选项显式设置为 `false`
- `--theme`
  - 简写: `-t`
  - 类型: string
  - 默认值: `vue`
  - 说明: 设置一个主题, 默认是 `vue`, 其他的选择还有 `buble`、`dark` 和 `pure`
- `--plugins`
  - 简写: `-p`
  - 类型: boolean
  - 默认值: `false`
  - 说明: 提供要作为 `<script>` 标签插入到 `index.html` 中的插件列表

### 运行命令: serve

在本地运行服务, 预览页面

```shell
# 完整
docsify serve <path> [--open false] [--port 3000]

# 简写
docsify s <path> [-o false] [-p 3000]
```

- `--open`
  - 简写: `-o`
  - 类型: boolean
  - 默认值: false
  - 说明: 使用默认的浏览器打开文档, 默认为 `false`. 使用 `--no-open` 将此选项显示设置为 `false`
- `--port`
  - 简写: `-p`
  - 类型: number
  - 默认值: 3000
  - 说明: 选定一个监听端口, 默认设置为 `3000`

### 生成命令: generate

```shell
# 完整
docsify generate <path> [--sidebar _sidebar.md]

# 简写
docsify g <path> [-s _sidebar.md]
```

生成指定目录下的 `\_sidebar.md` 文件

- `<path>`: 生成的路径
- `--sidebar`
  - 简写: `-s`
  - 类型: string
  - 默认值: `\_sidebar.md`
  - 说明: 生成 sidebar 文件, 默认生成文件 `_sidebar.md`

### 其他命令

- 帮助

```shell
# 完整
docsify --help

# 简写
docsify -h
```

- 查看版本

```shell
# 完整
docsify --version

# 简写
docsify -v
```

## 官方文档

- [docsify](https://docsify.js.org/#/zh-cn/)
- [docsify-cli](https://cli.docsifyjs.org/)
