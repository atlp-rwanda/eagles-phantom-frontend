import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const title = 'React with Webpack and Babel';
ReactDOM.render(
  <Provider store={store} >
    <App title={title} />
  </Provider>,
  document.getElementById("root")
);
module.hot.accept();
