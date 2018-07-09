import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Upload, Icon, Modal } from 'antd';

export default class Update extends Component {
    constructor (props) {
        super(props)
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [{
                uid: -1,
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            },
            {
                uid: -2,
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            },
            {
                uid: -3,
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            }]
        }
    }

    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
      this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true,
      });
    }
  
    handleChange = ({ fileList }) => this.setState({ fileList })
  
    render () {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
            </div>
        )
        return (
            <div style={{width:'800px',margin: 'auto',marginTop:50}}>   
                <Upload
                    action="//jsonplaceholder.typicode.com/posts/"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                {fileList.length >= 10 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        )
    }
}