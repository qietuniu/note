import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './index.less';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                版权所有：ct（推荐使用谷歌浏览器，可以获得更佳操作页面体验） 技术支持：切图妞
            </div>
        )
    } 
}