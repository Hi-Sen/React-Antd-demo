import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TabbleOne from './demo1' 
import TabbleTwo from './demo2' 
import TabbleThree from './demo3' 

export default class TabbleAll extends React.Component {
    constructor (props) {
        super(props)
    }
    
    render () {
        return (
            <div>   
                <TabbleOne/> 
                <hr/>
                <TabbleTwo/>
                <hr/>
                <TabbleThree/>
            </div>
        )
    }
}