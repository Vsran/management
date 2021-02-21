import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import LogIn from "./pages/login";
import Register from "./pages/register";

import "antd/dist/antd.css";
import { renderRoute } from 'react-router-config';
import UserLayOut from './components/layout/userLayout';

function Authorized() {

}
const routes = [
  {
    component: () => <div>Root</div>,
    routes: [
      {
        path: '/',
        label: '首页',
        exact: true,
        component: () => <div>home</div>
      },

    ]
  }
]

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
         <UserLayOut/>
        </Route>
      </Switch>
    </Router>
  );
}
