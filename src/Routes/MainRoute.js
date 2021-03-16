import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage"
import PrivateRoute from "./PrivateRoute/PrivateRoute"
const MainRoute = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
};

export default MainRoute;