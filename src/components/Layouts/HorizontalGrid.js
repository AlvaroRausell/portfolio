import React from "react";

export default (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "100%",

        // padding: "2%",
        // backgroundColor: "red",
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};
