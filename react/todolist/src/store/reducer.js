const defaultState = {
	inputValue:'',
	list:[]
}
// reducer 可以接受state 但是不能修改state
export default (state = defaultState, action) => {
	if(action.type === "change_input_value"){
		//深拷贝
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState;
	}
	if(action.type === "add_todo_item"){
		const newState = JSON.parse(JSON.stringify(state));
		if(newState.inputValue!=""){
			newState.list.push(newState.inputValue);
			newState.inputValue = '';
		}		
		return newState;
	}
	if(action.type === "delete_todo_item"){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index,1);	
		console.log(newState);
		return newState;
	}
	console.log(state,action);
	return state;
}
