import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
} from "react-router-dom";
import routes from "./router";
import "antd/dist/antd.css";
import RouteWithSubRoutes from "./routeWithSubRoutes";
import LogIn from "./pages/login";
import { Layout, Breadcrumb, Menu } from "antd";
const { Sider } = Layout;
const { SubMenu } = Menu;
const { Header, Content } = Layout;
const menu = [
  {
    name: "生产管理",
    link: "/production",
    children: [
      { name: "计划工单", link: "/production/planning" },
      { name: "生产任务", link: "/production/task" },
      { name: "生产看板", link: "/production/panel" },
      { name: "生产报表", link: "/production/sheet" },
      { name: "销售订单", link: "/production/order" },
      { name: "追溯", link: "/production/history" },
    ],
  },
  {
    name: "物料管理",
    link: "/material",
    children: [
      { name: "物料请求", link: "/material/request" },
      { name: "备料任务", link: "/material/task" },
      { name: "现有量查询", link: "/material/account" },
      { name: "记录查询", link: "/material/record" },
      { name: "物料看板", link: "/material/panel" },
      { name: "物料报表", link: "/material/sheet" },
    ],
  },
  {
    name: "质量管理",
    link: "/quality",
    children: [
      { name: "质检任务", link: "/quality/task" },
      { name: "质检看板", link: "/quality/task" },
      { name: "质检报表", link: "/quality/sheet" },
    ],
  },
  {
    name: "物流管理",
    link: "/distribution",
    children: [
      { name: "物流查询", link: "/distribution/search" },
      { name: "记录查询", link: "/distribution/record" },
    ],
  },
  {
    name: "设备维护",
    link: "/equipment",
    children: [
      { name: "设备实况", link: "/equipment/account" },
      { name: "维护任务", link: "/equipment/task" },
      { name: "维护请求", link: "/equipment/request" },
      { name: "设备管理", link: "/equipment/management" },
      { name: "设备看板", link: "/equipment/panel" },
      { name: "设备报表", link: "/equipment/sheet" },
    ],
  },
  {
    name: "知识引擎",
    link: "/engine",
  },
  {
    name: "系统配置",
    link: "/setting",
  },
  {
    name: "电子标签",
    link: "/esign",
  },
  {
    name: "意见与反馈",
    link: "/feedback",
  },
];
menu.forEach((item) => {
  item.link = `\\main${item.link}`;
  if (item.children) {
    item.children.forEach((subItem) => {
      subItem.link = `\\main${subItem.link}`;
    });
  }
});

console.log("menu:", menu);
let Navs = () => {
 return <ul>
    {menu.map((item, index) => {
      return (
        <li key={index}>
          <NavLink to={item.link} key={index}>{item.name}</NavLink>
        </li>
      );
    })}
  </ul>;
};
export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <Switch>
        <Route path='/register'>
          <div>register</div>
        </Route>
        <Route path='/login'>
          <LogIn />
        </Route>
        <Route path='/main'>
          <Layout style={{ minHeight: "100vh" }}>
            <Sider
              collapsible
              collapsed={collapsed}
              onCollapse={() => setCollapsed(collapsed)}
            >
              <div className='logo' />
              {/*<Menu theme='dark' defaultSelectedKeys={["1"]} mode='inline'>
                {menu.map((outerItem, index) => {
                  if (!outerItem.children) {
                    //  return <SubMenuWithLink {...outerItem} key={`outer${index}`} />;
                    let { link, name } = outerItem;
                    return (
                      <Menu.Item key={`outer${index}`}>
                        <NavLink to={`${link}`}>{name}</NavLink>
                      </Menu.Item>
                    );
                  } else {
                    return (
                      <SubMenu key={`outer${index}`} title={outerItem.name}>
                        {outerItem.children.map((innerItem, i) => {
                          let { link, name } = innerItem;
                          return (
                            <Menu.Item key={`${index}inner${i}}`}>
                              <NavLink replace to={link}>{name}</NavLink>
                            </Menu.Item>
                          );
                        })}
                      </SubMenu>
                    );
                  }
                })}
              </Menu>*/}
              <Navs/>
            </Sider>
            <Layout className='site-layout'>
              <Header
                className='site-layout-background'
                style={{ padding: 0 }}
              />
              <Content>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>
                    <Switch>
                      {routes.map((route, i) => {
                        console.log("route", route);
                        //return <RouteWithSubRoutes key={i} {...route} />;
                        return (
                          <Route
                            path={route.path}
                            render={route.component}
                            key={i}
                          ></Route>
                        );
                      })}
                    </Switch>
                  </Breadcrumb.Item>
                </Breadcrumb>
              </Content>
            </Layout>
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

console.log("history", window.history.pushState);
console.log("hash", window.location.hash);
