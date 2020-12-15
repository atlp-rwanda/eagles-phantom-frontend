import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Form,
  Col,
  Button,
  Badge,
  Spinner,
  InputGroup,
  FormControl,
} from "react-bootstrap/";
import NavigationBar from "../../components/layouts/NavigationBar";
import Footer from '../layouts/Footer';
import { registrationAction } from "../../redux/actions/registrationAction";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstname: "",
      lastname: "",
      gender: "",
      address: "",
      role: "",
      dateofbirth: "",
      emailError: "",
      firstnameError: "",
      lastnameError: "",
      genderError: "",
      addressError: "",
      roleError: "",
      dateofbirthError: "",
      emailErrorStatus: false,
      firstnameErrorStatus: false,
      lastnameErrorStatus: false,
      genderErrorStatus: false,
      addressErrorStatus: false,
      roleErrorStatus: false,
      dateofbirthErrorStatus: false,
    };
  }

  handleSubmit = () => {
    this.setState(() => this.initialState);
  };

  validation = () => {
    let isError = false;

    const errors = {
      emailError: "",
      firstnameError: "",
      lastnameError: "",
      genderError: "",
      addressError: "",
      roleError: "",
      dateofbirthError: "",
      emailErrorStatus: false,
      firstnameErrorStatus: false,
      lastnameErrorStatus: false,
      genderErrorStatus: false,
      addressErrorStatus: false,
      roleErrorStatus: false,
      dateofbirthErrorStatus: false,
    };

    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailErrorStatus = true;
      errors.emailError = "Provide a valid email";
    }

    if (this.state.firstname.length <= 3) {
      console.info("VALUE", `this is the firstname ${this.state.firstname}`);
      isError = true;
      errors.firstnameErrorStatus = true;
      errors.firstnameError = "over 3 characters required";
    }

    if (this.state.lastname.length <= 3) {
      isError = true;
      errors.lastnameErrorStatus = true;
      errors.lastnameError = "over 3 characters required";
    }
    if (this.state.gender.length <= 3) {
      isError = true;
      errors.genderErrorStatus = true;
      errors.genderError = "over 3 characters required";
    }
    if (this.state.address.length <= 3) {
      isError = true;
      errors.addressErrorStatus = true;
      errors.addressError = "over 3 characters required";
    }
    if (this.state.role.length <= 3) {
      isError = true;
      errors.roleErrorStatus = true;
      errors.roleError = "over 3 characters required";
    }
    if (this.state.dateofbirth.length <= 3) {
      isError = true;
      errors.dateofbirthErrorStatus = true;
      errors.dateofbirthError = "over 3 characters required";
    }

    this.setState({
      ...this.state,
      ...errors,
    });
    return isError;
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const error = this.validation();
    if (!error) {
      const data = {
        email: this.state.email,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        gender: this.state.gender,
        address: this.state.address,
        role: this.state.role,
        dateofbirth: this.state.dateofbirth,
      };
      await this.props.registrationAction(data);
    }
  };

  change = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <NavigationBar />
        {/* <p style={{ display: this.props.registrationState.loading }}>
          <Spinner animation="border" size="lg" />
        </p> */}
        <div id="registration">
          <div id="form">
            <form onSubmit={(e) => this.onSubmit(e)}>
              <h1>Registration</h1> <br />
              <label htmlFor="">Email</label>
              <br />
              <input
                type="email"
                name="email"
                aria-label="email"
                placeholder="email"
                onChange={(e) => this.change(e)}
              />{" "}
              <br />
              <Badge variant="danger">{this.state.emailError}</Badge>
              <br />
              <label htmlFor="">First name</label> <br />
              <input
                type="text"
                name="firstname"
                aria-label="firstname"
                placeholder="firstname"
                onChange={(e) => this.change(e)}
              />
              <br />
              <Badge variant="danger">{this.state.firstnameError}</Badge>
              <br />
              <label htmlFor="">Last name</label> <br />
              <input
                type="text"
                name="lastname"
                aria-label="lastname"
                placeholder="lastname"
                onChange={(e) => this.change(e)}
              />
              <br />
              <Badge variant="danger">{this.state.lastnameError}</Badge>
              <br />
              <label htmlFor="">Gender</label> <br />
              <select
                type="text"
                name="gender"
                aria-label="gender"
                placeholder="Gender"
                onChange={(e) => this.change(e)}
              >
                <option role="male">MALE</option>
                <option>FEMALE</option>
                <option>UNDEFINED</option>
              </select>
              <br />
              <Badge variant="danger">{this.state.genderError}</Badge>
              <br />
              <label htmlFor="">Address</label> <br />
              <input
                type="text"
                name="address"
                aria-label="address"
                placeholder="address"
                onChange={(e) => this.change(e)}
              />
              <br />
              <Badge variant="danger">{this.state.addressError}</Badge>
              <br />
              <label htmlFor="">Role</label> <br />
              <input
                type="text"
                name="role"
                aria-label="role"
                placeholder="role"
                onChange={(e) => this.change(e)}
              />
              <br />
              <Badge variant="danger">{this.state.roleError}</Badge>
              <br />
              <label htmlFor="">Date of Birth</label> <br />
              <input
                type="date"
                name="dateofbirth"
                aria-label="dateofbirth"
                placeholder="Date of birth"
                onChange={(e) => this.change(e)}
              />
              <br />
              <Badge variant="danger">{this.state.dateofbirthError}</Badge>
              <br />
              <input type="submit" value="SIGN UP" aria-label="signup" />
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    registrationState: state.registration,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registrationAction: (data) => dispatch(registrationAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
