import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Sider extends React.Component {
    handleClick = (e) => {
		console.log(e)
		this.props.getValue(e.key,e.item.props.children); 
	}
    render() {
      return (
        <Menu
			onClick={this.handleClick}
			onChange = {this.getValue}
			style={{ width: 256,height:'90vh',overflow: 'auto'}}
			defaultSelectedKeys={['1']}
			defaultOpenKeys={['sub1']}
			mode="inline"
        >

			<SubMenu key="sub1" title={<span><Icon type="mail" /><span>多个分类</span></span>}>
				<MenuItemGroup key="g1" title="分类 1">
					<Menu.Item key="1">表格</Menu.Item>
					<Menu.Item key="2">标签页</Menu.Item>
				</MenuItemGroup>

				<MenuItemGroup key="g2" title="分类 2">
					<Menu.Item key="3">按钮</Menu.Item>
					<Menu.Item key="4">图标</Menu.Item>
				</MenuItemGroup>
			</SubMenu>

			<SubMenu key="sub2" title={<span><Icon type="appstore" /><span>嵌套导航</span></span>}>
				<Menu.Item key="5">步骤条</Menu.Item>
				<Menu.Item key="6">列表</Menu.Item>
				<SubMenu key="sub3" title="嵌套导航二">
					<Menu.Item key="7">Option 7</Menu.Item>
					<Menu.Item key="8">Option 8</Menu.Item>
				</SubMenu>
			</SubMenu>

			<SubMenu key="sub4" title={<span><Icon type="setting" /><span>普通导航</span></span>}>
				<Menu.Item key="9">Option 9</Menu.Item>
				<Menu.Item key="10">Option 10</Menu.Item>
				<Menu.Item key="11">Option 11</Menu.Item>
				<Menu.Item key="12">Option 12</Menu.Item>
				<Menu.Item key="13">Option 13</Menu.Item>
				<Menu.Item key="14">Option 14</Menu.Item>
				<Menu.Item key="15">Option 15</Menu.Item>
			</SubMenu>

        </Menu>
      );
    }
  }