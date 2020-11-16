import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from "react-redux";
import store from "../redux/store.js";
import Search from '../components/landingPage/Search';

const search=()=>{
    return render(
       <Provider store={store}>
       <Search />
       </Provider>
    )
}

describe("Search",()=>{
    it("should render the component",()=>{
        const { asFragment }=search();
        expect(asFragment(<Search />)).toMatchSnapshot()
    });
})