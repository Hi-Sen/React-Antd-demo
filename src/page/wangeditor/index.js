import React, { Component } from 'react'
import E from 'wangeditor'
<<<<<<< HEAD
=======
import { Button } from 'antd';
>>>>>>> aa22357f868939476d20d7838832e0e60269a694

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
<<<<<<< HEAD
                <button
                style={{marginTop:50,width:200}}
                onClick={this.clickHandle.bind(this)}>获取文本编辑器内容</button>
            </div>
        );
    }
    componentDidMount() {
=======

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
>>>>>>> aa22357f868939476d20d7838832e0e60269a694
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
<<<<<<< HEAD
    clickHandle() {
        alert(this.state.editorContent)
    }
=======
>>>>>>> aa22357f868939476d20d7838832e0e60269a694
}