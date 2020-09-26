import React from "react";
import styled from "styled-components";
import Layout from "../components/Layouts/Layout";
import colours from "../colours.json";
import Title from "../components/text/Title";
import Photo from "../components/Photo/Photo";
import Picture from "../images/aboutme.jpg";
import HorizontalDivider from "../components/text/HorizontalDivider";
import ItemList from "../components/text/ItemList";
import workExperience from "../utils/workExperience";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import TagContainer from "../components/text/TagContainer";
import Tag from "../components/text/Tag";

const Text = styled.p`
  font-size: 150%;
  span {
    color: ${colours.accent};
    font-weight: bold;
  }
`;
const SectionTitle = styled.p`
  color: ${colours.main};
  font-size: 300%;
  font-weight: bold;
`;
const SectionSubtitle = styled.p`
  color: ${colours.secondary};
  font-size: 200%;
  font-weight: bold;
`;

export default (props) => {
  return (
    <Layout>
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        <Title style={{ color: colours.main }}>About Me</Title>
        <div
          style={{
            width: props.isWindowNarrow
              ? "60%"
              : props.isDesktoporLaptop
              ? "30%"
              : props.isUltrawide
              ? "20%"
              : "40%",
            margin: "auto",
          }}
        >
          <Photo
            src={Picture}
            style={{
              border: `thick solid ${colours.accent}`,
              borderRadius: "50%",
            }}
          ></Photo>
        </div>
        <div style={{ width: "75%", margin: "auto", marginTop: "2rem" }}>
          <SectionTitle>Hi!</SectionTitle>
          <Text>
            <br></br>I'm <span>Álvaro Rausell Guiard</span>, a computer science
            student student from Spain.<br></br> My interests revolve around
            software engineering and playing around with hardware. I specially
            enjoy <span>IoT</span> and <span>automation</span>, but you can see
            me working on <span>frontend</span>, <span>machine learning</span>,
            and <span>game development</span>.
          </Text>
          <SectionTitle>Studies</SectionTitle>
          <SectionSubtitle>
            BSc. Computer Science with a Year in Industry at King's College
            London
          </SectionSubtitle>
          <ItemList
            items={[
              <span>First Class Average (80%)</span>,
              <>
                Specialised in <span>Artifical Intelligence</span>
              </>,
              <>
                <b style={{ color: colours.main }}>Modules Include</b>
                <br></br>
                <span>
                  Artifical Intelligence Planning, Operating Systems and
                  Concurrency, and Logic Design
                </span>
              </>,
            ]}
          ></ItemList>
          <SectionTitle>Work Experience</SectionTitle>
          <Timeline>
            {workExperience.map((job) => (
              <>
                <TimelineItem dateText={job.date} key={job.title}>
                  <SectionTitle>{job.company}</SectionTitle>
                  <SectionSubtitle>{job.title}</SectionSubtitle>
                  {job.jobDescription.map((description) => (
                    <Text>{description}</Text>
                  ))}
                  {job.skills.length > 0 ? (
                    <>
                      <Text style={{ textAlign: "center", fontSize: "200%" }}>
                        <span>Skills</span>
                      </Text>
                      <TagContainer>
                        {job.skills.map((skill) => (
                          <Tag style={{ backgroundColor: colours.main }}>
                            {skill}
                          </Tag>
                        ))}
                      </TagContainer>
                    </>
                  ) : (
                    <></>
                  )}
                  {job.images ? (
                    job.images.map((image) => (
                      <Photo style={{ width: "100%" }} src={image}></Photo>
                    ))
                  ) : (
                    <></>
                  )}
                </TimelineItem>
              </>
            ))}
          </Timeline>
        </div>
      </div>
    </Layout>
  );
};
