import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.char}</button>
      <button>{props.value}</button>
    </>
  );
};

export default OperatorButton;