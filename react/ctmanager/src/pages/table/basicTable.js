import React, {
    Component
} from 'react';
import { Card, Table } from 'antd';
import axios from 'axios';
export default class BasicTable extends Component {
    state = {
        dataSource2: []
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
        this.setState({
            dataSource
        })
        this.request();
    }

    //动态获取数据
    request = () => {
        let baseUrl = "https://www.easy-mock.com/mock/5b852eec719ded7825291f74/mockapi/";
        axios.get(baseUrl + 'table/list1').then((res) => {
            if(res.status == '200' && res.data.code == 0) {
                this.setState({
                    dataSource2: res.data.result.list
                })
            }
        })
    }

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
                dataIndex: 'state'
            },
            {
                title: '性别',
                dataIndex: 'sex'
            },
            {
                title: '爱好',
                dataIndex: 'interest'
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
                <Card title="动态数据渲染表格" style={{margin:'10px 0'}}>
                    <Table  
                            bordered
                            columns={columns} 
                            dataSource={this.state.dataSource2}
                            pagination = {false}
                    />
                </Card>
            </div>
        )
    }
}