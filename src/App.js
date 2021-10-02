import Congrats from "./components/Congrats/Congrats";
import Counter from "./components/counter/Counter";
import GuessedWords from "./components/GuessedWords/GuesedWords";
import Input from "./components/Input/Input";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Testing with Jest</h1>
      <Input />

      {/* <Counter /> */}
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[
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
        ]}
      />
    </div>
  );
}
