import React, { Component } from "react";
import { connect } from "react-redux";
import { loginAction } from "../../redux/actions/loginAction";
import { withRouter } from 'react-router-dom';
import '../../scss/login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      emailErrorStatus: false,
      passwordErrorStatus: false,
    };
  }
  validate = () => {
    let isError = false;
    const error = {
      emailError: "",
      passwordError: "",
      emailErrorStatus: "",
      passwordErrorStatus: "",
    };
    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      error.emailErrorStatus = true;
      error.emailError = "Provide a valid email";
    }
    if (this.state.password.length == 0) {
      isError = true;
      error.passwordErrorStatus = true;
      error.passwordError = "Provide a password";
    }
    this.setState({
      ...this.state,
      ...error,
    });
    return isError;
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const error = this.validate();
    if (!error) {
      const data = {
        email: this.state.email,
        password: this.state.password,
      };
      await this.props.loginAction(data, this.props.history);
    }
  };

  change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="login">
        <form onSubmit={(e) => this.onSubmit(e)}>
        <p
          id="loading"
          style={{ color: "#fff", display: this.props.loginState.loading }}
        >
          loading...{" "}
        </p>
          <h1>Log in</h1>
          <span style={{color: "#fff"}}>{ this.props.loginState.error} <br/></span>
          <input
            type="email"
            name="email"
            id="email"
            aria-label="email"
            placeholder="Email"
            onChange={(e) => this.change(e)}
          />
          <br />
          <span style={{ color: "#fff" }}>{this.state.emailError}</span>
          <br /> <br />
          <input
            type="password"
            id="password"
            aria-label="password"
            name="password"
            placeholder="Password"
            onChange={(e) => this.change(e)}
          />
          <br />
          <span style={{ color: "#fff" }}>{this.state.passwordError}</span>
          <br />
          <br />
          <input
            type="submit"
            id="button"
            value="LOGIN"
            aria-label="login"
            className="login-btn"
          />
          <br />
          <br />
          <a href="">Forgot Password?</a>
          <br />
          <br />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginState: state.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (data, history) => dispatch(loginAction(data, history)),
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
