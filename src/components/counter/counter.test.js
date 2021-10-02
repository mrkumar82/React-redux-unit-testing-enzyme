import Counter from "./Counter";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByAttr } from "../../Utils/Utils";
Enzyme.configure({
  adapter: new EnzymeAdapter()
});

// const setup = (props = {}, state = null) => {
//   return shallow(<Counter {...props} />);
// };

// test("should render without error", () => {
//   const wrapper = setup();
//   const counter = findByAttr(wrapper, "counter");
//   expect(counter.length).toBe(1);
// });

// test("Render increment button", () => {
//   const wrapper = setup();
//   const button = findByAttr(wrapper, "increment-button");
//   expect(button.length).toBe(1);
// });

// test("render counter display", () => {
//   const wrapper = setup();
//   const counterdispaly = findByAttr(wrapper, "counter-display");
//   expect(counterdispaly.length).toBe(1);
// });

// test("conter start at 0", () => {
//   const wrapper = setup();
//   expect(wrapper.find("span").props().children).toBe(0);
// });

// test("increment counter dispaly", () => {
//   const wrapper = setup();
//   const btnIncrement = findByAttr(wrapper, "increment-button");
//   btnIncrement.simulate("click");
//   expect(wrapper.find("span").props().children).toBe(1);
// });
