import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import { Login } from "./components/layout/auth/Login";
import { Register } from "./components/layout/auth/Register";
import { Landing } from "./components/layout/Landing";
import { Navbar } from "./components/layout/Navbar";

const App = () => (
  <Router>
    <Navbar />
    <Route exact path="/" component={Landing} />
    <section className="contianer">
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </section>
  </Router>
);

export default App;
