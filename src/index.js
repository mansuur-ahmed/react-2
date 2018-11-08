import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./components/App";
import loginReducer from "./reducers/loginReducer";

import "./styles.css";

const spaStore = createStore(
  loginReducer,
  composeWithDevTools(applyMiddleware(logger))
);

ReactDOM.render(
  <Provider store={spaStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

/*
STORE: {loggedIn:false}

ACTIONS:
{type:"LOGIN"}
{type:"LOGOUT"}

*/
