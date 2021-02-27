import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

import NotFoundError from "./pages/NotFoundError";
import Home from "./pages/Home";
import MonitoringDashboard from "./pages/MonitoringDashboard";
import ApplicationManagement from "./pages/ApplicationManagement";
import LoggedIssues from "./pages/LoggedIssues";
import QuickLinks from "./pages/QuickLinks";
import Login from "./pages/Login";

import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";

import React, { Component } from 'react'

class App extends Component {
  render() {
    let authed = true;
    return (
      <Router>
        <Navbar isUserAuthed={authed} />
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute authed={authed} path="/home" component={Home} />
          <PrivateRoute authed={authed} path="/monitoring-dashboard" component={MonitoringDashboard} />
          <PrivateRoute authed={authed} path="/application-management" component={ApplicationManagement} />
          <PrivateRoute authed={authed} path="/logged-issues" component={LoggedIssues} />
          <PrivateRoute authed={authed} path="/quick-links" component={QuickLinks} />
          <Route component={NotFoundError} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}
function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
    />
  )
}


export default App;
