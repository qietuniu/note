import React, { Component } from 'react';
import { Card, Button, Spin, Icon, Alert, message} from 'antd';
import './ui.less';

export default class Messages extends Component{
    openMessage = (type) => {
        message[type]("修改成功");
    }
    render(){
        
        return (
            <div>
                <Card title="全局提示框" className="card-wrap">
                    <Button type="primary" onClick={() => {this.openMessage("success")}}>success</Button>
                   <Button type="primary" onClick={() => {this.openMessage("info")}}>info</Button>
                   <Button type="primary" onClick={() => {this.openMessage("warning")}}>warning</Button>
                   <Button type="primary" onClick={() => {this.openMessage("error")}}>error</Button>
                   <Button type="primary" onClick={() => {this.openMessage("loading")}}>Loading</Button>
                </Card>
                
            </div>

        );
    }
}
