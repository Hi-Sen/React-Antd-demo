import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function FormattedDate(props) {
	return <h2 onClick={clickMe}>{props.date} </h2>;
}

function clickMe() {
	alert("点击事件")
}

class App extends Component {
	constructor (props) {
		super(props)
		this.state = {
			date:'我是 this.state.date 的值'
		}
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Welcome to React</h1>
				</header>
				<p onClick={clickMe} className="App-intro" style={{color:'red'}}>
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>

				{/* 直接使用函数，返回局部组件 */}
				<FormattedDate
					date={this.state.date}
				/>
			</div>
		);
	}
}

export default App;
