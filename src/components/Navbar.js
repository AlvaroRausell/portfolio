import React from "react"
import { Link } from "react-scroll"
import HorizontalGrid from "./Layouts/HorizontalGrid"
import styled from "styled-components"
import colours from "../colours.json"
const Navbar = styled.div`
  position: sticky;
  margin: 0;
  left: 25%;
  padding: 0;
  top: 0;
  background-color: white;
  height: 10vh;
  color: ${colours.secondary};
  box-shadow: 0px 10px 28px -11px rgba(0, 0, 0, 0.75);
  .active {
    color: ${colours.accent};
  }
`

export default props => {
  return (
    <Navbar>
      <HorizontalGrid>
        <Link to="Home" spy={true} smooth={true} offset={-100} duration={500}>
          <p>Home</p>
        </Link>
        <Link
          to="Projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <p>Projects</p>
        </Link>
        <Link
          activeClass="active"
          to="Projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p>About Me</p>
        </Link>{" "}
        <Link
          to="Projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p>Blog</p>
        </Link>{" "}
        <Link
          to="Projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p>Contact</p>
        </Link>
      </HorizontalGrid>
    </Navbar>
  )
}
