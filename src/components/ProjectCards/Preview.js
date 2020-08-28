import React from "react";
import styled from "styled-components";
import Photo from "../Photo/Photo";
import colours from "../../colours.json";
import HorizontalGrid from "../Layouts/HorizontalGrid";
import SocialMedia from "../Photo/SocialMedia";
import GitImage from "../../images/git.png";
import Devpost from "../../images/devpost.png";

const Container = styled.div`
  background-color: white;
  padding: 2%;
  width: 50%;
  overflow-wrap: break-word;
  display: flex;
  align-items: center;
  height: 65vh;
  height: 65vh;
`;
export default (props) => {
  return (
    <Container>
      <div
        style={{
          height: "100%",
          padding: "10%",
          display: "table",

          // display: "flex",
          // flexDirection: "column",
          // alignItems: "flex-end",
        }}
      >
        <div
          style={{
            //display: "flex",
            // flexDirection: "column",
            // verticalAlign: "center",
            position: "relative",
            alignItems: "flex-start",
            //top: 0,
            //height: "200px",
            bottom: 20,
            //padding: "10%",
          }}
        >
          <Photo style={{ height: "200px" }} src={props.img}></Photo>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            verticalAlign: "center",
            flex: 1,
          }}
        >
          <h3 style={{ color: colours.main }}>{props.title}</h3>
          <p style={{ color: colours.secondary }}>{props.description}</p>
        </div>
        <div
          style={{
            flex: 1,
            // position: "absolute",
            // bottom: 0,
            //width: "25%",
            //display: "relative",
            verticalAlign: "space-around",
            float: "bottom",
            alignSelf: "end",
            display: "table-footer-group",
          }}
        >
          <HorizontalGrid style={{ zIndex: 1 }}>
            {props.git ? (
              <SocialMedia src={GitImage} link={props.git}></SocialMedia>
            ) : (
              <></>
            )}
            {props.devpost ? (
              <SocialMedia src={Devpost} link={props.devpost}></SocialMedia>
            ) : (
              <></>
            )}
          </HorizontalGrid>
        </div>
      </div>
    </Container>
  );
};
