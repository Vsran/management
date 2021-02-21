import { Layout, Menu, Breadcrumb, Dropdown } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  DownOutlined,
} from "@ant-design/icons";
//import http from '../../http';
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Production from '../../pages/sales/production';
import Location from '../../pages/sales/location';
import Orders from '../../pages/sales/orders';
import Customer from '../../pages/sales/customer';
import icon from "../../imgs/icon.svg";
import "./userLayout.scss";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const axios = require('axios');

axios.post("", {
  headers: {
    'access-control-allow-origin': '*',
  },
  //proxy: {
  //  host: '127.0.0.1',
  //  port: 1337
  //},
  username: "admin",
  password: "admin",
  next: "/",
}).then(function(response) {
    console.log('response', response);
})

const menu = (
  <Menu>
    <Menu.Item>
        <Link to='/login'>退出登录</Link>
    </Menu.Item>
  </Menu>
);

export default () => (
  <Layout className='userlayout'>
    <Header className='header'>
      <img src={icon} />
      <Dropdown overlay={menu}>
        <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
          我的 <DownOutlined />
        </a>
      </Dropdown>
      ,
    </Header>
    <Layout className='layout'>
      <Sider width={200} className='site-layout-background'>
        <Menu
          mode='inline'
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
          theme='dark'
        >
          <SubMenu key='sub1' icon={<UserOutlined />} title='销售'>
            <Menu.Item key='1'>
              <Link to='/main/sub1/option1'>产品</Link>
            </Menu.Item>
            <Menu.Item key='2'>
              <Link to='/main/sub1/option2'>地点</Link>
            </Menu.Item>
            <Menu.Item key='3'>
              <Link to='/main/sub1/option3'>销售订单</Link>
            </Menu.Item>
            <Menu.Item key='4'>
              <Link to='/main/sub1/option4'>客户</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key='sub2' icon={<LaptopOutlined />} title='库存'>
            <Menu.Item key='5'>
              <Link to='/main/sub2/option5'>库存</Link>
            </Menu.Item>
            <Menu.Item key='6'>产品配送</Menu.Item>
            <Menu.Item key='7'>库存报告</Menu.Item>
          </SubMenu>
          <SubMenu key='sub3' icon={<NotificationOutlined />} title='产能'>
            <Menu.Item key='8'>资源</Menu.Item>
            <Menu.Item key='9'>资源报告</Menu.Item>
          </SubMenu>
          <SubMenu key='sub4' icon={<NotificationOutlined />} title='采购'>
            <Menu.Item key='10'>供应商</Menu.Item>
            <Menu.Item key='11'>产品供应商</Menu.Item>
            <Menu.Item key='12'>采购报告</Menu.Item>
          </SubMenu>
          <SubMenu key='sub5' icon={<NotificationOutlined />} title='生产制造'>
            <Menu.Item key='13'>日历</Menu.Item>
            <Menu.Item key='14'>班次</Menu.Item>
            <Menu.Item key='15'>操作</Menu.Item>
            <Menu.Item key='16'>操作-清单</Menu.Item>
            <Menu.Item key='17'>生产单</Menu.Item>
            <Menu.Item key='18'>执行-调度规则管理</Menu.Item>
            <Menu.Item key='19'>计划编辑-甘特图</Menu.Item>
            <Menu.Item key='20'>计划编辑-列表</Menu.Item>
            <Menu.Item key='21'>库存计划</Menu.Item>
            <Menu.Item key='22'>执行-WhatIf场景管理</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: "0 24px 24px" }}>
        {/* 面包屑导航的设计？ */}
        {/*<Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>销售</Breadcrumb.Item>
          <Breadcrumb.Item>产品</Breadcrumb.Item>
        </Breadcrumb>*/}
        <Content
          className='site-layout-background'
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Switch>
            <Route path='/main/sub1/option1'><Production/></Route>
            <Route path='/main/sub1/option2'><Location/></Route>
            <Route path='/main/sub1/option3'><Orders/></Route>
            <Route path='/main/sub1/option4'><Customer/></Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  </Layout>
);
