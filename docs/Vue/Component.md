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