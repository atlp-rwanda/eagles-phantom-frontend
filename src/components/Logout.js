import React, { Component } from 'react';
import { connect } from 'react-redux';
import {logout} from '../redux/actions/authLogout';
import { withRouter } from 'react-router-dom'
import '../scss/logout.scss';


class Logout extends Component {


    render() {
        if(localStorage.getItem("token")){
        return (
            <div>
                <button className="logout" onClick={()=>this.props.logout(this.props.history)}>LOGOUT</button>
            </div>
        )
    }
    return (
        <div>
            <h1> Please Sign in first!</h1>
        </div>
    )
}
}
const mapStateToProps = (state) => {
    return {
      logoutState: state.logout,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      logout: (history) => dispatch(logout(history))
    }
  }
  
  export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Logout)
    
  );