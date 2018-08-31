import React, {
    Component
} from 'react';
import { Card, Table, Modal, message, Button, Badge } from 'antd';
import axios from './../../axios';
import Utils from './../../utils/utils'

export default class HighTable extends Component {
    state = {
        dataSource2: []
    }
    params = {
        page:1
    }
    componentDidMount() {
    
        this.request();
    }

    //动态获取数据
    request = () => {
        let _this=this;
        axios.ajax({
            url: 'table/high/list',
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
                dataSource2: res.list
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
    handleDelete = ((item) => {
        let id = item.id;
        Modal.confirm({
            title:'确认',
            content:'您确认删除该条数据吗？',
            onOk:() => {
                message.success('删除成功');
                this.request();
            }
        })
    })
    
    handleChange = (pagination, filters, sorter) => {
        this.setState({
            sortOrder:sorter.order
        })
    }
    
    render() {
        const columns = [{
                title: 'id',
                width:80,
                key: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                width:80,
                key: 'userName',
                dataIndex: 'userName'
            },
            {
                title: '状态',
                width:80,
                key: 'state',
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
                width:80,
                key: 'sex',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1? '男': '女'
                }
            },
            {
                title: '爱好',
                width:80,
                key: 'interest',
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
                width:120,
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                width:120,
                key: 'address',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                width:80,
                key: 'time',
                dataIndex: 'time'
            }
        ]
        
        const columns2 = [{
                title: 'id',
                width:80,
                fixed:'left',
                key: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                width:80,
                fixed:'left',
                key: 'userName',
                dataIndex: 'userName'
            },
            {
                title: '状态',
                width:80,
                key: 'state',
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
                width:80,
                key: 'sex',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1? '男': '女'
                }
            },
            {
                title: '爱好',
                width:80,
                key: 'interest',
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
                width:120,
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width:120,
                key: 'birthday1',
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width:120,
                key: 'birthday2',
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width:120,
                key: 'birthday3',
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width:120,
                key: 'birthday4',
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width:120,
                key: 'birthday5',
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width:120,
                key: 'birthday6',
                dataIndex: 'birthday'
            }, {
                title: '生日',
                width:120,
                key: 'birthday7',
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width:120,
                key: 'birthday8',
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width:120,
                key: 'birthday9',
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width:120,
                key: 'birthday10',
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width:120,
                key: 'birthday11',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                width:120,
                fixed:'right',
                key: 'address',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                width:80,
                fixed:'right',
                key: 'time',
                dataIndex: 'time'
            }
        ]
        const columns3 = [{
                title: 'id',
                key: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName'
            },
            {
                title: '年龄',
                key: 'age',
                dataIndex: 'age',
                sorter:(a,b) =>{
                    return a.age -b.age;
                },
                sortOrder:this.state.sortOrder
            },
            {
                title: '状态',
                key: 'state',
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
                key: 'sex',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1? '男': '女'
                }
            },
            {
                title: '爱好',
                key: 'interest',
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
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time'
            }
        ]
        const columns4 = [{
                title: 'id',
                key: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName'
            },
            {
                title: '年龄',
                key: 'age',
                dataIndex: 'age'
            },
            {
                title: '状态',
                key: 'state',
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
                key: 'sex',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1? '男': '女'
                }
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: 'interest',
                render(interest) {
                    let config = {
                        '1':<Badge status ="success" text="唱歌"/>,
                        '2':<Badge status ="error" text='跳舞'/>,
                        '3':<Badge status ="default" text='弹琴'/>,
                        '4':<Badge status ="processing" text='打篮球'/>,
                        '5':<Badge status ="warning" text='跑步'/>,
                        '6':<Badge status ="success" text='桌球'/>,
                        '7':<Badge status ="success" text='爬山'/>,
                        '8':<Badge status ="success" text='踢足球'/>,
                    }
                    return config[interest];
                }
                
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time'
            },
            {
                title: '操作',
                render:(text,item)=>{
                    return <Button size="small" onClick={(item) => {this.handleDelete(item)} }>删除</Button>
                }
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
                <Card title="头部固定" >
                    <Table  
                            bordered
                            columns={columns} 
                            dataSource={this.state.dataSource2}
                            pagination = {false}
                            scroll={{y:240}}
                    />
                </Card>
                <Card title="左侧固定" style={{margin:'10px 0'}}>
                    <Table  
                            rowSelection={rowSelection}
                            columns={columns2} 
                            dataSource={this.state.dataSource2}
                            pagination = {false}
                            scroll={{x:2100}}
                    />
                </Card>
                <Card title="排序表格" >
                    <Table  
                            bordered
                            columns={columns3} 
                            dataSource={this.state.dataSource2}
                            pagination = {false}
                            onChange = {this.handleChange}
                    />
                </Card>
               <Card title="操作按钮" >
                    <Table  
                            bordered
                            columns={columns4} 
                            dataSource={this.state.dataSource2}
                            pagination = {false}
                            onChange = {this.handleChange}
                    />
                </Card>
            </div>
        )
    }
}