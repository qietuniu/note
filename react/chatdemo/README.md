cnpm install -g create-react-app
create-react-app my-app

cd my-app
npm start
/_ ------------数据库--------------_/
//nodemon
npm install -g nodemon
nodemon server.js

//mongoose
cnpm install mongoose --save-dev

connect 连接数据库
定义文档模型，scheme 和 model 新建模型
文档结构
string，number 等数据结构
create, update， remove 增改删
find，findOne 查找数据
mongodb 独立工具函数
express 使用 body-parser 支持 post 参数
使用 cooki-parser 存储登录信息 cookie

/_ ------------react--------------_/
class 类要大写
prop 父子传递参数
组件内部通过 state 管理状态,setState来修改数据
使用map循环，每个循环值需要key
constructor(props) {
super(props)
this.state = {
solders:['鼠', '牛', '虎']
}
}

{this.state.solders.map( v => {
  return <li key={v}> {v} </li>
})}

<!-- 事件 -->
onClick = {this.函数名}绑定事件
在构造函数里面使用bind来绑定this
onClick = {this.addSolder}(X)
onClick = {() => this.addSolder()}(√)
constructor(props) {this.addSolder = this.addSolder.bind(this)}(√)
addSolder = () => { }(√)

<!-- 生命周期 -->
初始化周期
组件重新渲染生命周期
组件卸载生命周期

<!-- redux -->
变更setState
状态redux管理，视图react显示
redux 中 store（保险箱）存储所有人状态的记录state
需要改变时，告诉dispatch（专员） 做什么事情（action）
实现变化的人reducer拿到state和action，生成新的state

通过reducer新建store，通过store.getState获取状态
状态变更，store,dispatch(action)来修改
reducer接受state和action ,返回新的state,用store.subscribe监听每次的修改
