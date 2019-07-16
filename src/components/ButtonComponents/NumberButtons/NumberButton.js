import React from "react";
import "./NumberButton.css";

// const NumberButton = (props) => {
//   return (
//     <>
//       {/* Display a button element rendering the data being passed down from the parent container on props */}
//       <button>{props.number}</button>
//     </>
//   );
// };

const NumberButton = ({ number }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="numberButton">{number}</button>
    </>
  );
};

export default NumberButton;