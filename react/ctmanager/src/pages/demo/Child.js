import React, { Component } from 'react';

export default class Child extends Component{
    
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        console.log("componentWillMount");
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    componentWillReceiveProps(newProps){
        console.log("componentWillReceiveProps:" + newProps.name);
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true;
    }
    componentWillUpdate(){
        console.log("componentWillUpdate");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    render(){
        return (
            <div>
                <hr></hr>
                <p>{this.props.name}</p>
            </div>
        )
    }
}
