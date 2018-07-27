import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionTypes'

const defaultState = {
	inputValue:'',
	list:[1,2]
}
// reducer 可以接受state 但是不能修改state
export default (state = defaultState, action) => {
	if(action.type === CHANGE_INPUT_VALUE){
		//深拷贝
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState;
	}
	if(action.type === ADD_TODO_ITEM){
		const newState = JSON.parse(JSON.stringify(state));
		if(newState.inputValue!=""){
			newState.list.push(newState.inputValue);
			newState.inputValue = '';
		}		
		return newState;
	}
	if(action.type === DELETE_TODO_ITEM){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index,1);	
		console.log(newState);
		return newState;
	}
	console.log(state,action);
	return state;
}
