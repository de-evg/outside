import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import { Normalize } from "styled-normalize";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import root from "./store/reducers/root";
import {GlobalStyle} from "./global-style";

const store = createStore(root, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle />
      <Normalize />  
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
