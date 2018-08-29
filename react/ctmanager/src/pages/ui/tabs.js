import React, { Component } from 'react';
import { Card, Button, Tabs, message, Icon } from 'antd';
import './ui.less';

export default class Tab extends Component{
    newTabIndex = 0;
    callback = (key) => {
        message.info("hi,您选择了"+key);
    }
    componentWillMount() {
        const panes = [
            {
                title:'tab 1',
                content:'react',
                key:"1"
            },
            {
                title:'tab 2',
                content:'vue',
                key:"2"
            },
            {
                title:'tab 3',
                content:'angularjs',
                key:"3"
            }
        ]
        this.setState({
            panes,
            activeKey:panes[0].key.toString()
        })
    }
    onChange = (activeKey) => {
        this.setState({ activeKey });
    }
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }
    add = () => {
       const panes = this.state.panes;
       const activeKey = `newTab${this.newTabIndex++}`;
       panes.push({ title: activeKey, content: 'New Tab Pane', key: activeKey });
       this.setState({ panes, activeKey });
    }

    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });    
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        
        if (lastIndex >= 0 && activeKey === targetKey) {
           activeKey = panes[lastIndex].key;
        }        
        this.setState({ panes, activeKey });
    }
    
    render(){
        
        return (
            <div>
                <Card title="tab页签" className="card-wrap">
                   <Tabs  defaultActiveKey="1" onChange={this.callback}>
                        <Tabs.TabPane tab="Tab 1" key="1">react</Tabs.TabPane>
                        <Tabs.TabPane tab="Tab 2" key="2" disabled>vue</Tabs.TabPane>
                        <Tabs.TabPane tab="Tab 3" key="3">angularjs</Tabs.TabPane>
                   </Tabs>
                </Card>
                <Card title="tab页签带图" className="card-wrap">
                   <Tabs  defaultActiveKey="1" onChange={this.callback}>
                        <Tabs.TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">react</Tabs.TabPane>
                        <Tabs.TabPane tab={<span><Icon type="edit" />Tab 2</span>} key="2">vue</Tabs.TabPane>
                        <Tabs.TabPane tab={<span><Icon type="delete" />Tab 3</span>} key="3">angularjs</Tabs.TabPane>
                   </Tabs>
                </Card>
                <Card title="动态循环" className="card-wrap">
                    <Tabs 
                          onChange={this.onChange}
                          activeKey = {this.state.activeKey}
                          type="editable-card"
                          onEdit = {this.onEdit}
                    >
                        {
                            this.state.panes.map((panel) => {
                                return <Tabs.TabPane
                                            tab={panel.title}
                                            key={panel.key}>
                                            {panel.content}
                                </Tabs.TabPane>
                            })
                        }
                    </Tabs>
                </Card>
                
            </div>

        );
    }
}
