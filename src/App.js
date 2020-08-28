import React from "react";
import Particles from "./P5/Particles";
import { useMediaQuery } from "react-responsive";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar";
import typography from "./utils/typography";
import MediaQueries from "./utils/Hooks";
import { GoogleFont, TypographyStyle } from "react-typography";
import projects from "./utils/projects";
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projectsPerCarousel: 2, projects: { activeIndex: 0 } };
  }
  setSlideNumber = () => {
    const projectsPerCarousel = this.state.isWindowNarrow
      ? 1
      : this.state.isUltrawide
      ? 5
      : this.state.isDesktopOrLaptop
      ? 3
      : 2;
    if (this.state.projectsPerCarousel !== projectsPerCarousel)
      this.setState({
        projectsPerCarousel,
      });
    if (
      this.state.projects.activeIndex >=
      projects.length / projectsPerCarousel
    ) {
      this.setState({
        projects: { activeIndex: 0 },
      });
      this.forceUpdate();
    }
    return projectsPerCarousel;
  };

  render() {
    return (
      <>
        <MediaQueries
          exportMediaQueries={(
            isDesktopOrLaptop,
            isUltrawide,
            isWindowNarrow
          ) => {
            if (
              isDesktopOrLaptop !== this.state.isDesktopOrLaptop ||
              isUltrawide !== this.state.isUltrawide ||
              isWindowNarrow !== this.state.isWindowNarrow
            ) {
              console.log({ isDesktopOrLaptop, isUltrawide, isWindowNarrow });
              this.setState({ isDesktopOrLaptop, isUltrawide, isWindowNarrow });
            }
          }}
        ></MediaQueries>
        <TypographyStyle typography={typography}></TypographyStyle>
        <GoogleFont typography={typography}></GoogleFont>
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
          <Particles
            numParticles={this.state.isDesktopOrLaptop ? 200 : 50}
          ></Particles>
        </div>
        <Element name="Home">
          <Home></Home>
        </Element>
        <Element name="Projects">
          <Projects
            activeIndex={this.state.activeIndex}
            onSlide={(index, _) => {
              this.setState({
                projects: { activeIndex: index },
              });
            }}
            projectsPerCarousel={this.setSlideNumber()}
          ></Projects>
        </Element>
      </>
    );
  }
}
