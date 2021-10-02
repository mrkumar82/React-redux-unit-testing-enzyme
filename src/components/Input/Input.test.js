import React from "react";
import Enzyme, { shallow } from "enzyme";
import { findByAttr, storeFactory } from "../../Utils/Utils";
import Input from "./Input";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

const defaultProps = {
  guessedWords: [{ gussedWord: " train", letterMatchCount: 3 }]
};

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive();

  return wrapper;
};

describe("render component and children", () => {
  let wrapper;

  beforeEach(() => {
    const initialState = { success: false };
    wrapper = setup(initialState);
    console.log(wrapper.debug());
  });

  test("renders component without errors", () => {
    const component = findByAttr(wrapper, "input-component");
    expect(component.length).toBe(1);
  });

  test("renders the input box", () => {
    const input = findByAttr(wrapper, "input-field");
    expect(input.length).toBe(1);
  });
  test("renders the submit button", () => {
    const button = findByAttr(wrapper, "input-submit");
    expect(button.length).toBe(1);
  });
});

describe("render component and children", () => {
  let wrapper;

  beforeEach(() => {
    const initialState = { success: false };
    wrapper = setup(initialState);
    console.log(wrapper.debug());
  });
  test("word has been guessed", () => {});
  test("Render without error", () => {
    test("deosnt renders the input box", () => {});
    test("desnot renders the submit button", () => {});
  });
});
