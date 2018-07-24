import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue:'',
			list:['学习英语','学习react']
		}
		this.handleInputChange=this.handleInputChange.bind(this);
		this.handleBtnClick=this.handleBtnClick.bind(this);
		this.handleItemDelete=this.handleItemDelete.bind(this);
	}
	render() {
		return (
			<Fragment>
				<div>
					<label htmlFor="insertArea">任务:</label>
					<input id="insertArea" className="input" value={this.state.inputValue} 
					onChange={this.handleInputChange}/>
					<button onClick={this.handleBtnClick}>提交</button>
				</div>
				<ul>
					{this.getTodoItem()}
					{/*{
						this.state.list.map( (item,index) => {
							return (
								<div>
									<TodoItem 
										content={item} 
										index={index}
										deleteItem = {this.handleItemDelete}/>
								</div>*/
								/*{<li key={index} onClick={this.handleItemDelete.bind(this,index)}>
								{item} 
								</li>}
								<li 
									key={index}
									onClick={this.handleItemDelete.bind(this,index)} 
									dangerouslySetInnerHTML={{__html: item}}
								>
								</li>*/
							/*)
						})
					}*/}
				</ul>
			</Fragment>
			
		)
	}
	getTodoItem(){
		return this.state.list.map( (item,index) => {
			return (
					<TodoItem 
						key = {index}
						content={item} 
						index={index}
						deleteItem = {this.handleItemDelete}/>
			)
		})
	}
	handleInputChange(e) {
		//异步
		const value=e.target.value;
		this.setState( () => ({
			inputValue:value
		}))
		
//		this.setState( () => {
//			return {
//				inputValue:e.target.value
//			}
//		})

//		this.setState({
//			inputValue:e.target.value
//		})
	}
	handleBtnClick(){
		this.setState( (prevState) => ({
			list:[...prevState.list,prevState.inputValue],
			inputValue:''
		}))
//		this.setState({
//			list:[...this.state.list,this.state.inputValue],
//			inputValue:''
//		})
	}
	handleItemDelete(index){
		
		
		this.setState( (prevState) =>{
			const list = [...prevState.list];
			list.splice(index,1);
			return {list}
		})
//		this.setState(() => ({
//			list
//		}))
//		this.setState({
//			list:list
//		})
	}
}

export default TodoList;
