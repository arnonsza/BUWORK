import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './index.css';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
import Resetpassword from './pages/Resetpassword';
import Test from './pages/Test';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Main" component={Main} />
        <Route path="/Register" component={Register} />
        <Route path="/Resetpassword" component={Resetpassword} />
        <Route path="/Test" component={Test} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


