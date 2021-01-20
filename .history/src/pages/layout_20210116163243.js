import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className='logo' />
          <Menu theme='dark' defaultSelectedKeys={["1"]} mode='inline'>
            <SubMenu key='sub1' icon={<PieChartOutlined />} title='生产管理'>
              <Menu.Item key="1">计划工单</Menu.Item>
              <Menu.Item key="2">生产任务</Menu.Item>
              <Menu.Item key="3">生产看板</Menu.Item>
              <Menu.Item key="4">生产报表</Menu.Item>
              <Menu.Item key="5">销售订单</Menu.Item>
              <Menu.Item key="6">追溯</Menu.Item>
            </SubMenu>
            <SubMenu key='sub2' icon={<DesktopOutlined />} title='物料管理'>
              <Menu.Item key='1'>物料请求</Menu.Item>
              <Menu.Item key='2'>备料任务</Menu.Item>
              <Menu.Item key='3'>现有量查询</Menu.Item>
              <Menu.Item key='4'>记录查询</Menu.Item>
              <Menu.Item key='5'>物料看板</Menu.Item>
              <Menu.Item key='6'>物料报表</Menu.Item>
            </SubMenu>
            <SubMenu key='sub4' icon={<UserOutlined />} title='质量管理'>
              <Menu.Item key='1'>质检任务</Menu.Item>
              <Menu.Item key='2'>质检看板</Menu.Item>
              <Menu.Item key='3'>质检报表</Menu.Item>
            </SubMenu>
            <SubMenu key='sub3' icon={<TeamOutlined />} title='物流管理'>
              <Menu.Item key='6'>Team 1</Menu.Item>
              <Menu.Item key='8'>Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key='9' icon={<FileOutlined />}>
              设备维护
            </Menu.Item>
            <Menu.Item key='9' icon={<FileOutlined />}>
              知识引擎
            </Menu.Item>
            <Menu.Item key='10' icon={<FileOutlined />}>
              系统配置
            </Menu.Item>
            <Menu.Item key='11' icon={<FileOutlined />}>
              电子标签
            </Menu.Item>
            <Menu.Item key='12' icon={<FileOutlined />}>
              意见与反馈
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className='site-layout'>
          <Header className='site-layout-background' style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className='site-layout-background'
              style={{ padding: 24, minHeight: 360 }}
            >
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>React React </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
