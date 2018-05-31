import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';


export default class Demo1 extends Component {
    constructor (props) {
        super(props)
        this.state = {
            num: '我是demo2'
        }
    }
    render () {
        return (
            <div style={{lineHeight:5,backgroundColor:'red',textAlign:'center',fontSize:20,color:'#fff'}}>
                {this.state.num}
            </div>
        )
    }
}
