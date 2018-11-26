import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from './index.redux'
class App extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>机关枪{this.props.num}</h1>
                <button onClick={this.props.addGun}>申请武器</button>
                <button onClick={this.props.removeGun}>上交武器</button>
                <button onClick={this.props.addGunAsync}>拖两天再申请</button>
            </div>
            
        )
    }
}
const mapStateToProps = (state) => {
	return {num: state}
}
const actionCreators = { addGun, removeGun, addGunAsync } 

App = connect( mapStateToProps, actionCreators )(App)
export default App