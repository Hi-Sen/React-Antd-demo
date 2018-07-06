import React, { Component } from 'react'
import E from 'wangeditor'
import { Button } from 'antd';

export default class Editor extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            editorContent: ''
        }
    }
    render() {
        return (
            <div style={{width:'800px',margin: 'auto',marginTop:50}}>   
                {/* 将生成编辑器 */}
                <div ref="editorElem" style={{textAlign: 'left'}}></div>

                {/* 打印输入的内容 */}
                <div style={{marginTop:50,color:'#1890ff',fontWeight:'bold',textAlign:'left'}}>
                    您输入了：
                    <span
                    style={{color:'#666'}}
                    dangerouslySetInnerHTML = {{__html:this.state.editorContent}} ></span>
                </div>
            </div>
        );
    }
    componentDidMount () {
        const elem = this.refs.editorElem
        const editor = new E(elem)
        // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
        editor.customConfig.onchange = html => {
            this.setState({
                editorContent: html
            })
        }
        editor.create()  //创建编辑器
    }
}