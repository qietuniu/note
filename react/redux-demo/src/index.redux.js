
const ADD_GUN = '加机关枪'
const REMOVE_GUN = '减机关枪'
// 通过reducer建立
// 通过老的状态state和action生成新的state
export function counter(state=0, action) {
    switch(action.type) {
        case ADD_GUN:
            return state + 1
        case REMOVE_GUN:
            return state - 1
        default:
            return 10
    }
}

export function addGun() {
    return {type: ADD_GUN}
}
export function removeGun() {
    return {type: REMOVE_GUN}
}
export function addGunAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(addGun())
        },2000)
    }
}
//// 1新建store
//const store = createStore(counter)
//console.log(store.getState())
//
//function listener() {
//  const current = store.getState()
//  console.log(`已有${current}把`)
//}
//store.subscribe(listener)
//// 2.派发事件,传递action
//store.dispatch({type:'加机关枪'})
//store.dispatch({type:'加机关枪'})
//store.dispatch({type:'减机关枪'})
////console.log(store.getState())

