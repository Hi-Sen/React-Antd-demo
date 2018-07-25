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
						style={{ width: 256,height:'90vh',overflow: 'auto',minWidth:256}}
						defaultSelectedKeys={['1']}
						defaultOpenKeys = {['sub1','sub2','sub3','sub4','sub5','sub10']}
						mode="inline"
					>

						<SubMenu key="sub1" title={<span><Icon type="smile-o" /><span>Antd 部分UI组件-实践</span></span>}>
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

						<SubMenu key="sub2" title={<span><Icon type="frown" /><span>网络请求-操作-实践</span></span>}>
							<Menu.Item key="5">
								<Link to = {'shop_home'}>获取商品列表</Link>
							</Menu.Item>
						</SubMenu>
						<SubMenu key="sub3" title={<span><Icon type="meh-o" /><span>插件 之 echarts 图表</span></span>}>
							<Menu.Item key="6">
								<Link to = {'echarts'}>部分类型图表</Link>
							</Menu.Item>
						</SubMenu>
						<SubMenu key="sub4" title={<span><Icon type="meh" /><span>富文本编辑器 WangEditor</span></span>}>
							<Menu.Item key="7">
								<Link to = {'editor'}>Editor</Link>
							</Menu.Item>
						</SubMenu>
						<SubMenu key="sub5" title={<span><Icon type="frown-o" /><span>上传</span></span>}>
							<Menu.Item key="8">
								<Link to = {'select'}>上传图片</Link>
							</Menu.Item>
						</SubMenu>
						<SubMenu key="sub6" title={<span><Icon type="frown" /><span>redux 状态管理</span></span>}>
							<Menu.Item key="8">
							<Link to = {'redux'}>Redux</Link>
							</Menu.Item>
						</SubMenu>

					</Menu>
				);
			}
  }