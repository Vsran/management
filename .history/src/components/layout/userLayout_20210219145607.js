import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import icon from '../../imgs/icon.svg';
import './userLayout.scss';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
export default () =>(
  <Layout className='userlayout'>
    <Header className="header">
      <div className="logo" />
      <img src={icon}/>
    </Header>
    <Layout className='layout'>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          theme="dark"
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="销售">
            <Menu.Item key="1"><Link to='/main/sub1/option1'>option1</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/main/sub1/option2'>option2</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/main/sub1/option3'>option3</Link></Menu.Item>
            <Menu.Item key="4"><Link to='/main/sub1/option4'></Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="库存">
            <Menu.Item key="5"><Link to='/main/sub2/option5'>option5</Link></Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="产能">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" icon={<NotificationOutlined />} title="采购">
            <Menu.Item key="12">option9</Menu.Item>
            <Menu.Item key="13">option10</Menu.Item>
            <Menu.Item key="14">option11</Menu.Item>
            <Menu.Item key="15">option12</Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" icon={<NotificationOutlined />} title="生产制造">
            <Menu.Item key="16">option9</Menu.Item>
            <Menu.Item key="17">option10</Menu.Item>
            <Menu.Item key="18">option11</Menu.Item>
            <Menu.Item key="19">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Switch>
            <Route path='/main/sub1/option1'>option1</Route>
            <Route path='/main/sub1/option2'>option2</Route>
            <Route path='/main/sub1/option3'>option3</Route>
            <Route path='/main/sub2/option5'>option5</Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  </Layout>
);