import React, { Component } from 'react';
import Child from './Child';

export default class Life extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            count:0
        };
        this.handleAdd=this.handleAdd.bind(this);
    }
    
    render(){
        const style={
            padding:30
        }
        return (
            <div style={style}>
                <p>React生命周期介绍</p>
                <button onClick = {this.handleAdd}>bind点击一下</button>
                <button onClick = {this.handleClick}>箭头函数点击一下</button>
                <button onClick = {this.handleError}>错误点击一下</button>
                <p>{this.state.count}</p>
                <Child name={this.state.count}></Child>
            </div>
        )
    }
    /*声明一个箭头函数，不是立即执行函数。所以传入的是形参，不是实参，'this.props.groupKey'不是一个有效的变量名所以报错了。而箭头函数中的this，指向的是最近一层作用域，所以箭头函数的函数体可以直接使用this，而无需传入任何参数。*/
    handleAdd(){
        this.setState({
            count:parseInt(this.state.count+1)
        })
    }
    handleClick = ()=>{
        this.setState({
            count:parseInt(this.state.count+1)
        })
    }
    handleError(){
        this.setState({
            count:parseInt(this.state.count+1)
        })
    }
}
