# Vue 的组件化

## 基本步骤

1. 创建组件构造器  
   调用`Vue.extend()`方法创建组件构造器，需要传入`template:''`
2. 注册组件  
   调用`Vue.component()`注册组件,需要传入组件标签，组件构造器
3. 使用组件  
   在Vue实例的作用范围内使用组件

## 全局组件和局部组件

- 使用`Vue.component()`注册组件是全局的
- 在Vue实例下使用`components: {}`注册的是局部组件

## 父组件和子组件

在`Vue.extend()`，传入`components: {}`来注册子组件

## 语法糖

直接使用`Vue.component(tagName, options)`来注册全局组件，
在Vue实例中使用`components: { tagName: options }`来注册局部组件

## 抽离模板的写法

在HTML中，使用如下的方式声明模板

```html
<!-- 方式一：使用script标签声明 -->
<script type="text/x-template" id="id">
  <div>
    ...
  </div>
</script>

<!-- 方式二：使用template标签声明 -->
<template id="id">
  <div>
    ...
  </div>
</template>

<!-- 使用方式 -->
<script>
  // 注册全局组件
  Vue.component('tagName', {
    template: '#id'
  })
</script>
```

## 组件如何访问数据和方法

```html
<script>
  Vue.component('tagName', {
    template: `
      <div>
        {{ data }}
        <button @click="btnClick"></button>
      </div>`,
    /*
     * 为什么data需要是一个函数而不是对象？
     * 保证使用组件时每个组件内的数据不会相互影响
     */
    data () {
      return {
        data: 'data'
      }
    },
    methods: {
      btnClick () { // ... }
    }
  })
</script>
```

## 父子组件之间的通信

父子组件之间的数据是不能相互引用的，但一般在开发中会有这样的需求，官方给出的解决方案：

- 通过`props`向子组件传递数据
- 通过事件`$emit`向父组件发送消息

父传子：

```html
<!-- 父组件模板 -->
<div id="app">
  <cpn :msg="message"></cpn>
</div>

<!-- 子组件模板 -->
<template id="id">
  <div>
    <button @click="btnClick"></button>
  </div>
</template>

<script>
  // 子组件
  const cpn = {
    template: '#id',
    // 1.数组
    props: ['msg'],
    // 2.类型限制
    props: {
      msg: String
    },
    // 3.默认值
    props: {
      msg: {
        // 类型时Object或者Array时，default需要是一个factory function
        type: String,
        default: 'msg',
        // 是否必传
        required: true
      }
    }
    data () { return {} }
  }

  // 父组件
  const app = new Vue({
    el: '#app',
    data: {
      message: 'msg'
    }
    components: {
      cpn
    }
  })

</script>
```

子传父：

```html
<!-- 父组件模板 -->
<div id="app">
  <!-- 在父组件中通过v-on监听这个自定义事件 -->
  <cpn @btn-click="cpnClick"></cpn>
</div>

<!-- 子组件模板 -->
<template id="id">
  <div>
    <button
      v-for="item in books"
      @click="btnClick(item)"
    >
      {{ item }}
    </button>
  </div>
</template>

<script>
  // 子组件
  const cpn = {
    template: '#id',
    data () {
      return {
        books: [ 'Java','C','C#' ]
      }
    },
    methods: {
      btnClick (item) {
        // 发送自定义事件
        this.$emit('btn-click', item)
      }
    }
  }

  // 父组件
  const app = new Vue({
    el: '#app',
    data: {},
    components: { cpn },
    methods: {
      cpnClick (item) {
        consloe.log(item)
      }
    }
  })
</script>
```
