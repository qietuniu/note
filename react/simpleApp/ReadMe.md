# vue_interview-questions

> use to understand some cases about vue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 单页App

1. React.createClass
	* React.createClass()方法用于生成一个组件类
	* 组件类都必须有自己的render方法，用于输出组件
	* 假如生成一个组件类HelloMessage，模板插入<HelloMessage />时，会自动生成组件类HelloMessage的一个实例
	* 组件类的第一个字母必须大写
	* 组件类里面只能包含一个顶层标签
	* 可添加属性，但给组件标签添加属性时，需要注意两个地方，就是把class属性写成className，for属性写成htmlFor，这是因为class和for时JS里面的保留字
	
2. 项目2
	* 项目1
   * 项目2
3. 项目3
   * 项目1
   * 项目2
