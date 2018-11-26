import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './static/style/common.less';
import Header from './component/Header';

export default class Common extends Component {
    render() {
        return (
            <div>
                <Row className="container">
                   <Header menuType = "second"/>            
                </Row>
                <Row>
                    {this.props.children}
                </Row>
            </div>
        );
    } 
}
