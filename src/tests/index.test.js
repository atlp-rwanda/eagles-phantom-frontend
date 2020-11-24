import React from "react";
import {render} from "@testing-library/react";
import App from "../App";
import { BrowserRouter as Router } from 'react-router-dom'

const AppComponent = () => {
  return render(
    <Router>
    <App />
    </Router>
    )
}

describe('APP', () => {
  it('should render the component', () => {
      const { asFragment } = AppComponent();
      expect(asFragment(<App/>)).toMatchSnapshot();
    })
})
