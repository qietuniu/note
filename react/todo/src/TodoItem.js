import React, { Component } from 'react';

class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	render() {
		const { content } = this.props; //解构赋值
		return <div onClick={this.handleClick}>{content}</div>
	}
	handleClick() {
		const { deleteItem, index } = this.props;
		//		this.props.deleteItem(this.props.index);
		deleteItem(index)
	}
}

export default TodoItem;