import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';

//index.js:2178 Warning: You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored中间空着的话会报错
class App extends Component {
  render() {
    return (
      <Provider store={store}>
	      <div>
	      	<Header/>  
	      		<BrowserRouter>
		      		<div>
		      			<Route path = '/' exact  component={Home} ></Route>
		      			<Route path = '/detail' exact  component={Detail} ></Route>
		      		</div>	      			
	      		</BrowserRouter>
	      </div>    	
      </Provider>
      	

    );
  }
}

export default App;
