import React, { Component } from 'react';
import { Card, Button, Form, Input, message, Icon, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, InputNumber, Upload } from 'antd';
import moment from 'moment';
import './form.less';

const Option = Select.Option;
const TextArea = Input.TextArea;;
class FormRegister extends Component{
    state = {}
    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values) => {
            if(!err){
                message.success(JSON.stringify(userInfo))
            }
        });
    }
    getBase64 = (img, callback) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => callback(reader.result));
      reader.readAsDataURL(img);
    }
    
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          this.getBase64(info.file.originFileObj, imageUrl => this.setState({
            userImg:imageUrl,
            loading: false,
          }));
        }
    }
    
    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol:{
                xs:24,
                sm:4
            },
            wrapperCol:{
                xs:24,
                sm:12
            }
        }
        const offsetLayout = {
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }
        const rowObject = {
             minRows: 4,maxRows:6
        }
        return (
            <div>
                <Card title="注册表单" className="card-wrap">
                    <Form layout="horizontal" >
                        <Form.Item label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator('userName',{
                                    initialValue:'',
                                    rules:[
                                        {
                                            required:true,
                                            message:"用户名不能为空"
                                        }
                                    ]
                                })(
                                    <Input placeholder="请输入用户名" />
                                )
                            }
                            
                        </Form.Item>
                        <Form.Item label="密码" {...formItemLayout}>
                            {
                                getFieldDecorator('userPwd',{
                                    initialValue:'',
                                    rules:[
                                        {
                                            required:true,
                                            message:"密码不能为空"
                                        }
                                    ]
                                })(
                                    <Input placeholder="请输入密码" />
                                )
                            }
                            
                        </Form.Item>
                        <Form.Item label="性别" {...formItemLayout}>
                            {
                                getFieldDecorator('sex',{
                                    initialValue:''
                                })(
                                    <Radio.Group >
                                        <Radio value='1'>男</Radio>
                                        <Radio value='2'>女</Radio>
                                    </Radio.Group>
                                )
                            }
                            
                        </Form.Item>
                        <Form.Item label="年龄" {...formItemLayout}>
                            {
                                getFieldDecorator('age',{
                                    initialValue:'18'
                                })(
                                    <InputNumber />
                                )
                            }
                            
                        </Form.Item>
                        <Form.Item label="当前状态" {...formItemLayout}>
                            {
                                getFieldDecorator('state',{
                                    initialValue:'2'
                                })(
                                    <Select>
                                        <Option value="1">小学</Option>
                                        <Option value="2">初中</Option>
                                        <Option value="3">高中</Option>
                                        <Option value="4">专科</Option>
                                        <Option value="5">本科</Option>
                                        <Option value="6">硕士</Option>
                                        <Option value="7">博士</Option>
                                    </Select>
                                )
                            }
                            
                        </Form.Item>
                       
                        <Form.Item label="爱好" {...formItemLayout}>
                            {
                                getFieldDecorator('favorite')(
                                    <Select mode="multiple">
                                        <Option value="1">唱歌</Option>
                                        <Option value="2">跳舞</Option>
                                        <Option value="3">弹琴</Option>
                                        <Option value="4">打篮球</Option>
                                        <Option value="5">打羽毛球</Option>
                                        <Option value="6">跑步</Option>
                                    </Select>
                                )
                            }
                            
                        </Form.Item>
                         <Form.Item label="是否已婚" {...formItemLayout}>
                            {
                                getFieldDecorator('isMarried',{
                                    valuePropName:'checked',
                                     initialValue:true
                                })(
                                    <Switch/>
                                    
                                )
                            }
                            
                        </Form.Item>
                         <Form.Item label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator('birthday',{
                                     initialValue:moment('2018-08-08')
                                })(
                                    <DatePicker
                                        showTime
                                        format='YYYY-MM-DD HH:mm:ss'
                                    />
                                    
                                )
                            }
                            
                        </Form.Item>
                        <Form.Item label="联系地址" {...formItemLayout}>
                            {
                                getFieldDecorator('address',{
                                    initialValue:'福建厦门'
                                })(
                                    <TextArea 
                                        autosize={rowObject}
                                        
                                    />
                                    
                                )
                            }
                            
                        </Form.Item>
                        <Form.Item label="早起时间" {...formItemLayout}>
                            {
                                getFieldDecorator('time')(
                                    <TimePicker />
                                    
                                )
                            }
                            
                        </Form.Item>
                        <Form.Item label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator('userImg')(
                                    <Upload 
                                        name="avatar"
                                        listType="picture-card"
                                        className="avatar-uploader"
                                        showUploadList={false}
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        onChange={this.handleChange}
                                    >
                                    {this.state.userImg?<img src = {this.state.userImg}/> :<Icon type="plus"/>}
                                    </Upload>
                                    
                                )
                            }
                            
                        </Form.Item>
                        <Form.Item {...offsetLayout}>
                            {
                                getFieldDecorator('userImg')(
                                    <Checkbox>我已阅读过<a>慕课协议</a></Checkbox>
                                    
                                )
                            }
                            
                        </Form.Item>
                        <Form.Item {...offsetLayout}>
                            <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>

        );
    }
}
export default Form.create()(FormRegister);