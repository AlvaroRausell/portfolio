import React from "react";
import Particles from "./P5/Particles";
import Page from "./Page";
import { useMediaQuery } from "react-responsive";

export default () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 900px)",
  });
  return (
    <>
      <div
        style={{
          position: "absolute",
          zIndex: "-1",

          margin: 0,
          padding: 0,
          bottom: 0,
          overflow: "hidden",
        }}
      >
        <Particles numParticles={isDesktopOrLaptop ? 200 : 50}></Particles>
      </div>
      <Page></Page>
    </>
  );
};
