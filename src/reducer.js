import { applyMiddleware, createStore } from "redux";
import createLogger from "redux-logger";
import thunk from "redux-thunk";

const ACTIONS = {
  SET_ITEM: "SET_ITEM"
};

function reducer(state = { item: "rich" }, action) {
  switch (action.type) {
    case ACTIONS.SET_ITEM:
      return {
        ...state,
        item: action.data
      };
    default:
      return state;
  }
}

const logger = createLogger();

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
