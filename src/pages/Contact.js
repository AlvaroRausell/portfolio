import React from "react";
import styled from "styled-components";
import colours from "../colours.json";
import Layout from "../components/Layouts/Layout";
import SocialMedia from "../components/Photo/SocialMedia";
import Subtitle from "../components/text/Subtitle";
import Title from "../components/text/Title";
import GitImage from "../images/git.png";
import Devpost from "../images/devpost.png";
import Linkedin from "../images/linkedin.png";

const Text = styled.p`
  font-size: 120%;
  color: white;
  span {
    color: ${colours.accent};
    font-weight: bold;
  }
  a {
    color: ${colours.accent};
    font-weight: bold;
  }
`;
export default (props) => {
  return (
    <Layout>
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: colours.tertiary,
          textAlign: "center",
        }}
      >
        <Subtitle style={{ color: "white" }}>Contact</Subtitle>
        <Subtitle style={{ color: "#e8e8e8" }}></Subtitle>
        <Text>
          Feel free to get in touch via e-mail at:{" "}
          <a href="mailto:alvaro.rausellg@gmail.com">
            alvaro.rausellg@gmail.com
          </a>
        </Text>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            zIndex: 1,
            margin: "auto",
            width: "25%",
          }}
        >
          <SocialMedia
            link="https://github.com/AlvaroRausell/"
            src={GitImage}
          ></SocialMedia>
          <SocialMedia
            link="https://devpost.com/AlvaroRausell"
            src={Devpost}
          ></SocialMedia>
          <SocialMedia
            link="https://www.linkedin.com/in/alvarorausell/"
            src={Linkedin}
          ></SocialMedia>
        </div>
      </div>
    </Layout>
  );
};
