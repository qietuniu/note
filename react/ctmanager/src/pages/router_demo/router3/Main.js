import React, { Component } from 'react';
import { HashRouter, Route, Link} from 'react-router-dom';

export default class Main extends Component{
    
    render(){
        return (
            <HashRouter>
                <div>
                    this is main page<br/>
                    <Link to="/main/test-id">嵌套路由1</Link><br/>
                    <Link to="/main/456">嵌套路由2</Link><br/>
                    <hr/>
                    {this.props.children}
                </div>
            </HashRouter>
        );
    }
}
