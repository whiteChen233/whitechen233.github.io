---
title: Vue-路由管理器
date: 2021-08-17
---

## 什么是路由

路由是一个网络工程里面的术语。路由(routing)就是通过互联的网络把信息从源地址传输到目的地址的活动。

路由器提供了两种机制：路由和转送

- 路由时决定数据包从**来源**到**目的地**的路径
- 转送将**输入端**的数据转移到合适的**输出端**

路由中有一个非常重要的概念叫路由表

- 路由表本质上就是一个映射表，决定了数据包的指向

> 从表现形式上看：路由就是指随着浏览器地址栏的变化，展示给用户的页面也不相同。  
> 从实现原理上看：路由就是 URL 到函数(页面)的映射。

### 后端路由阶段

早期的网站开发整个 HTML 页面是由服务器来渲染的，服务器直接生成渲染好的 HTML 页面，返回给客户端进行展示。

一个完整的网站，服务器该如何处理页面？

- 一个页面对应一个 URL
- 浏览器将 URL 发送给服务器，服务器对 URL 进行解析，交给一个 Controller 处理
- Controller 进行各种处理，最终生成 HTML 或者数据，返回给前端

如此来完成一个 IO 操作。这就是后端路由。

后端路由又可称之为服务器端路由，当页面中需要请求不同的路径内容时，交给服务器来进行处理，服务器渲染好整个页面，将页面返回给客户端。这样不需要单独加载任何 js 和 css，可以直接交给浏览器展示，这样安全也有利于 SEO 的优化。但是后端路由也有比较明显的缺点：

- 整个页面的模块都是由后端人员来编写和维护的
- 前端开发人员如果要开发页面，需要通过服务端语言来编写页面代码
- 前端代码和服务端代码逻辑和数据都混杂在一起，编写和维护都是非难难的

### 前后端分离阶段

随着 Ajax 的出现，有了前后端分离的开发模式。后端只需要提供 API 类返回数据，前端通过 Ajax 获取数据，并且可以通过 JavaScript 将数据渲染到页面中。这样做最大的优点就是前后前端分工明确，前端专注于可视化与交互，服务端专注于数据。并且移动端(Android/IOS)出现后，后端不需要进行任何处理，依旧使用原本的 API 即可。

### 单页面富应用阶段

单页 Web 应用（single page web application，SPA），就是只有一个 Web 页面的应用。其实 SPA 最主要的特点就是在前后端分离的基础上加了一层前端路由，也就是前端来维护一套路由规则。

前端路由的核心是：改变 URL，不会造成整个页面的刷新。

## URL 的 hash 和 HTML5 的 history

### URL 的 hash

1. URL 的 hash：URL 的 hash 也就是锚点(#)，本质上是改变`window.location`的`href`属性，可以直接通过`location.hash`来改变`href`，但是页面不会发生刷新。
2. 当页面中的 hash 发生变化时，会触发`hashchange`事件，可以通过监听这个事件来判断路由是否发生了变化。

```js
window.addEventListener(
  'hashchange',
  (event) => {
    const oldURL = event.oldURL; // 上一个URL
    const newURL = event.newURL; // 当前的URL
    console.log(newURL, oldURL);
  },
  false,
);
```

::: tip
$\text{href} \to \textcolor{red}{h}\text{yper}\ \textcolor{red}{ref}\text{erence}$ 的缩写
:::

### window 的 history

Window.history 是一个只读属性，用来获取 History 对象的引用，History 对象提供了操作浏览器会话历史（浏览器地址栏中访问的页面，以及当前页面中通过框架加载的页面）的接口。

History API：

1. 向后跳转：`window.history.back()`，这和用户点击浏览器回退按钮的效果相同。
2. 向前跳转：`window.history.forward()`，这和用户点击浏览器前进按钮的效果相同。
3. 跳转到 history 中指定的一个点: `window.history.go()`，用`go()`方法载入到会话历史中的某一特定页面，通过与当前页面相对位置来标志 (当前页面的相对位置标志为 0).

   ```js
   window.history.go(-1); // 相当于 back()
   window.history.go(1); // 相当于 forward()

   // 通过查看长度属性的值来确定的历史堆栈中页面的数量
   let numberOfEntries = window.history.length;
   ```

4. 添加和修改历史记录中的条目：

   HTML5 引入了 history.pushState() 和 history.replaceState() 方法，它们分别可以添加和修改历史记录条目。这些方法通常与 window.onpopstate 配合使用。

   - `pushState()`方法：

     pushState() 需要三个参数: 一个状态对象, 一个标题 (目前被忽略), 和 (可选的) 一个 URL. 让我们来解释下这三个参数详细内容：

     - **状态对象** — 状态对象 state 是一个 JavaScript 对象，通过`pushState()`创建新的历史记录条目。无论什么时候用户导航到新的状态，popstate 事件就会被触发，且该事件的 state 属性包含该历史记录条目状态对象的副本。  
       状态对象可以是能被序列化的任何东西。原因在于 Firefox 将状态对象保存在用户的磁盘上，以便在用户重启浏览器时使用，我们规定了状态对象在序列化表示后有 640k 的大小限制。如果你给`pushState()`方法传了一个序列化后大于 640k 的状态对象，该方法会抛出异常。如果你需要更大的空间，建议使用 sessionStorage 以及 localStorage.
     - **标题** — Firefox 目前忽略这个参数，但未来可能会用到。在此处传一个空字符串应该可以安全的防范未来这个方法的更改。或者，你可以为跳转的 state 传递一个短标题。
     - **URL** — 该参数定义了新的历史 URL 记录。注意，调用`pushState()`后浏览器并不会立即加载这个 URL，但可能会在稍后某些情况下加载这个 URL，比如在用户重新打开浏览器时。新 URL 不必须为绝对路径。如果新 URL 是相对路径，那么它将被作为相对于当前 URL 处理。新 URL 必须与当前 URL 同源，否则 pushState() 会抛出一个异常。该参数是可选的，缺省为当前 URL。

     在某种意义上，调用`pushState()`与设置`window.location = "#foo"`类似，二者都会在当前页面创建并激活新的历史记录。但`pushState()`具有如下几条优点：

     - 新的 URL 可以是与当前 URL 同源的任意 URL 。相反，只有在修改哈希时，设置`window.location`才能是同一个 document。
     - 如果你不想改 URL，就不用改。相反，设置`window.location = "#foo"`在当前哈希不是 #foo 时， 才能创建新的历史记录项。
     - 你可以将任意数据和新的历史记录项相关联。而基于哈希的方式，要把所有相关数据编码为短字符串。
     - 如果 标题 随后还会被浏览器所用到，那么这个数据是可以被使用的（哈希则不是）。
       注意`pushState()`绝对不会触发 hashchange 事件，即使新的 URL 与旧的 URL 仅哈希不同也是如此。

   - `replaceState()`方法：

     `history.replaceState()`的使用与`history.pushState()`非常相似，区别在于`replaceState()`是修改了当前的历史记录项而不是新建一个。注意这并不会阻止其在全局浏览器历史记录中创建一个新的历史记录项。

     `replaceState()`的使用场景在于为了响应用户操作，你想要更新状态对象 state 或者当前历史记录的 URL。

   - `popstate`事件：

     每当活动的历史记录项发生变化时， popstate 事件都会被传递给 window 对象。如果当前活动的历史记录项是被 pushState 创建的，或者是由 replaceState 改变的，那么 popstate 事件的状态属性 state 会包含一个当前历史记录状态对象的拷贝。

## 安装和使用 vue-router

目前前端主流的三大框架，都有自己的路由实现：

- Angular 的 ngRouter
- React 的 ReactRouter
- Vue 的 vue-router

vue-router 是 Vue.js 的官方路由插件，它和 vue.js 是深度集成的，适合于构建单页面应用。

vue-router 是基于路由和组件的，路由用于设定访问路径，将路径和组件映射起来。在单页面应用中，页面路径的改变就是组件的切换。

### 安装

执行以下命令安装 vue-router：

```shell
npm install vue-router --save
```

在模块化工程中使用它(因为是一个插件，所以可以通过`Vue.use()`来安装路由功能)

- 第一步：**导入**路由对象，并且调用`Vue.use(VueRouter)`
- 第二步：创建**路由实例**，并且传入路由**映射配置**
- 第三步：在**Vue 实例**中**挂载**创建的**路由实例**

```js
// /router/index.ts
import Vue from 'vue'
import VueRoter from 'vue-router'
// 安装插件
Vue.use(VueRouter)
// 创建VueRouter对象
const routers = []
// 创建路由对象
export default new VueRouter({
  routers
})


// /main.js
import Vue from 'vue'
import App from './App'
import router from './router'

export default new Vue ({
  el: '#app',
  router,
  render: h => h(App)
})
```

### 使用

使用 vue-router 的步骤：

- 第一步：创建路由组件
- 第二步：配置路由映射：组件和路径映射关系
- 第三步：使用路由：`<router-link>`和`<router-view>`

```js
// router/index.ts

// 创建VueRouter对象
const routers = [
  {
    path: '/home',
    component: () => import('../components/Home'),
  },
  {
    path: '/about',
    component: () => import('../components/About'),
  },
];
// 省略其他代码...
```

```vue
// App.vue
<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-view></router-view>
  </div>
</template>
// 省略其他代码...
```

- `<router-link>`：该标签是一个 vue-router 中已经内置的组件，它最终会被渲染成 a 标签
- `<router-view>`：该标签会根据当前路由的路径，动态渲染出不同的组件
- 网页的其他内容，比如顶部的标题/导航，或者底部的一些版权信息等会和`<router-view>`处于同一个等级
- 在路由切换时，切换的是`<router-view>`挂载的组件，其他内容不会发生改变

> router-link 补充
>
> 除了之前使用的属性`to`，指定跳转的路径，还有一些其他属性：
>
> - `tag`：指定`<router-link>`最终渲染成什么标签，默认是`<a>`。`<router-link to='/' tag='li'>`最终会渲染成`<li>`
> - `replace`：不会留下 history 记录，和使用`history.replaceState()`效果一样。`<router-link to='/' replace>`
> - `active-class`：当`<router-link>`对应的路由匹配成功是，会自动给当前的元素设置一个`router-link-active`的 calss，可以通过设置`active-class`来修改默认的名称。
>   - 在进行高亮显示的导航菜单或者底部 tabbar 时，会使用到该类
>   - 一般会直接使用默认值而不会修改类的属性
>   - 也可以在 VueRouter 中配置`linkActiveClass`来指定全局的类名

### 默认首页

一般情况下，进入网站首页希望默认渲染某个页面的内容，在之前的例子中需要在 routers 中添加如下代码即可：

```js
// 配置一个根路径的映射，重定向到/home
{
  path: '/',
  redirect: '/home'
}
```

### history 模式

默认情况下，vue-router 是使用 hash 模式的，也就是 url 上会带上一个`#`，这样不太美观，通过修改 router 的 mode 属性来变更为 history 模式

```js
// 添加 mode 属性
export default new VueRouter({
  routers,
  mode: 'history',
});
```

### 编程式的导航

除了使用`<router-link>`创建 a 标签来定义导航链接，我们还可以借助 router 的实例方法，通过编写代码来实现。

- `router.push(location, onComplete?, onAbort?)`
- `router.replace(location, onComplete?, onAbort?)`
- `router.go(n)`

在`Vue`实例内部，你可以通过`$router`访问路由实例。因此你可以调用`this.$router.push`

|              声明式               |        编程式         |
| :-------------------------------: | :-------------------: |
|     `<router-link :to="...">`     |  `router.push(...)`   |
| `<router-link :to="..." replace>` | `router.replace(...)` |

## 动态路由

在某些情况下，一个页面的路径可能时不确定的，比如某个系统中用户界面，形如：`/user/zhangsan`、`/user/123`，除了前面的`/user`之外，后面还有其他参数。这种 path 和 Component 的匹配关系，称之为动态路由（也是路由传递数据的一种方式）。

```js
// router.js
{
  path: '/user/:id',
  component: () => import('@/components/User')
}

// User.vue
methods: {
  getId = () => {
    // 注意这里是route而不是router
    return this.$route.params.id
  }
}
```

### 响应路由参数的变化

需要注意的是，当使用路由参数时，例如从`/user/foo`导航到`/user/bar`，原来的组件实例会被复用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。

复用组件时，想对路由参数的变化作出响应的话，你可以简单地`watch`(监测变化)`$route`对象：

```js
const User = {
  template: '...',
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
    },
  },
};
```

或者使用 2.2 中引入的`beforeRouteUpdate`导航守卫：

```js
const User = {
  template: '...',
  beforeRouteUpdate(to, from, next) {
    // react to route changes...
    // don't forget to call next()
  },
};
```

## 路由懒加载

当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。

结合 Vue 的异步组件 (opens new window)和 Webpack 的代码分割功能 (opens new window)，轻松实现路由组件的懒加载。

首先，可以将异步组件定义为返回一个 Promise 的工厂函数 (该函数返回的 Promise 应该 resolve 组件本身)：

```js
const Foo = () =>
  Promise.resolve({
    /* 组件定义对象 */
  });
```

第二，在 Webpack 2 中，我们可以使用动态 import (opens new window)语法来定义代码分块点 (split point)：

```js
import('./Foo.vue'); // 返回 Promise
```

结合这两者，这就是如何定义一个能够被 Webpack 自动代码分割的异步组件。

```js
const Foo = () => import('./Foo.vue');
```

在路由配置中什么都不需要改变，只需要像往常一样使用 Foo：

```js
const router = new VueRouter({
  routes: [{ path: '/foo', component: Foo }],
});
```

### 懒加载的几种方法

1. 结合 Vue 的异步组件和 webpack 的代码分析

   ```js
   const Home = (resolve) => {
     require.ensure(['../components/Home.vue'], () => {
       resolve(require('../components/Home.vue'));
     });
   };
   ```

2. AMD 写法

   ```js
   const Home = (resolve) => require(['../components/Home.vue'], resolve);
   ```

3. 在 ES6 中，可以使用跟简单的写法来组织 Vue 一部组件和 Webpack 的代码分割

   ```js
   const Home = () => import('../components/Home.vue');
   ```

### 把组件按组分块

有时候我们想把某个路由下的所有组件都打包在同个异步块 (chunk) 中。只需要使用 命名 chunk (opens new window)，一个特殊的注释语法来提供 chunk name (需要 Webpack > 2.4)。

```js
const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue');
const Bar = () => import(/* webpackChunkName: "group-foo" */ './Bar.vue');
const Baz = () => import(/* webpackChunkName: "group-foo" */ './Baz.vue');
```

Webpack 会将任何一个异步模块与相同的块名称组合到相同的异步块中。

## 嵌套路由

嵌套路由是一个很常见的功能，比如在 home 页面中，可以通过`/home/news`和`/home/message`访问不同的页面（组件），其实就是一个路径映射一个组件，访问这两个路径会分别渲染这两个组件。

如何实现嵌套路由：

- 创建对应的子组件，并且在路由映射中配置对应的子路由
- 在组件内部使用`<router-view>`标签

```js
{
  path: '/home',
  component: () => import('../components/Home'),
  children: [
    {
      path: 'news',
      component: () => import('../components/News'),
    },
    {
      path: 'message',
      component: () => import('../components/Message'),
    }
  ]
}
```

## 参数传递

有时候在页面的跳转中需要从上一个页面传递一些参数到下一个页面，主有两种传参的方式：

- params 的形式：
  - 配置路由格式： `/user/:id`
  - 传递的方式：在`path`后面跟傻瓜对应的值
  - 传递后形成的路径：`/user/123`或`/user/zhangsan`，通过`$route.params.id`来获取上面定义的参数
- query 的形式：
  - 配置路由格式： `/user`，普通的配置
  - 传递的方式：对象中使用`query`的 key 作为传递方式，传递的其实是一个对象
  - 传递后形成的路径：`/user?id=123`或`/user?id=zhangsan`,通过`$route.query.id`来获取上面定义的参数

> 注意`$router`和`$route`的区别：
>
> - `$router`是全局的路由，可以使用`push`、`replace`等导航到不同 URL。
> - `$route`是当前激活的路由，可以通过它获取当前路由的`name`、`path`、`query`、`params`等属性。

## 导航守卫

摘自 [Vue-Rouetr](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html)

正如其名，`vue-router`提供的导航守卫主要用来通过跳转或取消的方式守卫导航。有多种机会植入路由导航过程中：全局的, 单个路由独享的, 或者组件级的。

记住参数或查询的改变并不会触发进入/离开的导航守卫。你可以通过观察`$route`对象来应对这些变化，或使用`beforeRouteUpdate`的组件内守卫。

### 全局前置守卫

使用`router.beforeEach`注册一个全局前置守卫：

```js
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})
```

当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 等待中。

每个守卫方法接收三个参数：

`to: Route`: 即将要进入的目标 路由对象

`from: Route`: 当前导航正要离开的路由

`next: Function`: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

`next()`: 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。

`next(false)`: 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。

`next('/')`或者`next({ path: '/' })`: 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向`next`传递任意位置对象，且允许设置诸如`replace: true`、`name: 'home'`之类的选项以及任何用在 `router-link`的`to`、`prop`或`router.push`中的选项。

`next(error)`: (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给`router.onError()`注册过的回调。

> 确保`next`函数在任何给定的导航守卫中都被严格调用一次。它可以出现多于一次，但是只能在所有的逻辑路径都不重叠的情况下，否则钩子永远都不会被解析或报错。

### 全局解析守卫

> 2.5.0 新增

在 2.5.0+ 你可以用`router.beforeResolve`注册一个全局守卫。这和`router.beforeEach`类似，区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。

### 全局后置钩子

你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身：

```js
router.afterEach((to, from) => {
  // ...
});
```

### 路由独享的守卫

你可以在路由配置上直接定义`beforeEnter`守卫：

```js
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      },
    },
  ],
});
```

这些守卫与全局前置守卫的方法参数是一样的。

### 组件内的守卫

最后，你可以在路由组件内直接定义以下路由导航守卫：

- beforeRouteEnter
- beforeRouteUpdate (2.2 新增)
- beforeRouteLeave

```js
const Foo = {
  template: `...`,
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  },
};
```

`beforeRouteEnter`守卫**不能**访问`this`，因为守卫在导航确认前被调用，因此即将登场的新组件还没被创建。

不过，你可以通过传一个回调给`next`来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数。

```js
beforeRouteEnter (to, from, next) {
  next(vm => {
    // 通过 `vm` 访问组件实例
  })
}
```

注意`beforeRouteEnter`是支持给`next`传递回调的唯一守卫。对于`beforeRouteUpdate`和`beforeRouteLeave`来说，`this`已经可用了，所以不支持传递回调，因为没有必要了。

```js
beforeRouteUpdate (to, from, next) {
  // just use `this`
  this.name = to.params.name
  next()
}
```

这个离开守卫通常用来禁止用户在还未保存修改前突然离开。该导航可以通过`next(false)`来取消。

```js
beforeRouteLeave (to, from, next) {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    next()
  } else {
    next(false)
  }
}
```

### 完整的导航解析流程

1. 导航被触发。
2. 在失活的组件里调用`beforeRouteLeave`守卫。
3. 调用全局的`beforeEach`守卫。
4. 在重用的组件里调用`beforeRouteUpdate`守卫 (2.2+)。
5. 在路由配置里调用`beforeEnter`。
6. 解析异步路由组件。
7. 在被激活的组件里调用`beforeRouteEnter`。
8. 调用全局的`beforeResolve`守卫 (2.5+)。
9. 导航被确认。
10. 调用全局的`afterEach`钩子。
11. 触发`DOM`更新。
12. 调用`beforeRouteEnter`守卫中传给`next`的回调函数，创建好的组件实例会作为回调函数的参数传入。

## keep-alive

`keep-alive`是 Vue 提供的一个抽象组件，用来对组件进行缓存，从而节省性能，由于是一个抽象组件，所以在页面渲染完毕后不会被渲染成一个 DOM 元素。

`<router-view>`组件是一个`functional`组件，渲染路径匹配到的视图组件。`<router-view>`渲染的组件还可以内嵌自己的`<router-view>`，根据嵌套路径，渲染嵌套组件。

其他属性 (非`router-view`使用的属性) 都直接传给渲染的组件，很多时候，每个路由的数据都是包含在路由参数中。

因为它也是个组件，所以可以配合`<transition>`和`<keep-alive>`使用。如果两个结合一起用，要确保在内层使用`<keep-alive>`：

```vue
<transition>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</transition>
```

当组件在`keep-alive`内被切换时组件的`activated`、`deactivated`这两个生命周期钩子函数会被执行。

被`keep-alive`包裹的动态组件或`router-view`会缓存不活动的实例，再次被调用这些被缓存的实例会被再次复用，对于我们的某些不是需要实时更新的页面来说大大减少了性能上的消耗，不需要再次发送 HTTP 请求，但是同样也存在一个问题就是被`keep-alive`包裹的组件我们请求获取的数据不会再重新渲染页面，这也就出现了例如我们使用动态路由做匹配的话页面只会保持第一次请求数据的渲染结果，所以需要我们在特定的情况下强制刷新某些组件。

1. 利用 include、exclude 属性

   ```vue
   <!-- 包含 -->
   <keep-alive include="A,B">
     <router-view></router-view>
   </keep-alive>
   <!-- 不包含 -->
   <keep-alive exclude="C">
     <router-view></router-view>
   </keep-alive>
   ```

   `include`属性表示只有`name`属性为`A,B`的组件会被缓存（注意是组件的名字，不是路由的名字），其它组件不会。被缓存`exclude`属性表示除了`name`属性为`C`的组件不会被缓存，其它组件都会被缓存。

2. 利用 meta 属性

```js
export default [
  {
    path: '/',
    name: 'a',
    components: A,
    meta: {
      keepAlive: true, //需要被缓存的组件
    },
  },
  {
    path: '/b',
    name: 'b',
    components: B,
    meta: {
      keepAlive: false, //不需要被缓存的组件
    },
  },
];
```

```vue
<div id="app">
  <keep-alive>
    <!-- 需要缓存的视图组件 -->
    <router-view v-if="$route.meta.keepAlive" />
  </keep-alive>
  <!-- 不需要缓存的视图组件 -->
  <router-view v-if="!$route.meta.keepAlive" />
</div>
```
