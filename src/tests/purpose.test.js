import React from 'react';
import { Provider } from "react-redux";
import store from "../redux/store.js";
import { render } from '@testing-library/react';
import Purpose from '../components/landingPage/Purpose';

const purpose=()=>{
    return render(
       <Provider store={store}>
       <Purpose />
       </Provider>
    )
}
describe("Purpose",()=>{
    it("shoould render the component",()=>{
        const { asFragment }=purpose();
        expect(asFragment(<Purpose />)).toMatchSnapshot()
    });
})