import React from "react";
import Congrats from "./Congrats";
import { findByAttr, checkproppype } from "../../Utils/Utils";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

const setup = (props = {}, state = null) => {
  return shallow(<Congrats {...props} />);
};

test("Renders without error", () => {
  const wrapper = setup();
  const component = findByAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("Should not render when props is false ", () => {
  const wrapper = setup({ success: false });
  const component = findByAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});
test("Renders non empty congrats message when success props is true ", () => {
  const wrapper = setup({ success: true });
  const component = findByAttr(wrapper, "congrats-message");
  expect(component.text().length).not.toBe(0);
});

test("doesnt throw warning with expected props", () => {
  const expectedProps = { success: false };
  checkproppype(Congrats, expectedProps);
});
