import React from 'react';
import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import { logoutAction, logoutRequest, logoutSuccess, logoutError } from '../redux/actions/authLogout';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import userEvent from '@testing-library/user-event';
import store from "../redux/store.js";
import Logout from "../components/Logout"

const LogoutComponent = () => {
    return render(
      <Provider store={store} >
        <Router>
      <Logout />
      </Router>
    </Provider>
    )
  }

  describe('Test Logout', ()=>{
   

    it('Capturing Snapshot of Logout', () => {
        const renderedValue = LogoutComponent()
        expect(renderedValue).toMatchSnapshot();
    });

    it('should test action for logoutRequest', ()=>{
        expect(logoutRequest()).toHaveProperty('type')
    })

    it('should test action for logoutSuccess', ()=>{
        const data = {
            message: "test logout"
        }
        expect(logoutSuccess(data)).toHaveProperty('payload')
    })

    it('should test action for logoutError', ()=>{
        const error = {
            message: "test failed"
        }
        expect(logoutError(error)).toHaveProperty('payload')
    })
    
    
})