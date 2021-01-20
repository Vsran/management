import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "./router";
import RouteWithSubRoutes from "./routeWithSubRoutes";
import SideBar from "./components/sidebar";

export default function RouteConfig() {
  return (
    <Router>
      <SideBar />
      <div>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}
