import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory,  Link } from 'react-router'  //引入路由函数

import { Layout, Row, Col, Avatar, Input  } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

import SiderComponent from './sider'
import Tab from './tab'
import Step from './step'
import Button from './button'
import Icon from './icon'
import Tabble from './tabble'
import List from './list'

const { Header, Footer, Sider, Content  } = Layout;

export default class Demo1 extends Component {
    constructor (props) {
        super(props)
        this.state = {
            value: '1',
            valueTxt: '',
            tabArr: [
                {name:'tab1',key:'1',value: 'tab1'},
                {name:'tab2',key:'2',value: 'tab2'},
                {name:'tab3',key:'3',value: 'tab3'},
                {name:'tab4',key:'4',value:'tab4'},
                {name:'tab5',key:'5',value:'tab5'},
                {name:'tab6',key:'6',value:'tab6'},
                {name:'tab7',key:'7',value:'tab7'},
                {name:'tab8',key:'8',value:'tab8'},
            ]
        }
    }

    getValue (val,value) {
        this.setState ({
            value: val,
            valueTxt: value
        })
    }

    renderComponent =  () => {
        switch (this.state.value) {
            case '1':
                return <Tabble/>
                break;
            case '2':
                return  <Tab  data = {this.state.tabArr} />
                break;
            case '3':
                return  <Button />
                break;
            case '4':
                return  <Icon />
                break;
            case '5':
                return  <Step />
                break;
            case '6':
                return <List/>
                break
            default:
                return <h1>不好意思，<span style={{color:"red"}}>  {this.state.valueTxt} 暂时没有写组件， </span> 基本上都一样，</h1>
                break;
        }
    }

    render () {
        return (
            <div>
                <Layout>
                    <Header style={{backgroundColor:'red',color:'#fff',textAlign:'center',fontWeight:'bold'}}>
                    <Row>
                        <Col span={10}>
                            React + Antd 实践 demo
                        </Col>
                        <Col span={8}><Input placeholder="请输入你想要的......" /></Col>
                        <Col span={6}>
                            <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />  Hi-Sen
                        </Col>
                    </Row>
                    </Header>
                    <Layout>
                        <Sider style={{color:'#666'}}>
                            <SiderComponent 
                                getValue={this.getValue.bind(this)}
                            />
                        </Sider>
                        <Content style={{marginLeft:'5%',height:'90vh',overflow:'auto',textAlign:'center'}}>
                           {/* 路由跳转 */}
                            <h3>
                                <Link to='Demo2'>路由跳转Demo2</Link>
                            </h3>
                            <h3>
                                <Link to='Demo3/:123'>路由跳转Demo3 并传值123</Link>
                            </h3>
                            {this.renderComponent()}
                        </Content>
                    </Layout>
                    <Footer style={{backgroundColor:'#aaa',position:'fixed',bottom:0,width:'100vw',textAlign:'center',fontWeight:'bold'}}>
                        2018/05/31  - react + Ant Design - gitHub地址：https://github.com/Hi-Sen/React-Antd-demo-one
                    </Footer>
                </Layout>
            </div> 
        )
    }
}
