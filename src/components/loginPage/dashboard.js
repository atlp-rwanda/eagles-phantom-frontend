import React, { Component } from "react";
import "../../scss/dashboard.scss"

export default class Dashboard extends Component {
  render() {
    if (localStorage.getItem('user-data') ){
      return (
          <div className='dashboard'>
              <h1>Logged In Successfull </h1>
          </div>
      )
  }
   return (
      <div className="dashboard">
      <h1>You are not logged in, Please Sign in first.</h1>
      </div>
    );
  }
}
