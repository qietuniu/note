import React, {
    Component
} from 'react';
import { Card, Table, Modal, message, Button } from 'antd';
import axios from './../../axios';
import Utils from './../../utils/utils'

export default class BasicTable extends Component {
    state = {
        dataSource2: []
    }
    params = {
        page:1
    }
    componentDidMount() {
        const dataSource = [{
                id: 0,
                userName: 'ct',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-20',
                address: '福建厦门中航紫金',
                time: '09:00'
            },
            {
                id: 1,
                userName: 'ct',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-20',
                address: '福建厦门中航紫金',
                time: '09:00'
            },
            {
                id: 2,
                userName: 'ct',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-20',
                address: '福建厦门中航紫金',
                time: '09:00'
            }
        ]
        dataSource.map((item,index) => {
            item.key = index;
        })
        this.setState({
            dataSource
        })
        this.request();
    }

    //动态获取数据
    request = () => {
        let _this=this;
        axios.ajax({
            url: 'table/list',
            data: {
                params: {
                    page: this.params.page
                }
            }
        }).then((res) => {
            res.list.map((item,index) => {
                item.key = index;
            })
            this.setState({
                dataSource2: res.list,
                selectedRowKeys:[],
                selectedRows:null,
                pagination:Utils.pagination(res,(current) => {
                    _this.params.page =current;
                    _this.request();
                })
            })
        })
    }
    
    onRowClick = (record,index) => {
        let selectKey = [index];
        Modal.info({
            title:"信息",
            content:`用户名:${record.userName},用户爱好:${record.interest}`
        });
        this.setState({
           selectedRowKeys:selectKey,
           selectedItem:record
        })
    }
    handleDelete = (() => {
        let  rows = this.state.selectedRows;
        let ids = [];
        rows.map((item) => {
            ids.push(item.id)
        })
        Modal.confirm({
            title:'删除提示',
            content:`确定删除这些数据吗？ ${ids.join(',')}`,
            onOk:()=>{
                message.success('删除成功！');
                this.request();
            }
        })
    })
    render() {
        const columns = [{
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1':'小学',
                        '2':'初中',
                        '3':'高中',
                        '4':'专科',
                        '5':'本科',
                        '6':'硕士',
                        '7':'博士'
                    }
                    return config[state];
                }
                
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1? '男': '女'
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                render(interest) {
                    let config = {
                        '1':'唱歌',
                        '2':'跳舞',
                        '3':'弹琴',
                        '4':'打篮球',
                        '5':'跑步',
                        '6':'桌球',
                        '7':'爬山',
                        '8':'踢足球',
                    }
                    return config[interest];
                }
                
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                dataIndex: 'time'
            }
        ]
        const {selectedRowKeys} = this.state;
        const rowSelection = {
            type:'radio',
            selectedRowKeys
        }
        const rowCheckSelection = {
            type:'checkbox',
            selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows) => {
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
        }
        return(
            <div>
                <Card title="基础表格">
                    <Table  
                            bordered
                            columns={columns} 
                            dataSource={this.state.dataSource}
                            pagination = {false}
                    />
                </Card>
                <Card title="动态数据渲染表格-Mock" style={{margin:'10px 0'}}>
                    <Table  
                            bordered
                            columns={columns} 
                            dataSource={this.state.dataSource2}
                            pagination = {false}
                    />
                </Card>
                <Card title="Mock-单选" style={{margin:'10px 0'}}>
                    <Table  
                            rowSelection={rowSelection}
                            columns={columns} 
                            dataSource={this.state.dataSource2}
                            pagination = {false}
                            onRow={(record,index) => {
                                return {
                                  onClick: () => {
                                      this.onRowClick(record,index);
                                  }
                                };
                            }}
                    />
                </Card>
                <Card title="Mock-复选" style={{margin:'10px 0'}}>
                    <div style={{marginBottom:10}}>
                        <Button onClick={this.handleDelete}>删除</Button>
                    </div>
                    <Table  
                            rowSelection={rowCheckSelection}
                            columns={columns} 
                            dataSource={this.state.dataSource2}
                            pagination = {false}
                    />
                </Card>
                <Card title="Mock-分页" style={{margin:'10px 0'}}>
                    <Table  
                            columns={columns} 
                            dataSource={this.state.dataSource2}
                            pagination = {this.state.pagination}
                    />
                </Card>
            </div>
        )
    }
}