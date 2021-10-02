import React from "react";
import GuessedWords from "./GuesedWords";
import { findByAttr, checkproppype } from "../../Utils/Utils";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

const defaultProps = {
  guessedWords: [{ gussedWord: " train", letterMatchCount: 3 }]
};

const setup = (props = {}, state = null) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkproppype(GuessedWords, defaultProps);
});

describe("if no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("render wihout error ", () => {
    const component = findByAttr(wrapper, "guessed-words");
    expect(component.length).toBe(1);
  });

  test("render instruction to guess a word ", () => {
    const instruction = findByAttr(wrapper, "guessed-instruction");
    expect(instruction.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {
  const guessedwords = [
    {
      guessedWord: "train",
      letterMatchCount: 3
    },
    {
      guessedWord: "agile",
      letterMatchCount: 1
    },
    {
      guessedWord: "party",
      letterMatchCount: 4
    }
  ];
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: guessedwords });
  });
  test("render wihout error ", () => {
    const component = findByAttr(wrapper, "guessed-words");
    expect(component.length).toBe(1);
  });

  test("render guessed words section", () => {
    const guessedWordsNode = findByAttr(wrapper, "guessed-words-sec");
    expect(guessedWordsNode.length).toBe(1);
  });

  test("correct number of guessed words", () => {
    const guessedWordsNode = findByAttr(wrapper, "guessed-words-s");
    expect(guessedWordsNode.length).toBe(guessedwords.length);
  });
});
