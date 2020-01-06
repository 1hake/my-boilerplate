import React from "react";
import { Provider } from "react-redux";
import store from "./reducer";
import Main from "./layout/Main";

function Setup(props) {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default Setup;
