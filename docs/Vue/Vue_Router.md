# Vue-路由管理器

## 什么是路由

路由是一个网络工程里面的术语。路由(routing)就是通过互联的网络把信息从源地址传输到目的地址的活动。

路由器提供了两种机制：路由和转送

- 路由时决定数据包从**来源**到**目的地**的路径
- 转送将**输入端**的数据转移到合适的**输出端**

路由中有一个非常重要的概念叫路由表

- 路由表本质上就是一个映射表，决定了数据包的指向

> 从表现形式上看：路由就是指随着浏览器地址栏的变化，展示给用户的页面也不相同。  
> 从实现原理上看：路由就是URL到函数(页面)的映射。

### 后端路由阶段

早期的网站开发整个HTML页面是由服务器来渲染的，服务器直接生成渲染好的HTML页面，返回给客户端进行展示。

一个完整的网站，服务器该如何处理页面？

- 一个页面对应一个URL
- 浏览器将URL发送给服务器，服务器对URL进行解析，交给一个 Controller 处理
- Controller 进行各种处理，最终生成HTML或者数据，返回给前端

如此来完成一个IO操作。这就是后端路由。

后端路由又可称之为服务器端路由，当页面中需要请求不同的路径内容时，交给服务器来进行处理，服务器渲染好整个页面，将页面返回给客户端。这样不需要单独加载任何js和css，可以直接交给浏览器展示，这样安全也有利于SEO的优化。但是后端路由也有比较明显的缺点：

- 整个页面的模块都是由后端人员来编写和维护的
- 前端开发人员如果要开发页面，需要通过服务端语言来编写页面代码
- 前端代码和服务端代码逻辑和数据都混杂在一起，编写和维护都是非难难的

### 前后端分离阶段

随着Ajax的出现，有了前后端分离的开发模式。后端只需要提供API类返回数据，前端通过Ajax获取数据，并且可以通过 JavaScript 将数据渲染到页面中。这样做最大的优点就是前后前端分工明确，前端专注于可视化与交互，服务端专注于数据。并且移动端(Android/IOS)出现后，后端不需要进行任何处理，依旧使用原本的API即可。

### 单页面富应用阶段

单页Web应用（single page web application，SPA），就是只有一个Web页面的应用。其实SPA最主要的特点就是在前后端分离的基础上加了一层前端路由，也就是前端来维护一套路由规则。

前端路由的核心是：改变 URL，不会造成整个页面的刷新。

## URL的hash和HTML5的history

### URL的hash

1. URL的hash：URL的hash也就是锚点(#)，本质上是改变`window.location`的`href`属性，可以直接通过`location.hash`来改变`href`，但是页面不会发生刷新。
2. 当页面中的 hash 发生变化时，会触发`hashchange`事件，可以通过监听这个事件来判断路由是否发生了变化。

```javascript
window.addEventListener(
  'hashchange',
  event => {
    const oldURL = event.oldURL // 上一个URL
    const newURL = event.newURL // 当前的URL
    console.log(newURL, oldURL)
  },
  false
)
```

> href -> <font color="red">h</font>yper <font color="red">ref</font>erence 的缩写

### window的history

Window.history 是一个只读属性，用来获取 History 对象的引用，History 对象提供了操作浏览器会话历史（浏览器地址栏中访问的页面，以及当前页面中通过框架加载的页面）的接口。

History API：

1. 向后跳转：`window.history.back()`，这和用户点击浏览器回退按钮的效果相同。
2. 向前跳转：`window.history.forward()`，这和用户点击浏览器前进按钮的效果相同。
3. 跳转到 history 中指定的一个点: `window.history.go()`，用`go()`方法载入到会话历史中的某一特定页面，通过与当前页面相对位置来标志 (当前页面的相对位置标志为0).

    ```JavaScript
      window.history.go(-1)   // 相当于 back()
      window.history.go(1)    // 相当于 forward()

      // 通过查看长度属性的值来确定的历史堆栈中页面的数量
      let numberOfEntries = window.history.length;
    ```

4. 添加和修改历史记录中的条目：

    HTML5引入了 history.pushState() 和 history.replaceState() 方法，它们分别可以添加和修改历史记录条目。这些方法通常与window.onpopstate 配合使用。
    - `pushState()`方法：

        pushState() 需要三个参数: 一个状态对象, 一个标题 (目前被忽略), 和 (可选的) 一个URL. 让我们来解释下这三个参数详细内容：
        - **状态对象** — 状态对象state是一个JavaScript对象，通过`pushState()`创建新的历史记录条目。无论什么时候用户导航到新的状态，popstate事件就会被触发，且该事件的state属性包含该历史记录条目状态对象的副本。  
        状态对象可以是能被序列化的任何东西。原因在于Firefox将状态对象保存在用户的磁盘上，以便在用户重启浏览器时使用，我们规定了状态对象在序列化表示后有640k的大小限制。如果你给`pushState()`方法传了一个序列化后大于640k的状态对象，该方法会抛出异常。如果你需要更大的空间，建议使用 sessionStorage 以及 localStorage.
        - **标题** — Firefox 目前忽略这个参数，但未来可能会用到。在此处传一个空字符串应该可以安全的防范未来这个方法的更改。或者，你可以为跳转的state传递一个短标题。
        - **URL** — 该参数定义了新的历史URL记录。注意，调用`pushState()`后浏览器并不会立即加载这个URL，但可能会在稍后某些情况下加载这个URL，比如在用户重新打开浏览器时。新URL不必须为绝对路径。如果新URL是相对路径，那么它将被作为相对于当前URL处理。新URL必须与当前URL同源，否则 pushState() 会抛出一个异常。该参数是可选的，缺省为当前URL。

        在某种意义上，调用`pushState()`与设置`window.location = "#foo"`类似，二者都会在当前页面创建并激活新的历史记录。但`pushState()`具有如下几条优点：
        - 新的 URL 可以是与当前URL同源的任意URL 。相反，只有在修改哈希时，设置`window.location`才能是同一个 document。
        - 如果你不想改URL，就不用改。相反，设置`window.location = "#foo"`在当前哈希不是 #foo 时， 才能创建新的历史记录项。
        - 你可以将任意数据和新的历史记录项相关联。而基于哈希的方式，要把所有相关数据编码为短字符串。
        - 如果 标题 随后还会被浏览器所用到，那么这个数据是可以被使用的（哈希则不是）。
        注意`pushState()`绝对不会触发 hashchange 事件，即使新的URL与旧的URL仅哈希不同也是如此。

    - `replaceState()`方法：

        `history.replaceState()`的使用与`history.pushState()`非常相似，区别在于`replaceState()`是修改了当前的历史记录项而不是新建一个。注意这并不会阻止其在全局浏览器历史记录中创建一个新的历史记录项。

        `replaceState()`的使用场景在于为了响应用户操作，你想要更新状态对象state或者当前历史记录的URL。

    - `popstate`事件：

        每当活动的历史记录项发生变化时， popstate 事件都会被传递给window对象。如果当前活动的历史记录项是被 pushState 创建的，或者是由 replaceState 改变的，那么 popstate 事件的状态属性 state 会包含一个当前历史记录状态对象的拷贝。
