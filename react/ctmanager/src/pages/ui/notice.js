import React, { Component } from 'react';
import { Card, Button, Spin, Icon, Alert, notification} from 'antd';
import './ui.less';

export default class Notice extends Component{
    
    openNotification = (type,direction) => {
        if(direction){
            notification.config({
                placement:direction
            })
        }
        notification[type]({
           message:'react',
           description:'后台管理系统',           
        });
    }
    render(){
        
        return (
            <div>
                <Card title="通知提醒框" className="card-wrap">
                   <Button type="primary" onClick={() => {this.openNotification("success")}}>success</Button>
                   <Button type="primary" onClick={() => {this.openNotification("info")}}>info</Button>
                   <Button type="primary" onClick={() => {this.openNotification("warning")}}>warning</Button>
                   <Button type="primary" onClick={() => {this.openNotification("error")}}>error</Button>
                </Card>
                
                 <Card title="通知提醒框" className="card-wrap">
                   <Button type="primary" onClick={() => {this.openNotification("success","topLeft")}}>success</Button>
                   <Button type="primary" onClick={() => {this.openNotification("info","topRight")}}>info</Button>
                   <Button type="primary" onClick={() => {this.openNotification("warning","bottomLeft")}}>warning</Button>
                   <Button type="primary" onClick={() => {this.openNotification("error","bottomRight")}}>error</Button>
                </Card>
                
            </div>

        );
    }
}
