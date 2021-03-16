import React from "react";
import {  BrowserRouter as Router, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoute/PrivateRoute"
import TheHeader from "../containers/TheHeader"
import TheSidebar from "../containers/TheSidebar"
import TheFooter from "../containers/TheFooter"
const MainRoute = () => {
  return (
    <Router>
      <Switch>
      <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        
        <TheFooter/>
      </div>
    </div>
      </Switch>
    </Router>
  );
};

export default MainRoute;