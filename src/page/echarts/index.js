import React, { Component } from 'react';
import { Row, Col } from 'antd';

// 引入柱状图
import  'echarts/lib/chart/bar';
import  'echarts/lib/chart/line';
import  'echarts/lib/chart/pie';
import  'echarts/lib/chart/radar';

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

import Bar from './bar'
import Line from './line'
import Pie from './pie'
import Radar from './radar'

class EchartsTest extends Component {
    
    render() {
        return (
            <div>
                <Row>
                    <Col span={4}></Col>
                    <Col span={8}><Bar /></Col>
                    <Col span={1}></Col>
                    <Col span={5}><Pie /></Col>
                    <Col span={6}></Col>
                </Row>
                <Row style={{marginTop:50}}>
                    <Col span={4}></Col>
                    <Col span={8}><Line /></Col>
                    <Col span={1}></Col>
                    <Col span={6}><Radar /></Col>
                    <Col span={5}></Col>
                </Row>
            </div>
                
        );
    }
}

export default EchartsTest;