import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'; 
import './index.css';
import App from './App';
import TodoList from './TodoList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<HashRouter>
		<TodoList/>
	</HashRouter>
	,document.getElementById('root')
);
registerServiceWorker();
