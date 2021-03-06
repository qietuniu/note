import React, { Component } from 'react';
import { Card, Button, Form, Input, message, Icon, Checkbox } from 'antd';
import './form.less';

class FormLogin extends Component{
    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values) => {
            if(!err){
                message.success(`${userInfo.userName},恭喜你已经登录!密码为:${userInfo.userPwd}`)
            }
        });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card title="登录行内表单" className="card-wrap">
                    <Form layout="inline">
                        <Form.Item>
                            <Input placeholder="请输入用户名" />
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="请输入密码" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" >登录</Button>
                        </Form.Item>
                    </Form>
                </Card>
                <Card title="登录水平表单" className="card-wrap">
                    <Form layout="horizontal" style={{width:300}}>
                        <Form.Item>
                            {
                                getFieldDecorator('userName',{
                                    initialValue:'admin',
                                    rules:[
                                        {
                                            required:true,
                                            message:"用户名不能为空"
                                        },
                                        {
                                            min:5,max:10,
                                            message:"长度为5-10位"
                                        },
                                        {
                                            pattern:new RegExp('^\\w+$','g'),
                                            message:"用户名必须为字母或者数字"
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="user"/>} placeholder="请输入用户名" />
                                )
                            }
                            
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('remember',{
                                    initialValue:'123456',
                                    rules:[]
                                })(
                                    <Input prefix={<Icon type="lock"/>} placeholder="请输入密码" />
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('userPwd',{
                                    valuePropName:'checked',
                                    initialValue:true
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href="#" style={{float:"right"}}>忘记密码</a>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>

        );
    }
}
export default Form.create()(FormLogin);