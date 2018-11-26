
## redux+react
把store.dispatch 方法传递给组件，内部可以调用修改状态
subscribe订阅render 函数，每次修改都重新渲染
redux相关内容，移到单独的文件index.redux.js单独管理

## react-redux
yarn add react-redux
忘记subscribe，记住reducer,action,dispatch即可
提供了Provider和connect 两个接口来链接