import React, { Component } from 'react'
import './index.less'
import { Menu, Input, Dropdown } from 'antd'
import { Link } from 'react-router-dom'
import { MenuFoldOutlined } from '@ant-design/icons';
import {withRouter} from 'react-router-dom'
import {Route_types} from '../../interface/Type'
import {menuList, menuItem} from '../../config/menuList'

const { Search } = Input;

class headerMenu extends Component<Route_types,any> {

    private logout = () => {
        this.props.history.replace('/login')
    }

    private getMenuItem = (menuList:menuItem[]) => {
        return menuList.map((item)=>{
            if(item.key){
              return(
                <Menu.Item key={item.key}>
                <Link to={item.key}>
                    <span>{item.title}</span>
                </Link>
                </Menu.Item>
              )
            }
        })
    }

    menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
              修改密码
            </a>
          </Menu.Item>
          <Menu.Item danger onClick = {this.logout}>注销账号</Menu.Item>
        </Menu>
      );

    render() {
        const path = this.props.location.pathname
        
        return (
            <div className="header-menu">
                <div className="header-logo">
                    Doumeki
               </div>
                <div className="header-menu">
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[path]} style={{ height: '80px' }}>
                        {this.getMenuItem(menuList)}
                    </Menu>
                </div>
                <div className="header-search">
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton
                        style={{ width: '100%', marginTop: '20px' }}
                    />
                </div>
                <div className="header-logout">
                    <Dropdown overlay={this.menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <MenuFoldOutlined style={{ fontSize: '30px', color: '#D8D8D8',lineHeight:'80px' }}/>
                        </a>
                    </Dropdown>
                </div>
            </div>
        )
    }
}

export default withRouter(headerMenu)