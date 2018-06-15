
/**
 * 全局公告
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'antd';

export default class App extends React.Component {
    state = { visible: false }
    showModal = () => {
        this.setState({
        visible: true,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
        visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
        visible: false,
        });
    }
    render() {
        return (
        <div>
            <span onClick={this.showModal}>我的通知 ... </span>
            <Modal
            title="本人公告"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            >
            <p>1, react + Ant Design 实践 demo</p>
            <p>2, 项目仅供欣赏，源码请访问本人 GitHub</p>
            <p>3, https://github.com/Hi-Sen/React-Antd-demo-one.git</p>
            </Modal>
        </div>
        );
    }
}