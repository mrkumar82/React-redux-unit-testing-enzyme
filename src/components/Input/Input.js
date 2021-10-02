import React from "react";
import { connect } from "react-redux";

function Input(props) {
  const contents = props.success ? null : (
    <div data-test="input-component">
      <form>
        <input type="text" data-test="input-field" />
        <button type="submit" data-test="input-submit">
          Submit
        </button>
      </form>
    </div>
  );

  return <div>{contents}</div>;
}

const mapStateToProps = ({ success }) => {
  return { success: true };
};

// export default Input;
export default connect(mapStateToProps)(Input);
