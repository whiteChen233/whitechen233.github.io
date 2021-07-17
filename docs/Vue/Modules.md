# 模块化

参考 > MDN-[JavaScript modules 模块](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules)

## 背景

> Javascript 程序本来很小——在早期，它们大多被用来执行独立的脚本任务，在你的 web 页面需要的地方提供一定交互，所以一般不需要多大的脚本。过了几年，我们现在有了运行大量 Javascript 脚本的复杂程序，还有一些被用在其他环境（例如 Node.js）。
>
> 因此，近年来，有必要开始考虑提供一种将 JavaScript 程序拆分为可按需导入的单独模块的机制。Node.js 已经提供这个能力很长时间了，还有很多的 Javascript 库和框架 已经开始了模块的使用（例如， CommonJS 和基于 AMD 的其他模块系统 如 RequireJS, 以及最新的 Webpack 和 Babel）。
>
> --- *摘自 MDN*

在模块化之前通常javascript的代码会保存在不同的js文件中维护,这样的维护方式，会带来一些问题：

- 全局变量同名
- 引入js的依赖顺序

## 使用模块作为出口

上面的问题可以使用匿名函数解决全局变量的问题，但是会带来一个新的问题：代码不能复用了。
于是模块化的思想出现了，它将匿名函数中需要对外暴露的属性、方法通过添加到一个对象里，将这个对象返回，并在函数外面使用一个变量接收，这就是一个'模块'了。在其他地方使用前面定义的变量.来调用属性或者方法

常见的模块化规范：  
  CommonJS、AMD、CMD、也有ES6的Modules

模块化有两个核心: **导入和导出**

### CommonJS 中的使用

```javascript
// 以下代码需要运行环境

// 导出
module.exports = {
  flag: true,
  test () {
    console.log('function')
  }
}

// 导入
// CommonJS模块
const { flag, test } = require('moduleA')
// 等同于
const _moduleA = require('moduleA')
const flag = _moduleA.flag
const test = _moduleA.test
```

### ES6 中的使用

1. 使用关键字: `export`导出,`import`导入。

    导出的功能都是由named exports 组成— 每个项目（无论是函数，常量等）在导出时都由其名称引用，并且该名称也用于在导入时引用它

    ```javascript
    // 导出
    // 方式一
    export const flag = true
    export function test () {}
    // 方式二
    export {
      flag: true,
      test () {
        consloe.log('test')
      }
    }

    // 导入
    import { flag, test } from 'moduleA'
    ```

2. 默认导出 versus 命名导出。

    还有一种导出类型叫做 default export —这样可以很容易地使模块提供默认功能，并且还可以帮助JavaScript模块与现有的CommonJS和AMD模块系统进行互操作

    ```javascript
    // 默认导出，一个模块只能有一个default
    export default {}

    // 导入的时候可以自定义名字
    import customName from 'ModuleA'
    ```

3. 重命名导出与导入

    ```javascript
    // 重命名导出
    export {
      function1 as newFunc1,
      function2 as newFunc2
    }

    // 导入
    import { newFunc1, newFunc2 } from 'moduleA'
    ```

    ```javascript
    // 导出
    export { function1, function2 };

    // 重命名导入
    import {
      function1 as newFunc1,
      function2 as newFunc2
    } from 'moduleA'
    ```

4. 创建模块对象

    导入每一个模块功能到一个模块功能对象上。可以使用以下语法形式：

    ```javascript
    // 导入
    import * as ModuleA from 'moduleA'

    // 使用
    ModuleA.func1()
    ModuleA.prop1
    ```
