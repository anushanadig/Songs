import React from "react";
import reactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";
import App from "./components/App";

reactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
