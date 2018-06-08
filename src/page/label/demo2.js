import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Tabs, Icon } from 'antd';
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

export default class Label extends React.Component {
    render () {
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab={<span><Icon type="apple" />Iphone</span>} key="1">
                iPhone是美国苹果公司研发的智能手机系列，搭载苹果公司研发的iOS操作系统。
                第一代iPhone于2007年1月9日由苹果公司前首席执行官史蒂夫·乔布斯发布，并在2007年6月29日正式发售。
                第二代iPhone3G于2008年06月10日由美国苹果公司的掌门人史蒂夫·乔布斯在苹果全球开发者大会上正式发布。 [1] 
                第三代iPhone3GS于2009年6月9日由苹果公司在全球开发者大会WWDC2009之上如约正式发布。 [2] 
                第四代iPhone4于2010年6月8日在美国Moscone West会展中心举行的苹果全球开发者大会（WWDC 2010）发布。
                第五代iPhone4s于2011年10月04日在美国加利福尼亚州举行的Let's talk iPhone的新品发布会上发布。
                第六代iPhone5于2012年9月13日凌晨，在美国旧金山芳草地艺术中心的新品发布会正式发布。
                第七代的iPhone 5S及iPhone 5C于2013年9月10日发布，同年9月20日正式发售。
                第八代的iPhone 6及iPhone 6 Plus于2014年9月10日发布，中国大陆地区销售时间定为10月17日。
                第九代的iPhone 6s及iPhone 6s Plus于北京时间2015年9月10日正式发布，已于2015年9月12日15时开始接受预约，并于2015年9月25日正式开售，中国是首发国家之一。
                第十代的iPhone 7及iPhone 7 Plus于北京时间2016年9月8日发布。
                第十一代的iPhone 8，iPhone 8 Plus，iPhone X于北京时间2017年9月13日发布，4.7英寸的iPhone 8，iPhone 8 Plus 6688元起售，9月22日正式开售，iPhone X于10月27日预约，11月3日开售。
                </TabPane>
                <TabPane tab={<span><Icon type="android" />Android</span>} key="2">
                Android是一种基于Linux的自由及开放源代码的操作系统，主要使用于移动设备，如智能手机和平板电脑，由Google公司和开放手机联盟领导及开发。尚未有统一中文名称，中国大陆地区较多人使用“安卓”或“安致”。Android操作系统最初由Andy Rubin开发，主要支持手机。2005年8月由Google收购注资。2007年11月，Google与84家硬件制造商、软件开发商及电信营运商组建开放手机联盟共同研发改良Android系统。随后Google以Apache开源许可证的授权方式，发布了Android的源代码。第一部Android智能手机发布于2008年10月。Android逐渐扩展到平板电脑及其他领域上，如电视、数码相机、游戏机等。2011年第一季度，Android在全球的市场份额首次超过塞班系统，跃居全球第一。 2013年的第四季度，Android平台手机的全球市场份额已经达到78.1%。 [1]  2013年09月24日谷歌开发的操作系统Android在迎来了5岁生日，全世界采用这款系统的设备数量已经达到10亿台。
2014第一季度Android平台已占所有移动广告流量来源的42.8%，首度超越iOS。但运营收入不及iOS。
                </TabPane>
            </Tabs>
        )
    }
}