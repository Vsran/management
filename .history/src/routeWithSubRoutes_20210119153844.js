function RouteWithSubRoutes(route) {
    return (
        <Route
          sensitive
          path={route.path}
          render={ props => (
              <route.component {...props} routes={route.routes}/>
          )}
        />
    )
}