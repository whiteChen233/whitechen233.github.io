---
title: 插槽
date: 2021-07-17
---

## 何为 Slot

翻译为插槽

## 组件的插槽

组件的插槽也是为了让我们封装的组件更加具有拓展性，从而让使用者可以决定组件内部的一些内容到底展示什么。

### 基本使用

使用`<slot></slot>`标签声明插槽

### 默认值

在`<slot></slot>`标签中添加的视为默认值。使用组件时没有使用则使用默认的，有则进行替换。如果有多个值同时放到组件中进行替换时，会一起作为替换元素。

```vue
<div id="app">
  <!-- 显示默认值 -->
  <cpn></cpn>

  <!-- 显示替换值 -->
  <cpn>
    <h1>替换内容1</h1>
    <h2>替换内容2</h2>
  </cpn>
</div>

<template id="cpn">
  <div>
    <slot>默认值</slot>
  </div>
</template>

<script>
Vue.component('cpn', {
  template: '#cpn',
});

const app = new Vue({
  el: '#app',
});
</script>
```

### 具名插槽

组件中声明了多个插槽后需要给每个插槽起个名字以便使用，否则使用插槽时会将没有名字的插槽全部替换掉

## 编译作用域

变量的作用域属于声明的模板之下。

官方给出了一条准则：**父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的**。

## 作用域插槽

有时需要在插槽中访问子组件的数据，此时可以通过以下方式实现

```vue
<div id="app">
  <cpn>
    <!-- 在父组件中通过slotData获取从子组件传过来的数据，default是指默认的插槽，如果是具名插槽则需要替换成对应的名字且不能省略插槽名字。slotData.data中的data这个键就是子组件的slot中绑定的data(这个名字随便取) -->
    <template v-slot:default="slotData">{{ slotData.data.join(' * ') }}</template>
  </cpn>
</div>

<template id="cpn">
  <div>
    <!-- 将list绑定到data上 -->
    <slot :data="list">
      <ul>
        <li v-for="item in list">{{ item }}</li>
      </ul>
    </slot>
  </div>
</template>

<script>
Vue.component('cpn', {
  template: '#cpn',
  data() {
    return {
      list: ['Java', 'C++', 'C#'],
    };
  },
});

const app = new Vue({
  el: '#app',
});
</script>
```

### 缩写语法

```vue
<!-- 1.独占默认插槽 -->
<!--
  原始写法
<cpn>
  <template v-slot:default="slotData">
    {{ slotData.data.join(' * ') }}
  </template>
</cpn>
-->
<!-- 简写 -->
<!-- 注意默认插槽的缩写语法不能和具名插槽混用，因为它会导致作用域不明确。所以只要出现多个插槽，请始终为所有的插槽使用完整的基于 <template> 的语法 -->
<cpn>
  <template v-slot="slotData">{{ slotData.data.join(' * ') }}</template>
</cpn>

<!-- 2.解构插槽prop -->
<!--
  作用域插槽的内部工作原理是将你的插槽内容包裹在一个拥有单个参数的函数里：
  function (slotProps) {
    // 插槽内容
  }
  这意味着 v-slot 的值实际上可以是任何能够作为函数定义中的参数的 JavaScript 表达式。
-->
<!-- 直接解构 -->
<cpn>
  <template v-slot="{ user }">{{ user.name }}</template>
</cpn>
<!-- 重命名 -->
<cpn>
  <template v-slot="{ user: person }">{{ person.name }}</template>
</cpn>
<!-- 定义后备内容，用于插槽 prop 是 undefined 的情形 -->
<cpn>
  <template v-slot="{ user = { firstName: 'Guest' } }">{{ user.firstName }}</template>
</cpn>

<!-- 3.动态插槽名 -->
<cpn>
  <template v-slot:[dynamicSlotName]>...</template>
</cpn>

<!-- 4.具名插槽的缩写 -->
<!-- 跟 v-on 和 v-bind 一样，v-slot 也有缩写，即把参数之前的所有内容 (v-slot:) 替换为字符 #。例如 v-slot:header 可以被重写为 #header： -->
<cpn>
  <template #default="{ user }">...</template>
</cpn>
```
