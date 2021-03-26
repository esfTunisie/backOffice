import React from 'react';
import "./scss/style.scss"
import MainRoute from "./Routes/MainRoute"
import Login from './Components/Login';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
    <Switch>
      <Route exact path="/login" component={Login}/>
      <Route path="/" component={MainRoute} />
      
    </Switch>
    </Router>
    
     
    </div>
  );
}

export default App;
