import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Icon} from 'antd';
import { Divider } from 'antd';

export default class IconLogo extends React.Component {
    render () {
        return (
            <div style={{marginTop:50}}>
                <Icon type="plus-square" /> <br/>
                <Icon type="info-circle" /><br/>
                <Icon type="minus-square-o" /><br/>
                <Icon type="check-circle-o" /><br/>
                <Icon type="bar-chart" /><br/>
                <Icon type="credit-card" /><br/>
                <Icon type="up" /><br/>
                <Icon type="down-circle" /><br/>
                <Icon type="backward" /><br/>
                <Icon type="arrow-down" /><br/>
                <Icon type="swap" /><br/>
            </div>

        )
    }
}   