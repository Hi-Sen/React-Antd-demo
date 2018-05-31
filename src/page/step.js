import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Steps, Button, message } from 'antd';
const Step = Steps.Step;

const steps = [{
  title: 'First',
  content: 'First-content',
}, {
  title: 'Second',
  content: 'Second-content',
}, {
  title: 'Last',
  content: 'Last-content',
}];

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		current: 0,
		};
	}
	next() {
		const current = this.state.current + 1;
		this.setState({ current });
	}
	prev() {
		const current = this.state.current - 1;
		this.setState({ current });
	}
	render() {
		const { current } = this.state;
		return (
			<div style={{marginTop:50}}>
				<Steps current={current}>
				{steps.map(item => <Step key={item.title} title={item.title} />)}
				</Steps>
				<div className="steps-content">{steps[this.state.current].content}</div>
				<div className="steps-action">
				{
					this.state.current < steps.length - 1
					&&
					<Button type="primary" onClick={() => this.next()}>Next</Button>
				}
				{
					this.state.current === steps.length - 1
					&&
					<Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
				}
				{
					this.state.current > 0
					&&
					<Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
					Previous
					</Button>
				}
				</div>

				<Steps direction="vertical" current={1} style={{marginTop:100,marginLeft:'20%'}}>
					<Step title="Finished" description="This is a description." />
					<Step title="In Progress" description="This is a description." />
					<Step title="Waiting" description="This is a description." />
				</Steps>
				
			</div>
		);
	}
}