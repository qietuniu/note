import React, {
	Component
} from 'react';

class ToDoListUI extends Component {
	
	return (
		<div style={{margin:'10px'}}>
				<div >
					<Input value={this.props.inputValue}
							placeholder = 'todo info' 
							style={{width:'300px',marginRight:'10px'}}
							onChange={this.props.handleInputChange}/>
					<Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
				</div>
				<List
				  style={{marginTop:'10px',width:"375px"}}
			      bordered
			      dataSource={this.state.list}
			      renderItem={(item,index) => (<List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>)}
			    />
			</div>
	)
}