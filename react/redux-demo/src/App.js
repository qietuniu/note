import React, { Component } from 'react'

class App extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        const store = this.props.store
        const num = store.getState()
        const addGun = this.props.addGun
        const removeGun = this.props.removeGun
        const addGunAsync = this.props.addGunAsync
        return (
            <div>
                <h1>机关枪{num}</h1>
                <button onClick={ ()=>store.dispatch(addGun()) }>申请武器</button>
                <button onClick={ ()=>store.dispatch(removeGun()) }>上交武器</button>
                <button onClick={ ()=>store.dispatch(addGunAsync()) }>拖两天再申请</button>
            </div>
            
        )
    }
}

export default App