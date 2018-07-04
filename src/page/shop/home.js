import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './home.css'
import { Carousel } from 'antd';

export default class TabbleAll extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            bannerArr : []
        }
    }
      
    render () {
        return (
            <div className="homeSty">   
                <Carousel autoplay>
                {
                    this.state.bannerArr.map((item,index) => {
                        return  <div key={index}>
                                    <img className='imgWidth' src = {item.Picture} alt=""/>
                                </div>
                    })
                }
                </Carousel>
            </div>
        )
    }

    // 测试请求
    componentDidMount () {
        window.Axios.get(window.ApiName.ApiGetHomePage,'').then( res => {
            this.setState({
               bannerArr : res.Data.BannerList
            })
            console.log(res)
        }).catch( err => {
            console.log(`${err}`)
        })
    }
}