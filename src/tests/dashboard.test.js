import React from 'react';
import Dashboard from '../components/loginPage/dashboard';
import {render } from '@testing-library/react'
import { Provider } from 'react-redux';
import {store} from '../redux/store';

const DashboardComponent = () => {
    return render(
            <Dashboard/>
    )
}

describe('test dashboard page', () =>{
    it('should render the dashboard component', () => {
        const { asFragment } = DashboardComponent();
        expect(asFragment(<Dashboard/>)).toMatchSnapshot();
    })
})