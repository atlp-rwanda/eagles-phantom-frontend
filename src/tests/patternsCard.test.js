import React from 'react';
import { Provider } from "react-redux";
import store from "../redux/store.js";
import { render } from '@testing-library/react';
import PatternsCard from '../components/landingPage/PatternsCard';

const patternsCard=()=>{
    return render(
       <Provider store={store}>
       <PatternsCard />
       </Provider>
    )
}
describe("PatternsCard",()=>{
    it("shoould render the component",()=>{
        const { asFragment }=patternsCard();
        expect(asFragment(<PatternsCard />)).toMatchSnapshot()
    });
})