import React from "react";
import colours from "../../colours.json";
export default (_) => {
  return (
    <hr
      style={{
        border: "none",
        height: "3px",
        color: colours.tertiary,
        margin: "1rem auto",
        width: "100px",
      }}
    ></hr>
  );
};
