import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from "../AppBar";
import Home from "../../pages/Home";
import Product from "../../pages/Product";

function App() {
  return (
    <Router>
      <AppBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" component={Product} />
      </Switch>
    </Router>
  );
}

export default App;
