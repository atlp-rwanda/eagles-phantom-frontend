import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/loginPage/login";
import Logout from "./components/Logout"
import Dashboard from "./components/loginPage/dashboard";
import Error from './components/Error';
import Home from './components/landingPage/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import '../src/scss/index.scss';


class App extends Component {
  render() {
    return (
      
      <div>
        <BrowserRouter>
          
          <Switch>
            <Route exact path="/" component={Home}>
              <Home />
            </Route>
            <Route path="/about" component={AboutUs}>
            </Route>
            <Route path='/contact' component={ContactUs} >
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            {/* <Route component={Error}>
            </Route> */}
            <Route path="/dashboard">
              <Dashboard />
              
            </Route>
            <Route path="/logout" component="Logout">
              <Logout />
            </Route>
          </Switch>
          
        </BrowserRouter>
      </div>
      
    );
  }
}

export default App;



