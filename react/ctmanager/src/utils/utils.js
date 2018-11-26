import React from 'react';
import { Select } from 'antd'
const Option = Select.Option;

export default {
    formateDate(time){
        if(!time)return '';
        let date = new Date(time);
        return date.getFullYear()+'-'+date.getMonth()+1+'-'+date.getDay() + ' '+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+' '
    },
    pagination(data,callback){
        return {
            onChange:(current) => {
                callback(current)
            },
            current:data.page,
            pageSize:data.page_size,
            total:data.total_count,
            showTotal:() =>{
                return `共${data.total_count}条`
            },
            showQuickJumper:true            
        }
    },
    getOptionList(data){
        if(!data){
            return [];
        }
        let options = [] //[<Option value="0" key="all_key">全部</Option>];
        data.map((item)=>{
            options.push(<Option value={item.id} key={item.id}>{item.name}</Option>)
        })
        return options;
    },
    
}
