import React, { Component } from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { counter, addGun, removeGun, addGunAsync,  } from './index.redux'

const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
    
))

function render() {
    ReactDom.render(<App store={store} addGun={addGun} removeGun={removeGun} addGunAsync ={addGunAsync} />, document.getElementById('root'))
}
render()
store.subscribe(render)
