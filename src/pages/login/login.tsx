import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import './index.less'
import { FormInstance } from 'antd/lib/form';
import {Route_types} from '../../interface/Type'
import {
    Form,
    Divider,
    Input,
    Button,
    Row,
    Col
} from 'antd'
import {
    WechatFilled,
    WeiboCircleFilled,
    QqCircleFilled,
    PhoneFilled
} from '@ant-design/icons'



class Login extends Component <Route_types,any>{

    formRef = React.createRef<FormInstance>();

    handleSubmit = () => {
        this.props.history.replace('/layout')
    }

    render() {
        return (
            <div className="login">
                <div className="login-section">
                    <div className="login-box">
                        <div className="login-box-left">
                            <h2>用户登录</h2>
                            <Form
                                className="login-form"
                                name="control-ref"
                                layout="vertical"
                                ref={this.formRef}
                                onFinish = {this.handleSubmit}
                            >
                                <Form.Item
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        }
                                    ]}
                                >
                                    <Input placeholder="Username" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: '密码不能为空'
                                        }
                                    ]}
                                >
                                    <Input.Password placeholder="Password" />
                                </Form.Item>
                                <Form.Item >
                                    <Button htmlType="submit" className="login-form-button" type="primary">
                                        提交
                            </Button>
                                </Form.Item>
                            </Form>
                            <p>请选择</p>
                            <Divider>以下登录方式</Divider>
                            <Row>
                                <Col span={6}> <PhoneFilled style={{ fontSize: '40px', color: '#D8D8D8' }} /></Col>
                                <Col span={6}><WechatFilled style={{ fontSize: '40px', color: '#01DF01' }} /></Col>
                                <Col span={6}><WeiboCircleFilled style={{ fontSize: '40px', color: '#FF0000' }} /></Col>
                                <Col span={6}><QqCircleFilled style={{ fontSize: '40px', color: '#08c' }} /></Col>
                            </Row>
                          
                        </div>                   
                        <div className="login-box-right">
                            <div className="intro-title">网站简介</div>
                            <div className="intro-detail">
                                一个因为喜欢而聚集的地方。    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)