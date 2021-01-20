import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./router";

export default function RouteConfig() {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <Route
            strict
            path={route.path}
            key={i}
            render={(props) => (
              <route.component {...props} routes={route.routes} />
            )}
          />
        ))}
      </Switch>
    </Router>
  );
}
