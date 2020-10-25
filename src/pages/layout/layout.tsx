import React, { Component } from 'react';
import './index.less'
import { Layout } from 'antd';
import Menu from '../../components/menu/menu'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../home/home'
import Mine from '../mine/mine'

const { Header, Content, Footer } = Layout;

export default class pageLayout extends Component {

    render() {

        return (
            <Layout className="layout" >
                <Header style={{ height: '80px',position: 'fixed', zIndex: 1, width: '100%' }}>
                    <Menu></Menu>
                </Header>
                <Content >
                    <Switch>
                        <Route path='/layout/home' component={Home} />
                        <Route path='/layout/mine' component={Mine} />
                        <Redirect to='/layout/home'></Redirect>
                    </Switch>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    }
}