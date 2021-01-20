import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chart from "./pages/chart";
import LogIn from "./pages/login";
console.log("Chart", <Chart />);

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Chart />
          </Route>
          <Route path='/chart'>
            <Chart />
          </Route>
          <Route path='/login'>
            {/*<LogIn />*/}
            <div>hello</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
