import React, { Component } from 'react';
import { Input,Button,List  } from 'antd';

const ToDoListUI = (props) => {
	return (
			<div style={{margin:'10px'}}>
				<div >
					<Input value={props.inputValue}
							placeholder = 'todo info' 
							style={{width:'300px',marginRight:'10px'}}
							onChange={props.handleInputChange}/>
					<Button type="primary" onClick={props.handleBtnClick}>提交</Button>
				</div>
				<List
				  style={{marginTop:'10px',width:"375px"}}
			      bordered
			      dataSource={props.list}
			      renderItem={(item,index) => (<List.Item onClick={(index) => {props.handleItemDelete(index)}}>{item}</List.Item>)}
			    />
			</div>
	)
}

//class ToDoListUI extends Component {
//	render() {
//		return (
//			<div style={{margin:'10px'}}>
//				<div >
//					<Input value={this.props.inputValue}
//							placeholder = 'todo info' 
//							style={{width:'300px',marginRight:'10px'}}
//							onChange={this.props.handleInputChange}/>
//					<Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//				</div>
//				<List
//				  style={{marginTop:'10px',width:"375px"}}
//			      bordered
//			      dataSource={this.props.list}
//			      renderItem={(item,index) => (<List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
//			    />
//			</div>
//		)
//	}
//}

export default ToDoListUI;