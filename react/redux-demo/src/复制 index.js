import { createStore } from 'redux'

// 通过reducer建立
// 通过老的状态state和action生成新的state
function counter(state=0, action) {
    switch(action.type) {
        case '加机关枪':
            return state + 1
        case '减机关枪':
            return state - 1
        default:
            return 10
    }
}
// 1新建store
const store = createStore(counter)
console.log(store.getState())

function listener() {
    const current = store.getState()
    console.log(`已有${current}把`)
}
store.subscribe(listener)
// 2.派发事件,传递action
store.dispatch({type:'加机关枪'})
store.dispatch({type:'加机关枪'})
store.dispatch({type:'减机关枪'})
//console.log(store.getState())

