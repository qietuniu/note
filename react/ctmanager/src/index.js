import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Life from './pages/demo/Life';
import Admin from './admin';
import Home from './pages/router_demo/router1/Home';
import Router1 from './pages/router_demo/router2/router';
import Router2 from './pages/router_demo/router3/router';
import Router from './router';
import './static/style/common.less'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
