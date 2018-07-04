import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { browserHistory,  Link } from 'react-router'  //引入路由函数

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Sider extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			key: 1
		}
	}
    handleClick = (e) => {
		console.log(e)
		this.props.getValue(e.key,e.item.props.children); 
	}
    render () {
				return (
					<Menu
						onClick={this.handleClick}
						onChange = {this.getValue}
						style={{ width: 256,height:'90vh',overflow: 'auto'}}
						defaultSelectedKeys={['1']}
						defaultOpenKeys = {['sub1']}
						mode="inline"
					>

						<SubMenu key="sub1" title={<span><Icon type="smile-o" /><span>Antd 常用UI组件</span></span>}>
								<Menu.Item key="1">
									<Link to = {'tabble'}>表格</Link> 
								</Menu.Item>
								<Menu.Item key="2">
									<Link to = {'label'}>标签页</Link> 
								</Menu.Item>
								<SubMenu key="sub10" title="表单 AND 轮播">
									<Menu.Item key="3">
										<Link to = {'form'}>表单</Link>
									</Menu.Item>
									<Menu.Item key="4">
										<Link to = {'carousel'}>轮播图</Link>
									</Menu.Item>
								</SubMenu>
						</SubMenu>

						<SubMenu key="sub2" title={<span><Icon type="frown" /><span>模拟商城</span></span>}>
							<Menu.Item key="5">
								<Link to = {'shop_home'}>首页</Link>
							</Menu.Item>
						</SubMenu>
						<SubMenu key="sub3" title={<span><Icon type="meh-o" /><span>嵌套导航</span></span>}>
							<Menu.Item key="6">Option 6</Menu.Item>
						</SubMenu>
						<SubMenu key="sub4" title={<span><Icon type="meh" /><span>嵌套导航</span></span>}>
							<Menu.Item key="7">Option 7</Menu.Item>
						</SubMenu>
						<SubMenu key="sub5" title={<span><Icon type="frown-o" /><span>嵌套导航</span></span>}>
							<Menu.Item key="8">Option 8</Menu.Item>
						</SubMenu>
						<SubMenu key="sub6" title={<span><Icon type="smile" /><span>嵌套导航</span></span>}>
							<Menu.Item key="9">Option 9</Menu.Item>
						</SubMenu>

					</Menu>
				);
			}
  }