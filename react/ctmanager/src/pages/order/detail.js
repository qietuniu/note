import React, { Component } from 'react';
import { Card, Button, Table, Form, Select, Modal, DatePicker, message } from 'antd'
import axios from '../../axios'
import Utils from '../../utils/utils'
import BaseForm from '../../component/BaseForm'
import { escapeComponent } from 'uri-js';
import './detail.less'
export default class OrderDetail extends Component{
  state = {
    orderInfo:{},
    map: ''
  }
  componentDidMount() {
    let orderId = this.props.match.params.orderId
    if( orderId ) {
      this.getDetailInfo(orderId)
    }
  }
  getDetailInfo = (orderId) => {
    axios.ajax({
      url:'order/detail',
      data:{
        params:{
          orderId: orderId
        }
      }
    }).then((res) => {
      this.setState({
        orderInfo:res
      })
      this.renderMap(res)
    })
  }
  renderMap = (res) => {
    this.map = new window.BMap.Map("orderDetailMap")
    this.addMapControl()
    this.drawBikeRoute(res.position_list)
    this.drawServiceArea(res.area)
  }
  // 绘制行驶路线
  drawBikeRoute = (positionList)=>{
    let map = this.map
    let startPoint = ''
    let endPoint = ''
    if(positionList.length > 0){
      let first = positionList[0]
      let last = positionList[positionList.length-1]
      startPoint = new window.BMap.Point(first.lon, first.lat)
      let startIcon = new window.BMap.Icon('/assets/start_point.png', new window.BMap.Size(36, 42),{
        imageSize: new window.BMap.Size(36, 42),
        anchor: new window.BMap.Size(36, 42)
      })
      let startMarker = new window.BMap.Marker(startPoint, {icon: startIcon})

      endPoint = new window.BMap.Point(last.lon, last.lat)
      let endIcon = new window.BMap.Icon('/assets/end_point.png', new window.BMap.Size(36, 42),{
        imageSize: new window.BMap.Size(36, 42),
        anchor: new window.BMap.Size(36, 42)
      })
      let endMarker = new window.BMap.Marker(endPoint, {icon: endIcon})

      this.map.addOverlay(startMarker)
      this.map.addOverlay(endMarker)

      // 连接路线图
      let trackPoint = []
      for(let i=0; i<positionList.length; i++){
        let point = positionList[i]
        trackPoint.push(new window.BMap.Point(point.lon,point.lat))
      }
      let polyline = new window.BMap.Polyline(trackPoint,{
        strokeColor: '#ff0',
        stokeWeight:3
      })
      this.map.addOverlay(polyline)
      let polygon = new window.BMap.Polygon(trackPoint, {
        strokeColor: '#f00',
        stokeWeight:4,
        strokeOpacity:1,
        fillrColor:'#ff8605',
        fillOpcity:.2
      })
      this.map.addOverlay(polygon)
      
      this.map.centerAndZoom(endPoint , 11)
    }
  }
  drawServiceArea = (area)=>{
    // 连接路线图
    let trackPoint = []
    for(let i=0; i<area.length; i++){
      let point = area[i]
      trackPoint.push(new window.BMap.Point(point.lon,point.lat))
    }
    let polygon = new window.BMap.Polygon(trackPoint, {
      strokeColor: '#f00',
      stokeWeight:4,
      strokeOpacity:1,
      fillrColor:'#ff8605',
      fillOpcity:.2
    })
    this.map.addOverlay(polygon)
  }
  // 添加地图控件
  addMapControl = () => {
    let map = this.map
    this.map.addControl(new window.BMap.NavigationControl({
      anchor: window.BMAP_ANCHOR_TOP_RIGHT
    }));    
    this.map.addControl(new window.BMap.ScaleControl({
      anchor: window.BMAP_ANCHOR_TOP_RIGHT
    })); 
  }
  render() {
    return (
      <div>
        <Card>
          <div id="orderDetailMap" className="order-map"></div>
          <div className="detail-items">
            <div className="item-title">基础信息</div>
            <ul className="detail-form">
              <li >
                <div className="detail-form-left">用车模式</div>
                <div className="detail-form-content">{this.state.orderInfo.mode ==1?'服务器':'停车点'}</div>
              </li>
              <li >
                <div className="detail-form-left">订单编号</div>
                <div className="detail-form-content">{this.state.orderInfo.order_sn}</div>
              </li>
              <li >
                <div className="detail-form-left">车辆编号</div>
                <div className="detail-form-content">{this.state.orderInfo.bike_sn}</div>
              </li>
              <li >
                <div className="detail-form-left">用户姓名</div>
                <div className="detail-form-content">{this.state.orderInfo.user_name}</div>
              </li>
              <li >
                <div className="detail-form-left">手机号码</div>
                <div className="detail-form-content">{this.state.orderInfo.mobile}</div>
              </li>
            </ul>
          </div>
          <div className="detail-items">
            <div className="item-title">行驶轨迹</div>
            <ul className="detail-form">
              <li >
                <div className="detail-form-left">行程起点</div>
                <div className="detail-form-content">{this.state.orderInfo.start_location}</div>
              </li>
              <li >
                <div className="detail-form-left">行程终点</div>
                <div className="detail-form-content">{this.state.orderInfo.end_location}</div>
              </li>
              <li >
                <div className="detail-form-left">行驶里程</div>
                <div className="detail-form-content">{this.state.orderInfo.distance}</div>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    )
  }
}