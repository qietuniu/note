import React, { Component } from 'react';
import { Button, List } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
class App extends Component{
    render(){
        const boss = 'ct'
        return (
            <div>
                <h1>{boss}团</h1>
                <First boss='世子'></First>
            </div>
            
        )
    }
}

class First  extends Component{
    constructor(props) {
      super(props)
      this.state = {
          solders:['鼠', '牛', '虎']
      }
      this.addSolder = this.addSolder.bind(this)
    }
    componentWillMount() {
        console.log("组件马上加载")
    }
    componentDidMount() {
        console.log("组件加载完成")
    }
    addSolder(){
        this.setState({
            solders:[...this.state.solders,'动物'+ Math.random()]
        })
    }
    render(){
        console.log("正在加载")
        return (
            <div>
                <h2>{this.props.boss}营</h2>
                <Button type="primary" onClick = {() => this.addSolder()}>新兵入伍</Button>
                <List renderHeader={() => '士兵列表'} className='my-list'>
                    {this.state.solders.map( v => {
                        return <List.Item key={v}> {v} </List.Item>
                    })}
                </List>
                <Second boss='彬彬'></Second>
            </div>
            
        )
    }
}
function Second(props) {
    return <h3>{props.boss}连</h3>
}
export default App