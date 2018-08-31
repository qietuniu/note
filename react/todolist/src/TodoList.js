import React , { Component } from 'react';
import 'antd/dist/antd.css'; 
<<<<<<< HEAD

import store from './store';
import { getInputChangeAction, getAddItemAction, getItemDelete } from './store/actionCreators'
import ToDoListUI from './ToDoListUI'
=======
import { Input,Button,List   } from 'antd';
import store from './store'
import axios from 'axios'
>>>>>>> e9cc9c204e86add4d03a1c2679d34fe17dd312ba

class TodoList extends Component{
	
	constructor(props) {
		super(props);
		this.state = store.getState();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleItemDelete=this.handleItemDelete.bind(this);
		store.subscribe(this.handleStoreChange);
	}
	
	render() {
		return (
			<ToDoListUI 				inputValue={this.state.inputValue}
				list={this.state.list}
				handleInputChange={this.handleInputChange}
				handleBtnClick={this.handleBtnClick}
				handleItemDelete={this.handleItemDelete}
			/>
		)
	}
	componentDidMount(){
		axios.get('/list.json').then(() => {
			
		})
	}
	handleInputChange(e){
//		const action = {
//			type:CHANGE_INPUT_VALUE,
//			value:e.target.value
//		}
		const action = getInputChangeAction(e.target.value);
		store.dispatch(action);		
	}
	handleStoreChange() {
		console.log("store change")
		this.setState(store.getState());
	}
	
	handleBtnClick() {
//		const action = {
//			type:ADD_TODO_ITEM,
//		}
		const action = getAddItemAction();
		store.dispatch(action);
	}
	
	handleItemDelete(index){
//		const action = {
//			type:DELETE_TODO_ITEM,
//			index
//		}
		const action = getItemDelete(index);
		store.dispatch(action);
	}
}

export default TodoList;