import { Route } from "react-router-dom";

export default function RouteWithSubRoutes(route) {
    console.log('route', route);
    return (
        <Route
          strict
          path={route.path}
          render={ props => (
              <route.component {...props} routes={route.routes}/>
          )}
        />
    )
}