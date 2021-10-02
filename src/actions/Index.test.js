import { correctGuess, actionTypes } from "./Index";

describe("correctGuess", () => {
  test("reutn an action with type correct guess", () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
