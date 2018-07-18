//# vue_interview-questions
//
//> use to understand some cases about vue
//
//## Build Setup
//
//``` bash
//# install dependencies
//npm install
//
//# serve with hot reload at localhost:8080
//npm run dev
//
//# build for production with minification
//npm run build
//
//# build for production and view the bundle analyzer report
//npm run build --report
//```
//
//For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 单页App

## 一、知识点总结

1. React.createClass()
	* React.createClass()方法用于生成一个组件类
	* 组件类都必须有自己的render方法，用于输出组件
	* 假如生成一个组件类HelloMessage，模板插入<HelloMessage />时，会自动生成组件类HelloMessage的一个实例
	* 组件类的第一个字母必须大写
	* 组件类里面只能包含一个顶层标签
	* 可添加属性，但给组件标签添加属性时，需要注意两个地方，就是把class属性写成className，for属性写成htmlFor，这是因为class和for时JS里面的保留字
	
2. ReactDOM.render()
	* ReactDOM.render 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点。
   * 项目2
3. React和ReactDOM.的区别
   * react包包含了React.createElement，.createClass，.Component，.PropTypes，.children以及其他元素和组件类
   ``` bash
   	ReactDOM.render(
    	<h1>React入门教程</h1>,
    	document.getElementById("a")
	 );
   ```
   * react-dom包包括ReactDOM.render，.unmountComponentAtNode和.findDOMNode。在 react-dom/server ，有ReactDOMServer.renderToString和.renderToStaticMarkup服务器端渲染支持
   ``` bash
   	 React.render(<h1>React入门教程</h1>,document.getElementById("a"));
   ``` 
4. react-router提供了三种方式来实现路由
   * browserHistory：浏览器会向server发送request，所以server要做特殊请求，比如用的 express 的话，你需要 handle 所有的路由 app.get('*', (req, res) => { ... })，使用了 nginx 的话，nginx也要做相应的配置
   > 浏览器的url是这样的：/user/liuna
   * hashHistory(静态)：因为有 # 的存在，浏览器不会发送request,react-router 自己根据 url 去 render 相应的模块。
   > 浏览器的url是这样的：/#/user/liuna?_k=adseis
   * createMemoryHistory