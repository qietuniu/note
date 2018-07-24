import React from 'react'; 
import './TodoList.css';

class  Todolist extends React.Component {
    constructor(props){
        super(props);
        this.state={
            items:[]
        };
        // 点击事件里 setState 时会使 this 重新定义,需要提前给点击事件的函数绑定 this
        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {  
        console.error("this= ", this);
        var itemArray = this.state.items;
        itemArray.push({
            text: this.target.value,
            key: Date.now()
        });
        // this.setState.items=itemArray 写法不更新组件
        this.setState({
            items: itemArray
        });
        //清空输入框,并获得焦点
        this.target.value = "";
        this.target.focus();
        // console.error(this.state.items);
        e.preventDefault();
    }

    render() {
        return (
        <div className="todoListMain">
          <div className="header">
            <form onSubmit={this.addItem}>
              <input ref={(a)=>{this.target=a}} placeholder="请输入代办项"/><button type="submit">添加</button>
            </form>
          </div>

          <TodoItems entries={this.state.items} ></TodoItems>
        </div>
      );
    }
}


class TodoItems extends React.Component {
    constructor(props){
        super(props);
        // console.error("entries = "+this.props.entries);
    }

    createTasks(item) {
        return (
            <li>{item.text}</li>
        );
    }

    render(){
        var todoEntries=this.props.entries;
		var listItems = todoEntries.map(this.createTasks);
        return(
            <ul className="theList">{listItems}</ul>
        );
    }
}

export default Todolist;