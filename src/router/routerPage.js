import React from 'react'  
import { Router, Route, IndexRoute, browserHistor, Link } from 'react-router'  
// 引入所有基础配置
import '../config/globalConfig'
  
import Demo1 from '../page' 
import Tabble from '../page/tabble' 
import Label from '../page/label' 
import Form from '../page/form' 
import Carousel from '../page/carousel' 
import ShopHome from '../page/shop/home'
import HomeDetail from '../page/shop/home_detail'
import Echarts from '../page/echarts'
import WangEditor from '../page/wangeditor'
<<<<<<< HEAD
=======
import Select from '../page/select'
>>>>>>> aa22357f868939476d20d7838832e0e60269a694


export default class RouteMap extends React.Component {  
    updateHandle () {  
        console.log('每次router变化之后都会触发')  
    }  
    render () {  
        return (  
            <Router history={this.props.history}  onUpdate={this.updateHandle.bind(this)}>  
                <Route path='/' component={Demo1}>
                    <IndexRoute component={Tabble}/> 
                    <Route path='/tabble' component={Tabble}></Route>
                    <Route path='/label' component={Label}></Route>
                    <Route path='/form' component={Form}></Route>
                    <Route path='/carousel' component={Carousel}></Route>
                    <Route path='/shop_home' component={ShopHome}></Route>
                    <Route path='/shop_home_detail' component={HomeDetail}></Route>
                    <Route path='/echarts' component={Echarts}></Route>
                    <Route path='/editor' component={WangEditor}></Route>
<<<<<<< HEAD
=======
                    <Route path='/select' component={Select}></Route>
>>>>>>> aa22357f868939476d20d7838832e0e60269a694
                </Route>  
            </Router>  
        )  
    }  
}  
