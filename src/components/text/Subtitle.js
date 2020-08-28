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
    <h3
      style={{
        color: colours.secondary,
        fontSize: isWindowNarrow
          ? "110%"
          : isDesktopOrLaptop
          ? "200%"
          : isUltrawide
          ? "250%"
          : "150%",
        ...props.style,
      }}
    >
      {props.children}
    </h3>
  );
};
