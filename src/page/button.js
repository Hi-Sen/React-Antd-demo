import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Button, Radio, Icon } from 'antd';

export default class Btn extends Component {
    render () {
        return (
            <div style={{marginTop:50}}>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                <hr/>

                <Button type="primary">Primary</Button>
                <Button type="primary" disabled>Primary(disabled)</Button>
                <hr/>
                <Button type="dashed">Dashed</Button>
                <Button type="dashed" disabled>Dashed(disabled)</Button>
                
                <div style={{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)',marginTop:30 }}>
                <hr/>
                <Button ghost>Ghost</Button>
                <Button ghost disabled>Ghost(disabled)</Button>
                </div>

            </div>
        )
    }
}