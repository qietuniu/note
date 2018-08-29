import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd';
import './ui.less';
export default class Buttons extends Component{
    state = {
        showModal1:false,
        showModal2:false,
        showModal3:false,
        showModal4:false,
    };
    handleOpen = (type) => {
        this.setState({
            [type]:true
        })
    };
    handleConfirm = (type) => {
        Modal[type]({
            title:'确认？',
            content:'你确认你学会了react了吗？',
            onOk(){
                console.log("ok")
            },
            onCancel(){
                console.log("onCancel")
            }
            
        })
    };
    render(){
        return (
            <div>
                <Modal title ="React"
                       visible={this.state.showModal1}
                       onCancel={() => {
                            this.setState({
                                showModal1:false
                            })
                        }}
                >
                    <p>模态框演示</p>
                </Modal>
                <Modal title ="自定义页脚"
                       visible={this.state.showModal2}
                       okText = "好的"
                       cancelText= "算了"
                       onCancel={() => {
                            this.setState({
                                showModal2:false
                            })
                        }}
                >
                    <p>自定义页脚模态框演示</p>
                </Modal>
                <Modal title ="顶部20px"
                       style = {{top:20}}
                       visible={this.state.showModal3}
                       
                       onCancel={() => {
                            this.setState({
                                showModal3:false
                            })
                        }}
                >
                    <p>顶部20px模态框演示</p>
                </Modal>
                <Modal title ="水平垂直居中"
                       wrapClassName = "vertical-center-modal"
                       visible={this.state.showModal4}
                       
                       onCancel={() => {
                            this.setState({
                                showModal4:false
                            })
                        }}
                >
                    <p>水平垂直居中模态框演示</p>
                </Modal>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleOpen("showModal1")}>Open</Button>
                    <Button type="primary" onClick={() => this.handleOpen("showModal2")}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleOpen("showModal3")}>顶部20px</Button>
                    <Button type="primary" onClick={() => this.handleOpen("showModal4")}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleConfirm("confirm")}>confirm</Button>
                    <Button type="primary" onClick={() => this.handleConfirm("info")}>Info</Button>
                    <Button type="primary" onClick={() => this.handleConfirm("success")}>success</Button>
                    <Button type="primary" onClick={() => this.handleConfirm("warning")}>warning</Button>
                </Card>
            </div>

        );
    }
}
