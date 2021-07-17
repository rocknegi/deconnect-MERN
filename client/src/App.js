import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Redux
import { Provider } from "react-redux";

import store from "./store";
import "./App.css";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import { loadUser } from "./redux/actions/auth";
import setAuthToken from "./utils/setAuthToken";
import { Routes } from "./components/routing/Routes";

if (localStorage.token) setAuthToken(localStorage.token);

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={Routes} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
