import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from './router';

export default function RouteConfig() {
    return (
        <Router>
            <Switch>
                {routes.mpa((route, i) => (
                    <Route
                      path={route.path}
                      key={i}
                      render={(...route) => (
                          <route.component {...route} routes={route.routes}/>
                      )}
                    />
                ))}
            </Switch>
        </Router>
    )
}