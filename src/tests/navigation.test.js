import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "../redux/store.js";
import Error from '../components/Error';
import Login from '../components/Login';
import { render } from '@testing-library/react';
import AboutUs from '../components/AboutUs.js';
import ContactUs from '../components/ContactUs';


const error = () => {
    return render(
      <Error />
    )
  };
  describe("Error",()=>{
    it("should render the component",()=>{
        const { asFragment }=error();
        expect(asFragment(<Error />)).toMatchSnapshot()
    });
});
const login=()=>{
    return render(
        <Login />
    )
};
describe("Login",()=>{
    it("should render the component",()=>{
        const { asFragment }=login();
        expect(asFragment(<Login />)).toMatchSnapshot()
    });
});
const about=()=>{
    return  render(
        <AboutUs />
    )
};
describe("AboutIs",()=>{
    it("should render the component",()=>{
        const { asFragment }=about();
        expect(asFragment(<AboutUs />)).toMatchSnapshot()
    })
});
const contact=()=>{
    return render(
        <ContactUs />
    )
};
describe("ContactUs",()=>{
    it("should render the Component",()=>{
        const { asFragment }=contact();
        expect(asFragment(<ContactUs />)).toMatchSnapshot()
    })
});

