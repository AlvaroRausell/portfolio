import React from "react";
import Layout from "../components/Layouts/Layout";
import colours from "../colours.json";
import Title from "../components/text/Title";
import Preview from "../components/ProjectCards/Preview";
import HorizontalGrid from "../components/Layouts/HorizontalGrid";
import Carousel from "react-bootstrap/Carousel";
import projects from "../utils/projects";

function Projects(props) {
  const projectChunks = [];

  let chunk = [];
  for (let i = 0; i < projects.length; i++) {
    chunk.push(projects[i]);
    if (
      chunk.length === props.projectsPerCarousel ||
      i === projects.length - 1
    ) {
      projectChunks.push(chunk);
      chunk = [];
    }
  }
  return (
    <Layout>
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: colours.secondary,
          textAlign: "center",
        }}
      >
        <Title style={{ color: "white" }}>Projects</Title>
        {projectChunks.map((chunk) => {
          return (
            <HorizontalGrid>
              {chunk.map((project) => {
                return (
                  <Preview
                    showModal={props.showModal}
                    hideModal={props.hideModal}
                    img={project.img}
                    title={project.title}
                    description={project.description}
                    git={project.git}
                    devpost={project.devpost}
                    info={project.info}
                    key={project.name}
                    tags={project.tags}
                    awards={project.awards}
                    otherDistinctions={project.otherDistinctions}
                  ></Preview>
                );
              })}
            </HorizontalGrid>
          );
        })}
        {/* </div> */}
      </div>
    </Layout>
  );
}

export default Projects;
