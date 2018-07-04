import React from 'react'  
import { render } from 'react-dom'  

import { Carousel } from 'antd';

import '../form/demo1.css'

function onChange(a, b, c) {
  console.log(a, b, c);
}

export default class CarouselComponent extends React.Component {
	render () {
		return (
			<div className="car">
			<Carousel autoplay afterChange={onChange}>
			<div><h3>1</h3></div>
			<div><h3>2</h3></div>
			<div><h3>3</h3></div>
			<div><h3>4</h3></div>
			</Carousel>
			</div>
		)
	}
}

