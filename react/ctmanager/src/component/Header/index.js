import React, { Component } from 'react';
import Util from '../../utils/utils';
import axios from '../../axios';
import { Row, Col } from 'antd';
import './index.less';

export default class Header extends Component {
    state={}
    componentWillMount() {
        this.setState({
            userName:"世子"
        })
        setInterval(() => {
           let sysTime = Util.formateDate(new Date().getTime());
           this.setState({
               sysTime
           })
        },1000)
        this.getWeatherApiData();
    }
    getWeatherApiData(){
        let city ="厦门";
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res) => {
            if(res.status === "success"){
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })

            }
        })
        
    }
    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span='24'>
                        <span>hi, {this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                    
                <Row className="breadcrumb">
                    <Col span='4' className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span='20' className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <img className="weather-img" src={this.state.dayPictureUrl} />
                        <span className="weather-detail">
                            
                            {this.state.weather}
                        </span>
                        
                    </Col>
                </Row>
            </div>
        )
    } 
}
