import React, { Component } from 'react'
import App from "../App"
import LogoutPage from "../pages/LogoutPage";
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';


export default class routers extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path ="/" exact component={App} /> 
                        <Route path ="/logout" exact component={LogoutPage} /> 
                    </Switch>
                </Router>
            </div>
        )
    }
}
