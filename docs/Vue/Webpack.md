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
```
