import React from 'react';
import { Provider } from "react-redux";
import store from "../redux/store.js";
import { render } from '@testing-library/react';
import ShortAbt from '../components/landingPage/ShortAbt';

const shortAbt=()=>{
    return render(
       <Provider store={store}>
       <ShortAbt />
       </Provider>
    )
}

describe("ShortAbt",()=>{
    it("shoould render the component",()=>{
        const { asFragment }=shortAbt();
        expect(asFragment(<ShortAbt />)).toMatchSnapshot()
    });
})