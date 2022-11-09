import React from "react";

function CustomizedImageFrame(props) {
  return (
    <img
      src={props.image}
      alt="Japan"
      style={{ width: "400px", border: "4px solid red" }}
    />
  );
}

export default CustomizedImageFrame;
