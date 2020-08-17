import React from "react"
import Particles from "../P5/Particles"
import { useMediaQuery } from "react-responsive"
import Home from "./Home"
import Projects from "./Projects"
import { Link, animateScroll as scroll, Element } from "react-scroll"
import Navbar from "../components/Navbar"

export default () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  })
  return (
    <>
      <Navbar></Navbar>

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
      <Element name="Home">
        <Home></Home>
      </Element>
      <Element name="Projects">
        <Projects></Projects>
      </Element>
    </>
  )
}
