import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { Landing } from "./components/Landing";
import { Navbar } from "./components/Navbar";
import Alert from "./components/layout/Alert";
import { loadUser } from "./redux/actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) setAuthToken(localStorage.token);

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="contianer">
          <Alert />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </section>
      </Router>
    </Provider>
  );
};

export default App;
