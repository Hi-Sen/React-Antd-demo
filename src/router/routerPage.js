import React from 'react'  
import { Router, Route, IndexRoute, browserHistor, Link } from 'react-router'  
  
import Demo1 from '../page' 
import Tabble from '../page/tabble' 
import Label from '../page/label' 
  
export default class RouteMap extends React.Component {  
    updateHandle() {  
        console.log('每次router变化之后都会触发')  
    }  
    render() {  
        return (  
            <Router history={this.props.history}  onUpdate={this.updateHandle.bind(this)}>  
                <Route path='/' component={Demo1}>
                    <Route path='/tabble' component={Tabble}></Route>
                    <Route path='/label' component={Label}></Route>
                </Route>  
            </Router>  
        )  
    }  
}  