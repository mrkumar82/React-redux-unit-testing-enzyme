import React from "react";
import PropeTypes from "prop-types";

function Congrats(props) {
  return (
    <>
      {props.success ? (
        <div data-test="component-congrats">
          <h2 data-test="congrats-message">
            Congratulationns you guessed the word
          </h2>
        </div>
      ) : (
        <div data-test="component-congrats" />
      )}
    </>
  );
}

Congrats.propTypes = {
  success: PropeTypes.bool
};

export default Congrats;
