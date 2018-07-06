import React, { Component } from 'react'
import E from 'wangeditor'

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
                <button
                style={{marginTop:50,width:200}}
                onClick={this.clickHandle.bind(this)}>获取文本编辑器内容</button>
            </div>
        );
    }
    componentDidMount() {
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
    clickHandle() {
        alert(this.state.editorContent)
    }
}