import React from 'react'  
import { render } from 'react-dom'  

import { Carousel } from 'antd';

ReactDOM.render(
  <Carousel vertical>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </Carousel>
, mountNode);
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