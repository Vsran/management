import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chart from "./pages/chart";
import LogIn from "./pages/login";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='chart'>
          <Chart />
        </Route>
        <Route path='login'>
          <LogIn />
        </Route>
        <Route path='/'>
          <div>This is projects_management</div>
        </Route>
      </Switch>
    </Router>
  );
}
