import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './home.css'
import { Carousel,Row, Col,Button  } from 'antd';

export default class TabbleAll extends React.Component {
   
    render () {
        return (
                <div className = "shopList">
                    {
                        this.props.storeArr.map((item,index) => {
                            return  <Row 
                                    key = {index}
                                    style={{
                                            marginBottom:'10px',
                                            backgroundColor:'#fff',
                                            height:'176px'
                                    }}>
                                        <Col span={6}>
                                            <img style={{width:'100%'}} src={item.Picture} alt=""/>
                                        </Col>
                                        <Col span={12} style={{
                                            textAlign:'left',
                                            paddingLeft:50,
                                            lineHeight:'24px',
                                            marginTop:'30px'
                                        }}>
                                            <div>{item.Name}</div>
                                            <div>原价：{item.OldPointPrice}</div>
                                            <div>现价：{item.PointPrice}</div>
                                            <div>销量：{item.SoldNum}</div>
                                        </Col>
                                        <Col span={6} style={{
                                            marginTop:'130px'
                                        }}>
                                            <Button type="primary" onClick = {() => {
                                                this.props.callback ? this.props.callback(item.ID) : ''
                                            }}>查看商品详情</Button>
                                        </Col>
                                    </Row>
                        })
                    }
                </div>
        )
    }
}