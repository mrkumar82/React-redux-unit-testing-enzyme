import checkPropTypes from "check-prop-types";
import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};

export const findByAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};
export const checkproppype = (Component, expectedProps) => {
  const propError = checkPropTypes(
    Component.propTypes,
    expectedProps,
    "prop",
    Component.name
  );
  expect(propError).toBeUndefined();
};
