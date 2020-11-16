import React from 'react';
import { Provider } from "react-redux";
import store from "../redux/store.js";
import { render } from '@testing-library/react';
import Patterns from '../components/landingPage/Patterns';

const patterns=()=>{
    return render(
       <Provider store={store}>
       <Patterns />
       </Provider>
    )
}
describe("Patterns",()=>{
    it("shoould render the component",()=>{
        const { asFragment }=patterns();
        expect(asFragment(<Patterns />)).toMatchSnapshot()
    });
});

