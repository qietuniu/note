
## redux+react
把store.dispatch 方法传递给组件，内部可以调用修改状态
subscribe订阅render 函数，每次修改都重新渲染
redux相关内容，移到单独的文件index.redux.js单独管理

## react-redux
yarn add react-redux
忘记subscribe，记住reducer,action,dispatch即可
提供了Provider和connect 两个接口来链接

使用方法：
Provider组件在应用最外层，只需传入一次store即可
Connect负责从外部获取组件需要的参数
connect可以用装饰器的方式来写
使用装饰器优化connect 代码
npm run eject弹出个性化配置