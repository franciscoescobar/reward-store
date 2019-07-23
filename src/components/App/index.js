import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import Product from "../../pages/Product";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/reward-store" exact component={Home} />
        <Route path="/reward-store/product/:id" component={Product} />
      </Switch>
    </Router>
  );
}

export default App;
