import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "./router";
import RouteWithSubRoutes from './routeWithSubRoutes';

export default function RouteConfig() {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route}/>)}
      </Switch>
    </Router>
  );
}
