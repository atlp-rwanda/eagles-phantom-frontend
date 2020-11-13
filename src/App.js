import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/landingPage/Navbar";
import Footer from "./components/landingPage/Footer";
import Home from "./components/landingPage/Home";
import Login from "./components/loginPage/login";
import Dashboard from "./components/loginPage/dashboard";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component="Home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
