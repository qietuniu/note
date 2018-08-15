import React, { Component } from 'react';
import { HashRouter, Route, Link} from 'react-router-dom';

export default class Info extends Component{
    
    render(){
        return (
            <HashRouter>
                <div>
                           测试动态路由
                           {this.props.match.params.id}
                </div>
            </HashRouter>
        );
    }
}
