import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage"
import PrivateRoute from "./PrivateRoute/PrivateRoute"
import {
 
  TheSidebar,
  TheFooter,
  TheHeader
} from '../containers/index'
import TapComponent from "../Components/TapComponent";
const MainRoute = () => {
  return (
    <Router>
      <Switch>
      <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <TapComponent />
        </div>
        <TheFooter/>
      </div>
    </div>
      </Switch>
    </Router>
  );
};

export default MainRoute;