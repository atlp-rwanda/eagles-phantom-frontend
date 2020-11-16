import React from 'react';
import { Provider } from "react-redux";
import store from "../redux/store.js";
import { render } from '@testing-library/react';
import Navbar from '../components/landingPage/Navbar';

const navBar=()=>{
    return render(
       <Provider store={store}>
       <Navbar />
       </Provider>
    )
}

describe("Navbar",()=>{
    it("should render the component",()=>{
        const { asFragment }=navBar();
        expect(asFragment(<Navbar />)).toMatchSnapshot()
    });
})