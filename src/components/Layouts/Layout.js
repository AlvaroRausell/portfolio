import React from "react";

export default (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
        flexDirection: "column",
        margin: "0% 0 0% 0",
        // height: "100vh",
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};
