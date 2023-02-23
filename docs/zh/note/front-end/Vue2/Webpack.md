---
title: 模块打包器
date: 2021-07-17
---

## 什么是 Webpack

本质上，webpack 是一个现代 JavaScript 应用程序的静态**模块打包**器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

其实就是 **模块** 和 **打包**

## 前端模块化

在 ES6 之前，需要借助其他工具才能进行模块化开发，完成开发后还需要处理模块间的各种依赖，并且需将其进行整合打包。

webpack 的一个核心就是让我们可以进行模块化开发，并且会帮助我们处理模块间的依赖关系。不仅仅是 JavaScript 文件，CSS、图片、json 文件等等都可以在微博 pack 中被当作模块来使用。

## webpack 安装

webpack 需要 nodejs 的环境，使用 nodejs 中的包管理器 npm 安装 webpack: `npm install webpack -g`

## 入口和出口

入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。

output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist。基本上，整个应用程序结构，都会被编译到你指定的输出路径的文件夹中。

```javascript
// webpack.config.js
const path = require("path");

module.exports = {
  // 入口
  entry: "./src/main.js",
  // 出口
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
```

使用`npm init`初始化 node 环境,生成`package.json`文件,在 script 中添加命令，即可使用`npm run xxx`来执行

```json
// package.json
{
  "name": "xxx",
  "version": "xxx",
  "description": "xxx",
  "main": "xxx",
  "scripts": {
    // 使用 npm run [command] 来执行定义的命令
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "author": ""
  // ...
}
```

## loader

loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。

本质上，webpack loader 将所有类型的文件，转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块。

注意，loader 能够 import 导入任何类型的模块（例如 .css 文件），这是 webpack 特有的功能，其他打包程序或任务执行器的可能并不支持。
在更高层面，在 webpack 的配置中 loader 有两个目标：

1. test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
2. use 属性，表示进行转换时，应该使用哪个 loader。

```javascript
// webpack.config.js
const path = require("path");

const config = {
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      // use可以配置多个 loader，wbpack会从右到左加载
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            // 当加载的图片小于limit时，会将图片编译成base64字符串返回，否则会使用file-loader
            options: {
              limit: 8196,
              // 文件打包的规则:存放在img文件夹下,保持名字使用8位hash值
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
};

module.exports = config;
```

### ES6 -> ES5

使用 babel 这个 loader 可以将 ES6 的语法转换成 ES5，使用这条命令安装`npm install babel-loader babel-core babel-preset-2015`

```javascript
// webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015"],
          },
        },
      },
    ],
  },
};
```

### webpack 配置 Vue

使用`npm install vue --save`安装 Vue，使用如下：

```HTML
<html>
  ...
  <body>
    <div id="app">
      {{ message }}
    </div>
    <script>
      import Vue from 'vue'
      new Vue({
        el: '#app'
        data: {
          message: 'hello webpack'
        }
      })
    </script>
  </body>
</html>
```

对上述代码使用 webpack 打包并运行，其中打包的过程应该不会出错，但是运行起来没有效果，查看浏览器控制台有报错，这里有下面这个问题：

> Vue 的 runtime-only 与 runtime-compiler 的区别：
>
> - runtime-only:代码中不可以含有任何 template
> - runtime-compiler:代码中可以有 template，因为可以使用 compiler 对其进行编译
>
> 这里有[官方解释](https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6)

上面的代码使用的是 runtime-only 但是却包含了 template(`<div id="app"></div>`),所以代码执行不了

```javascript
//webpack.config.js
//其实就是取别名，找到以 vue 结尾的，就去node_modules重新查一下路径
module.exports = {
  // ...
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js", // 用webpack 1时需用'vue/dist/vue.common.js'
    },
  },
};
```

### el 和 template 的区别

```html
<html>
  <head>
    // ...
  </head>
  <body>
    <div id="app"></div>

    <script>
      import Vue from 'vue'
      new Vue({
        // 当同时有el和template时，vue在编译的时候会将template里面的代码片段替换掉挂载app的div块
        el: '#app'
        template: `
          <div>
            {{ message }}
          </div>
        `,
        data: {
          message: 'hello webpack'
        }
      })
    </script>
  </body>
</html>
```

## plugin

plugin 是插件的意思，通常是对于某个现有 框架进行拓展。webpack 中的插件，就是对 webpack 现有的功能的各种拓展，比如打包优化、文件压缩等。插件目的在于解决 loader 无法实现的其他事。

### loader 和 plugin 的区别

- loader 主要用于转换某些类型的模块，它是一个转换器
- plugin 是插件，它是对 webpack 本身的拓展，是一个拓展器

### plugin 的使用

1. 通过 npm 安装需要使用的 plugin(某些 webpack 已经内置的插件不需要安装)
2. 在 webpack.config.js 中的 plugins 中配置插件

#### 添加版权 plugin

Bannerplugin: 为打包文件添加版权声明，是 webpack 自带的

```javascript
// webpack.config.js
const webpack = require("webpack");
moduke.exports = {
  // ...
  plugins: [new webpack.BannerPlugin("最终版权归xxx所有")],
};
```

#### 打包 html 的 plugin

HtmlWebpackPlugin：自动生成 index.html 文件，将打包的 js 文件自动通过 script 标签引入到 body 中。

安装：`npm install --save-dev html-webpack-plugin`

配置：

```javascript
// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  // ...
  plugins: [
    new HtmlWebpackPlugin({
      // 指定生成index的模板
      template: "index.html",
    }),
  ],
};
```

#### js 压缩 plugin

在项目发布之前，我们需要对 js 等文件进行压缩处理,这里需要使用一个第三方压缩的插件：uglifyJsPlugin，这里指定版本号与 Cli2 版本一致

安装： `npm install --save-dev uglifyjs-webpack-plugin@1.1.1`

配置：

```javascript
// webpack.config.js
const UglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  // ...
  plugins: [new UglifyJsWebpackPlugin()],
};
```

## 热更新：webpack-dev-server

webpack 提供了一个可选的本地开发服务器，这个本地服务器基于 node.js 搭建，内部使用 express 框架，可以实现热更新，在使用前需要先安装：`npm install --save-dev webpack-dev-server@2.9.1`

配置。devServer 也是作为 webpack 中的一个选项，选项本身可以设置如下属性：

- contentBase: 为哪一个文件夹提供本地服务，默认是根文件夹，一般只想 dist 目录
- port: 端口号
- inline: 页面实时刷新
- historyApiFallback: 在 SPA 页面中，依赖 HTML5 的 history 模式

```javascript
// webpack.config.js
module.exports = {
  // ...
  devServer： {
    contentBase: './dist',
    inline: true
  }
}
```

另外在 package.json 中配置一个新的 script: `"dev": "webpack-dev-server --open"`, 其中`--open`参数表示直接打开浏览器

## 配置分离

有时候需要把生产的配置和开发的配置分开来，以便管理。一般分成 3 个文件：

- base.config.js ———— 基础的一些配置
- dev.config.js ———— dev 的一些配置
- prod.config.js ———— prod 的一些配置

在分离之前，需要先安装`webpack-merge`来合并分离后的配的文件，使用`npm install --save-dev webpack-merge`安装

```javascript
// base.config.js、dev.config.js、prod.config.js在同一个文件夹中

// base.config.js
module.exports = {
  // 一些dev和prod都有的配置 ...
};

// dev.config.js
const webpackMerge = require("wepack-merge");
const baseConfig = require("./base.config.js");

module.exports = webpackMerge(baseConfig, {
  // 一些dev独有的配置 ...
  devServer: {
    // ...
  },
});

// prod.config.js
const webpackMerge = require("wepack-merge");
const baseConfig = require("./base.config.js");
const UglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin");

module.exports = webpackMerge(baseConfig, {
  // 一些prod独有的配置 ...
  plugins: [
    // ...
    new UglifyJsWebpackPlugin(),
  ],
});
```

修改之后需要将`package.json`中的 script 脚本修改一下：

```javascript
/**
 * 假设文件结构如下
 * - packasge.json
 * - build
 *    - base.config.js
 *    - dev.config.js
 *    - prod.config.js
 */
  script： {
    // 默认的webapck.config.js不用了 手动指定配置文件位置
    "build": "webpack --config ./build/prod.config.js"
    "dev": "webpack-dev-server --open --config ./build/dev.config.js"
  }
```

> Tips：此时打包，会发现根目录下的 dist 没有打包出来的文件，而是在 build 文件夹下，这是因为`base.config.js`中配置的`output`的`path.reslove(__dirname, 'dist')`，将`'dist'`修改为`'../dist'`即可
