import React, { Component } from "react";
import Userlogout from '../Logout';
import "../../scss/dashboard.scss"

export default class Dashboard extends Component {
  render() {
      return (
          <div className='dashboard'>
              
              <Userlogout/>
              <h1>Logged in successfully</h1>
          </div>
      )
 
  }
}
