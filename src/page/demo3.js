import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';


export default class Demo1 extends Component {
    constructor (props) {
        super(props)
        this.state = {
            num: '我是demo3'
        }
    }
    render () {
        return (
            <div style={{lineHeight:5,backgroundColor:'red',textAlign:'center',fontSize:20,color:'#fff'}}>
                {this.state.num}<br/>
                传值为：{this.props.params.id} 看对应URL
            </div>
        )
    }
}
