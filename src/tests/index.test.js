import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import store from "../redux/store.js";
import "@testing-library/jest-dom";

const AppComponent = () => {
  return render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};
describe("APP", () => {
  it("should render the app component", () => {
    const { asFragment } = AppComponent();
    expect(asFragment(<App />)).toMatchSnapshot();
  });
});


