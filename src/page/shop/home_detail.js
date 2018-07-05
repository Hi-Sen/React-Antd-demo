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
                {/* 
                    度娘过来的方法， 接口返回一段HTML文本，渲染成HTML页面
                    https://www.cnblogs.com/hai-cheng/p/9264638.html    笔记
                */}
                <div dangerouslySetInnerHTML = {{__html:this.state.content.FullDescription}} ></div>
            </div>
        )
    }
    
    componentDidMount () {
        /*
            这样取值并不太严谨，由于只是实践 react 所以.....
            function getQueryString(name) {
            　　var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            　　var r = window.location.search.substr(1).match(reg);
            　　if (r != null) return unescape(r[2]); return null;
            }
            http://www.baidu.com/allTab.html?num=3
            取值：getQueryString("num")  num 对应路径的 key
            var num = getQueryString("num");     // 3
            笔记地址：
            http://www.cnblogs.com/hai-cheng/p/7243090.html
        */ 
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