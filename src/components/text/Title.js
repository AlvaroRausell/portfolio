import React from "react";
import colours from "../../colours.json";
import { useMediaQuery } from "react-responsive";

export default (props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });

  const isUltrawide = useMediaQuery({
    query: "(min-width: 1500px)",
  });
  const isWindowNarrow = useMediaQuery({ query: "(max-height: 700px)" });

  return (
    <h1
      style={{
        color: colours.main,
        fontSize: isWindowNarrow
          ? "250%"
          : isDesktopOrLaptop
          ? "450%"
          : isUltrawide
          ? "600%"
          : "300%",
        ...props.style,
      }}
    >
      {props.children}
    </h1>
  );
};
