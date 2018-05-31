import React from 'react'  
import { Router, Route, IndexRoute,browserHistory } from 'react-router'  
  
import Demo1 from '../page/demo1'  
import Demo2 from '../page/demo2'  
import Demo3 from '../page/demo3'  
  
export default class RouteMap extends React.Component {  
    updateHandle() {  
        console.log('每次router变化之后都会触发')  
    }  
    render() {  
        return (  
             <Router history={this.props.history}  onUpdate={this.updateHandle.bind(this)}>  
                <Route path='/' component={Demo1}></Route>  
                <Route path="Demo2" component={Demo2}/>  
                <Route path="Demo3/:id" component={Demo3}/>  
            </Router>  
        )  
    }  
}  