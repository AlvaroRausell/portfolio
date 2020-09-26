import React from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar";
import typography from "./utils/typography";
import MediaQueries from "./utils/Hooks";
import { GoogleFont, TypographyStyle } from "react-typography";
import projects from "./utils/projects";
import Modal from "./components/ProjectCards/Modal";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsPerCarousel: 2,
      projects: { activeIndex: 0 },
      modal: { show: false, title: "", md: "" },
    };
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
              //console.log({ isDesktopOrLaptop, isUltrawide, isWindowNarrow });
              this.setState({ isDesktopOrLaptop, isUltrawide, isWindowNarrow });
            }
          }}
        ></MediaQueries>
        <TypographyStyle typography={typography}></TypographyStyle>
        <GoogleFont typography={typography}></GoogleFont>
        <Navbar></Navbar>
        <Element name="Home">
          <Home></Home>
        </Element>
        <Element name="Projects">
          <Modal
            title={this.state.modal.title}
            md={this.state.modal.md}
            show={this.state.modal.show}
            onHide={() =>
              this.setState({ modal: { show: false, title: "", md: "" } })
            }
          ></Modal>
          <Projects
            showModal={(title, md) => {
              this.setState({ modal: { show: true, title, md } });
            }}
            hideModal={() => {
              this.setState({ modal: { show: false, title: "", md: "" } });
            }}
            activeIndex={this.state.activeIndex}
            onSlide={(index, _) => {
              this.setState({
                projects: { activeIndex: index },
              });
            }}
            projectsPerCarousel={this.setSlideNumber()}
          ></Projects>
        </Element>
        <Element name="About Me">
          <AboutMe
            isDesktopOrLaptop={this.state.isDesktopOrLaptop}
            isUltrawide={this.state.isUltrawide}
            isWindowNarrow={this.state.isWindowNarrow}
          ></AboutMe>
        </Element>
        <Element name="Contact">
          <Contact></Contact>
        </Element>
      </>
    );
  }
}
