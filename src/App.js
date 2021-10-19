import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Foot from './pages/fixed/Foot';
import Nav from './pages/fixed/Nav';
import Account from './pages/navpages/Account';
import Confirm from './pages/others/Confirm';
import Home from './pages/others/Home';
import Order from './pages/others/Order';
import Way from './pages/others/Way';
import History from './pages/navpages/History';
import Settings from './pages/navpages/Settings';
import Test from './pages/others/Test';
import Notify from './pages/others/Notify';

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Notify/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/order" component={Order}/>
        <Route path="/confirm" component={Confirm}/>
        <Route path="/confirmation" component={Way}/>
        <Route path="/account" component={Account}/>
        <Route path="/ridehistory" component={History}/>
        <Route path="/settings" component={Settings}/>
        </Switch>
        <Foot/>
      </Router>
    </>
   
  );
}

export default App;
