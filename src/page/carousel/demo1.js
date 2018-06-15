import React from 'react'  
import { render } from 'react-dom'  

import { Carousel } from 'antd';

function onChange(a, b, c) {
  console.log(a, b, c);
}

export default class CarouselComponent extends React.Component {
	render () {
		<Carousel afterChange={onChange}>
		<div><h3>1</h3></div>
		<div><h3>2</h3></div>
		<div><h3>3</h3></div>
		<div><h3>4</h3></div>
		</Carousel>
	}
}


/* For demo */
// .ant-carousel .slick-slide {
//   text-align: center;
//   height: 160px;
//   line-height: 160px;
//   background: #364d79;
//   overflow: hidden;
// }

// .ant-carousel .slick-slide h3 {
//   color: #fff;
// }