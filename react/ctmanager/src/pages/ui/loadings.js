import React, { Component } from 'react';
import { Card, Button, Spin, Icon, Alert} from 'antd';
import './ui.less';

export default class Loadings extends Component{
    render(){
        const icon = <Icon type="loading"  style={{fontSize:30}}/>
        return (
            <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin size="small" />
                    <Spin size="default" style={{margin:'0 20px'}}/>
                    <Spin size="large" />
                    
                    <Spin indicator = {icon}  style={{marginLeft:20}}/>
                </Card>
                <Card title="内容遮罩" className="card-wrap">
                    <Alert
                        message="react"
                        description="内容遮罩"
                        type="info">
                    
                    </Alert>
                    <Spin>
                        <Alert
                            message="react"
                            description="内容遮罩"
                            type="warning">
                        
                        </Alert>
                    </Spin>
                    <Spin tip="加载中…">
                        <Alert
                            message="react"
                            description="内容遮罩"
                            type="warning">
                        
                        </Alert>
                    </Spin>
                    <Spin indicator={icon}>
                        <Alert
                            message="react"
                            description="内容遮罩"
                            type="success">
                        
                        </Alert>
                    </Spin>
                </Card>
            </div>

        );
    }
}
