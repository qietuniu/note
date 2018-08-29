import React, { Component } from 'react';
import {connect} from 'react-redux';

const TodoList = (props) => {
		const { inputValue, list, changeInputValue, handleDelete, handleClick }= props;
		
		return (
			<div>
				<div>
					<input value={inputValue} onChange={changeInputValue}></input>
					<button onClick={handleClick}>提交</button>
				</div>
				<ul>
					{
						list.map((item,index) =>{
							return (
								<li key={index} onClick={handleDelete.bind(this,{index})}>{item}</li>
							)
						})
					}
					
				</ul>
				
			</div>
		)
}

//class TodoList extends Component{
//
//	render(){
//		const { inputValue, list, changeInputValue, handleDelete, handleClick }= this.props;
//		
//		return (
//			<div>
//				<div>
//					<input value={inputValue} onChange={changeInputValue}></input>
//					<button onClick={handleClick}>提交</button>
//				</div>
//				<ul>
//					{
//						list.map((item,index) =>{
//							return (
//								<li key={index} onClick={handleDelete.bind(this,{index})}>{item}</li>
//							)
//						})
//					}
//					
//				</ul>
//				
//			</div>
//		)
////		handleInputChange(e){
////			e.target.value;
////			
////		}
//	}
//}


const mapStateToProps = (state) => {
	return {
		inputValue: state.inputValue,
		list: state.list
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		changeInputValue(e) {
			const action = {
				type:'change_input_value',
				value:e.target.value
			}
			dispatch(action);
		},
		handleClick(){
			const action = {
				type:'add_list_item'
			}
			dispatch(action)
		},
		handleDelete(index){
			console.log(index);
			const action = {
				type:'delete_item',
				index:index
			}
			dispatch(action)
		}
	}
}
//export default TodoList;]
export default connect (mapStateToProps, mapDispatchToProps)(TodoList);
