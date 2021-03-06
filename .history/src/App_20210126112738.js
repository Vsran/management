import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import LogIn from "./pages/login";
import Register from "./pages/register";

import "antd/dist/antd.css";

export default function App() {

  return (
    <Router>
      <Switch>
        <Route path='/register'>
          <Register/>
        </Route>
        <Route path='/login'>
          <LogIn />
        </Route>
        <Route path='/main'>
         <ul>
           <li>1</li>
           <li>2</li>
           <li>3</li>
           <li>4</li>
         </ul>
        </Route>
      </Switch>
    </Router>
  );
}
