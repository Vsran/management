import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "./router";
import RouteWithSubRoutes from "./routeWithSubRoutes";
import SideBar from "./components/sidebar";
import { Layout, Breadcrumb } from "antd";
const { Header, Content, Footer, Sider } = Layout;

export default function RouteConfig() {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <SideBar />
        <Layout>
          <Header className='site-layout-background' style={{ padding: 0 }} />
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
          </Breadcrumb>
        </Layout>
      </Layout>
    </Router>
  );
}
