import React from "react";
import styled from "styled-components";
import colours from "../colours.json";
import Layout from "../components/Layouts/Layout";
import Subtitle from "../components/text/Subtitle";
import Title from "../components/text/Title";

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
        <Subtitle style={{ color: "white" }}>Contact Me</Subtitle>
        <Subtitle style={{ color: "#e8e8e8" }}></Subtitle>
        <Text>
          Feel free to get in touch via e-mail at:{" "}
          <a href="mailto:alvaro.rausellg@gmail.com">
            alvaro.rausellg@gmail.com
          </a>
        </Text>
      </div>
    </Layout>
  );
};
