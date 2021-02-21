import { Layout, Menu, Breadcrumb, Dropdown } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  DownOutlined,
} from "@ant-design/icons";
import http from '../../http';
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Production from '../../pages/sales/production';
import Location from '../../pages/sales/location';
import Orders from '../../pages/sales/orders';
import Customer from '../../pages/sales/customer';
import Inventory from '../../pages/inventory';
import Distribution from '../../pages/inventory/distribution';
import Reporter from '../../pages/inventory/reporter';
import Resource from '../../pages/capacity/resource';
import ResourceReporter from '../../pages/capacity/reporter';
import Applier from '../../pages/purchasing/applier';
import ProductionApplier from '../../pages/purchasing/productionApplier';
import PurchasingApplier from '../../pages/purchasing/reporter';
import Calendars from '../../pages/manufacturing/calendars';
import Workshift from '../../pages/manufacturing/workshift';
import Execution from '../../pages/manufacturing/execution';
import PlanningList from '../../pages/manufacturing/planning_list';
import ProductionList from '../../pages/manufacturing/productionList';
import Skill from '../../pages/manufacturing/skill';
import PlanningGantt from '../../pages/manufacturing/planning_gantt';
import PlanningList from '../../pages/manufacturing/planning_list';
import InventoryPlanning from '../../pages/manufacturing/inventoryPlanning';
import WhatIf from '../../pages/manufacturing/whatIf';
import icon from "../../imgs/icon.svg";
import "./userLayout.scss";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const axios = require('axios');

http.post("/api/data/login/?next=/", {
  headers: {
    'access-control-allow-origin': '*',
  },
  //proxy: {
  //  host: '127.0.0.1',
  //  port: 1337
  //},
  //username: "admin",
  //password: "admin",
  //next: "/",
}).then(function(response) {
    console.log('response', response);
})
http.get("/forecast", {
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
            <Menu.Item key='6'>
              <Link to='/main/sub2/option6'>产品配送</Link>
            </Menu.Item>
            <Menu.Item key='7'>
              <Link to='/main/sub2/option7'>库存报告</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key='sub3' icon={<NotificationOutlined />} title='产能'>
            <Menu.Item key='8'>
              <Link to='/main/sub3/option8'>资源</Link>
            </Menu.Item>
            <Menu.Item key='9'>
              <Link to='/main/sub3/option9'>资源报告</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key='sub4' icon={<NotificationOutlined />} title='采购'>
            <Menu.Item key='10'>
              <Link to='/main/sub4/option10'>供应商</Link>
            </Menu.Item>
            <Menu.Item key='11'>
              <Link to='/main/sub4/option11'>产品供应商</Link>
            </Menu.Item>
            <Menu.Item key='12'>
              <Link to='/main/sub4/option12'>采购报告</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key='sub5' icon={<NotificationOutlined />} title='生产制造'>
            <Menu.Item key='13'>
              <Link to='/main/sub5/option13'>日历</Link>
            </Menu.Item>
            <Menu.Item key='14'>
              <Link to='/main/sub5/option14'>班次</Link>
            </Menu.Item>
            <Menu.Item key='15'>
              <Link to='/main/sub5/option15'>操作</Link>
            </Menu.Item>
            <Menu.Item key='16'>
              <Link to='/main/sub5/option16'>操作-清单</Link>
            </Menu.Item>
            <Menu.Item key='17'>
              <Link to='/main/sub5/option17'>生产单</Link>
            </Menu.Item>
            <Menu.Item key='18'>
              <Link to='/main/sub5/option18'>执行-调度规则管理</Link>
            </Menu.Item>
            <Menu.Item key='19'>
              <Link to='/main/sub5/option19'>计划编辑-甘特图</Link>
            </Menu.Item>
            <Menu.Item key='20'>
              <Link to='/main/sub5/option20'>计划编辑-列表</Link>
            </Menu.Item>
            <Menu.Item key='21'>
              <Link to='/main/sub5/option21'>库存计划</Link>
            </Menu.Item>
            <Menu.Item key='22'>
              <Link to='/main/sub5/option22'>执行-WhatIf场景管理</Link>
            </Menu.Item>
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
            {/* 销售 */}
            <Route path='/main/sub1/option1'><Production/></Route>
            <Route path='/main/sub1/option2'><Location/></Route>
            <Route path='/main/sub1/option3'><Orders/></Route>
            <Route path='/main/sub1/option4'><Customer/></Route>
            {/* 库存 */}
            <Route path='/main/sub2/option5'><Inventory/></Route>
            <Route path='/main/sub2/option6'><Distribution/></Route>
            <Route path='/main/sub2/option7'><Reporter/></Route>
            {/* 产能 */}
            <Route path='/main/sub3/option8'><Resource/></Route>
            <Route path='/main/sub3/option9'><ResourceReporter/></Route>
            {/* 采购 */}
            <Route path='/main/sub4/option10'><Applier/></Route>
            <Route path='/main/sub4/option11'><ProductionApplier/></Route>
            <Route path='/main/sub4/option12'><PurchasingApplier/></Route>
            {/* 生产制造 */}
            <Route path='/main/sub5/option13'><Calendars/></Route>
            <Route path='/main/sub5/option14'><Workshift/></Route>
            <Route path='/main/sub5/option15'><Execution/></Route>
            <Route path='/main/sub5/option16'><PlanningList/></Route>
            <Route path='/main/sub5/option17'><ProductionList/></Route>
            <Route path='/main/sub5/option18'><Skill/></Route>
            <Route path='/main/sub5/option19'><PlanningGantt/></Route>
            <Route path='/main/sub5/option20'><PlanningList/></Route>
            <Route path='/main/sub5/option21'><InventoryPlanning/></Route>
            <Route path='/main/sub5/option22'><WhatIf/></Route>

          </Switch>
        </Content>
      </Layout>
    </Layout>
  </Layout>
);
