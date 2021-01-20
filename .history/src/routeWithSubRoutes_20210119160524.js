import { Route } from "react-router-dom";

function RouteWithSubRoutes(route) {
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