import React from "react";
import { useMediaQuery } from "react-responsive";

export default (props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  const isUltrawide = useMediaQuery({
    query: "(min-width: 1500px)",
  });
  const isWindowNarrow = useMediaQuery({ query: "(max-width: 700px)" });
  props.exportMediaQueries(isDesktopOrLaptop, isUltrawide, isWindowNarrow);
  return <></>;
};
