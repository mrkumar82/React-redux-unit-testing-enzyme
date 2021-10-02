import React from "react";
import PropTypes from "prop-types";

function GuessedWords(props) {
  let content;
  if (props.guessedWords?.length === 0) {
    content = (
      <span data-test="guessed-instruction"> Try to guess the secret word</span>
    );
  } else {
    const gwords = props.guessedWords?.map((item, index) => (
      <tr data-test="guessed-words-s" key={index}>
        <td>{item.guessedWord}</td>
        <td>{item.letterMatchCount}</td>
      </tr>
    ));

    content = (
      <div data-test="guessed-words-sec">
        <h3></h3>
        <table border="1" cellPadding="5" cellSpacing="0">
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{gwords}</tbody>
        </table>
      </div>
    );
  }

  return <div data-test="guessed-words">{content}</div>;
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string,
      letterMatchCount: PropTypes.number
    })
  )
};
export default GuessedWords;
