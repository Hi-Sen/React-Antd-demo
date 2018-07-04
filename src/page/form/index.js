import React from 'react'  
import { render } from 'react-dom'  

import FromOne from './demo1' 
import FromTwo from './demo2' 
import FromThree from './demo3' 

export default class From extends React.Component {
    render () {
        return (
            <div style={{width:'800px',margin: 'auto',marginTop:50}}>   
                <FromOne/> 
                <hr/>
                <FromTwo/>
                <hr/>
                <FromThree/>
            </div>
        )
    }
}

