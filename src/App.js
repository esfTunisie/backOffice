import React from 'react';
import "./scss/style.scss"
import MainRoute from "./Routes/MainRoute"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div>
    <MainRoute />
    </div>
  );
}

export default App;
