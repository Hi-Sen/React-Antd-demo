import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './home.css'
import { Carousel,Row, Col,Button, Spin   } from 'antd';


export default class TabbleAll extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            content:''
        }
    }
      
    render () {
        return (
            <div className="homeSty">
                <div dangerouslySetInnerHTML = {{__html:this.state.content.FullDescription}} ></div>
            </div>
        )
    }
    
    componentDidMount () {
        let id =document.location.hash.split('=')[1]
        this.getDetail(id)
    }

    // 详情方法
    getDetail (id) {
        let params = {
            "ID": id,
            "SeckillPointPrice": 0
        }
        window.Axios.post(window.ApiName.ApiGetPrdouctByID,params).then( res => {
            this.setState({
               content: res.Data,
            })
            console.log(res)
        }).catch( err => {
            console.log(`${err}`)
        })
    }

}