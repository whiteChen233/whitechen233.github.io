# Webpack

## 什么是 Webpack

本质上，webpack 是一个现代 JavaScript 应用程序的静态**模块打包**器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

其实就是 **模块** 和 **打包**

## 前端模块化

在ES6之前，需要借助其他工具才能进行模块化开发，完成开发后还需要处理模块间的各种依赖，并且需将其进行整合打包。

webpack的一个核心就是让我们可以进行模块化开发，并且会帮助我们处理模块间的依赖关系。不仅仅是JavaScript文件，CSS、图片、json文件等等都可以在微博pack中被当作模块来使用。

## webpack安装

webpack需要nodejs的环境，使用nodejs中的包管理器npm安装webpack: `npm install webpack -g`

## 入口和出口

入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。

output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist。基本上，整个应用程序结构，都会被编译到你指定的输出路径的文件夹中。

```JavaScript
// webpack.config.js
const path = require('path')

module.exports = {
  // 入口
  entry: './src/main.js',
  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}
```

使用`npm init`初始化node环境,生成`package.json`文件,在script中添加命令，即可使用`npm run xxx`来执行

```json
// package.json
{
  "name": "xxx",
  "version": "xxx",
  "description": "xxx",
  "main": "xxx",
  "scripts": {
    // 使用 npm run [commond] 来执行定义的命令
    "test": "echc \"Error: no test specified\" && exit 1",
    "build": "webpack",
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

```JavaScript
// webpack.config.js
const path = require('path')

const config = {
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // use可以配置多个 loader，wbpack会从右到左加载
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            // 当加载的图片小于limit时，会将图片编译成base64字符串返回，否则会使用file-loader
            options: {
              limit: 8196,
              // 文件打包的规则:存放在img文件夹下,保持名字使用8位hash值
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  }
}

module.exports = config
```

### ES6 -> ES5

使用babel这个loader可以将ES6的语法转换成ES5，使用这条命令安装`npm install babel-loader babel-core babel-preset-2015`

```JavaScript
// webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
}
```

### webpack配置Vue

使用`npm install vue --save`安装Vue，使用如下：

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

使用webpack打包后运行，打包的过程应该不会出错，但是运行起来没有效果，查看浏览器控制台有报错，应该是因为Vue的runtime-only与runtime-complier的区别：

- runtime-only:代码中不可以含有任何template
- runtime-complier:代码中可以有template，因为可以使用complier对其进行编译

上面的代码使用的是runtime-only但是却包含了template(`<div id="app"></div>`),这里有[官方解释](https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6)

```javascript
//webpack.config.js
//其实就是取别名，找到以 vue 结尾的，就去node_modules重新查一下路径
module.exports = {
  // ...
  resolve: {
   alias: {
    'vue$': 'vue/dist/vue.esm.js' // 用webpack 1时需用'vue/dist/vue.common.js'
  }
 }
}
```

### el和template的区别

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

plugin是插件的意思，通常是对于某个现有 框架进行拓展。webpack中的插件，就是对webpack现有的功能的各种拓展，比如打包优化、文件压缩等。插件目的在于解决 loader 无法实现的其他事。

### loader和plugin的区别

- loader主要用于转换某些类型的模块，它是一个转换器
- plugin是插件，它是对webpack本身的拓展，是一个拓展器

### plugin的使用

1. 通过npm安装需要使用的plugin(某些webpack已经内置的插件不需要安装)
2. 在webpack.config.js中的plugins中配置插件

#### 添加版权plugin

Bannerplugin: 为打包文件添加版权声明，是webpack自带的

```javascript
// webpack.config.js
const webpack = require('webpack')
moduke.exports = {
  // ...
  plugins: [
    new webpack.BannerPlugin('最终版权归xxx所有')
  ]
}
```

#### 打包html的plugin

HtmlWebpackPlugin：自动生成index.html文件，将打包的js文件自动通过script标签引入到body中。

安装：`npm install --save-dev html-webpack-plugin`

配置：

```JavaScript
// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // ...
  plugins: [
    new HtmlWebpackPlugin({
      // 指定生成index的模板
      template: 'index.html'
    })
  ]
}
```

#### js压缩plugin

在项目发布之前，我们需要对js等文件进行压缩处理,这里需要使用一个第三方压缩的插件：uglifyJsPlugin，这里指定版本号与Cli2版本一致

安装： `npm install --save-dev uglifyjs-webpack-plugin@1.1.1`

配置：

```JavaScript
// webpack.config.js
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  // ...
  plugins: [
    new UglifyJsWebpackPlugin()
  ]
}
```

## 热更新：webpack-dev-server

webpack提供了一个可选的本地开发服务器，这个本地服务器基于node.js搭建，内部使用express框架，可以实现热更新，在使用前需要先安装：`npm install --save-dev webpack-dev-server@2.9.1`

配置。devServer也是作为webpack中的一个选项，选项本身可以设置如下属性：

- contentBase: 为哪一个文件夹提供本地服务，默认是根文件夹，一般只想dist目录
- port: 端口号
- inline: 页面实时刷新
- historyApiFallback: 在SPA页面中，依赖HTML5的history模式

```JavaScript
// webpack.config.js
module.exports = {
  // ...
  devServer： {
    contentBase: './dist',
    iline: true
  }
}
```

另外在package.json中配置一个新的script: `"dev": "webpack-dev-server --open"`, 其中`--open`参数表示直接打开浏览器
