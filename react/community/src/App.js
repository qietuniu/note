import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';
//index.js:2178 Warning: You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored中间空着的话会报错
class App extends Component {
  render() {
    return (
      <Provider store={store}>
	      		<BrowserRouter>
		      		<div>
		      			<Header/> 
		      			<Route path = '/' exact  component={Home} ></Route>
		      			<Route path = '/login' exact  component={Login} ></Route>
		      			<Route path = '/detail/:id' exact  component={Detail} ></Route>
		      			<Route path = '/write' exact  component={Write} ></Route>
		      		</div>	      			
	      		</BrowserRouter>	
      </Provider>
      	

    );
  }
}

export default App;
