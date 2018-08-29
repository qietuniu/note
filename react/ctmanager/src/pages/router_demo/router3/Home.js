import React, { Component } from 'react';
import { Link} from 'react-router-dom';

export default class Home extends Component{
    
    render(){
        return (
                <div>
                    <ul>
                        <li>
                            <Link to="/main">Home1</Link>
                        </li>
                        <li>
                            <Link to="/about">About2</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics3</Link>
                        </li>
                        <li>
                            <Link to="/nopage1">404</Link>
                        </li>
                        <li>
                            <Link to="/nopage2">404</Link>
                        </li>
                    </ul>
                    <hr />
                    {this.props.children}
                </div>
        );
    }
}
