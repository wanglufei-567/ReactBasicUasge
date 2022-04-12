import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";
import reduxToolModeStore from "./store/reduxToolModeStore";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    {/* <Provider store={reduxToolModeStore}>
      <App />
    </Provider> */}
  </StrictMode>,
  rootElement
);
