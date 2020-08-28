import React from "react";
import Subtitle from "./Subtitle";
import Title from "./Title";
import VerticalGrid from "../Layouts/VerticalGrid";
import { useMediaQuery } from "react-responsive";
export default (props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  const isDesktopOrLaptopMax = useMediaQuery({
    query: "(max-width:  1500px)",
  });

  return (
    <VerticalGrid>
      <div
        style={{
          textAlign: "center",
          backgroundColor:
            isDesktopOrLaptop && isDesktopOrLaptopMax ? "transparent" : "white",
          borderRadius: "20px",
          padding: "5%",
        }}
      >
        <Title>{props.title}</Title>
        <Subtitle>{props.children}</Subtitle>
      </div>
    </VerticalGrid>
  );
};
