import React from "react";
import styled from "styled-components";
import { usePalette } from "react-palette";

import Photo from "../Photo/Photo";
import colours from "../../colours.json";
import HorizontalGrid from "../Layouts/HorizontalGrid";
import SocialMedia from "../Photo/SocialMedia";
import GitImage from "../../images/git.png";
import Devpost from "../../images/devpost.png";
import Info from "../../images/info.png";
import Tag, { WinnerTag } from "../text/Tag";
import TagContainer from "../text/TagContainer";
import { useMediaQuery } from "react-responsive";

const ProjectContainer = styled.div`
  position: relative;
  display: table;
  height: 25rem;
  margin-bottom: 2rem;
  width: 20rem;
  border-radius: 20px;
  @media only screen and (min-width: 900px) {
    & .text-container {
      opacity: 0;
    }
    &:hover {
      & > div {
        opacity: 0;
        animate: opacity;
        transition: 0.15s;
      }
      & .text-container {
        opacity: 1;
      }
    }
  }
`;

const TextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  top: 0;
  z-index: 0;
  padding: 1%;
  height: 100%;
`;

export default (props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 900px)",
  });
  const { data } = usePalette(props.img);
  //console.log(props.otherDistinctions);
  return (
    <ProjectContainer
      style={{
        backgroundColor: data.darkVibrant || "#424D43",
        height: isDesktopOrLaptop ? "25rem" : "30rem",
      }}
    >
      {isDesktopOrLaptop ? (
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Photo src={props.img} style={{ height: "27vh" }}></Photo>
        </div>
      ) : (
        <></>
      )}
      <TextContainer className="text-container">
        {!isDesktopOrLaptop ? (
          <div
            style={{
              height: "20%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "auto",
            }}
          >
            <Photo src={props.img} style={{ height: "27vh" }}></Photo>
          </div>
        ) : (
          <></>
        )}
        <h3
          style={{
            color: "white" || data.lightMuted || colours.secondary,
            fontWeight: "bold",
            marginTop: "auto",
          }}
        >
          {props.title}
        </h3>
        {props.tags || props.awards || props.otherDistinctions ? (
          <TagContainer tags={props.tags}>
            {props.awards ? (
              props.awards.map((award) => <WinnerTag>{award}</WinnerTag>)
            ) : (
              <></>
            )}
            {props.otherDistinctions ? (
              props.otherDistinctions.map((distinction) => (
                <Tag style={{ backgroundColor: distinction.color }}>
                  {distinction.text}
                </Tag>
              ))
            ) : (
              <></>
            )}
          </TagContainer>
        ) : (
          <></>
        )}

        <p
          style={{
            color: "white",
            margin: "auto",
            fontSize: "large",
          }}
        >
          {props.description}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            zIndex: 1,
            marginTop: "auto",
          }}
        >
          {props.git ? (
            <SocialMedia
              src={GitImage}
              link={props.git}
              modal={props.info}
            ></SocialMedia>
          ) : (
            <></>
          )}
          {props.info ? (
            <SocialMedia
              src={Info}
              onClick={() => props.showModal(props.title, props.info)}
            ></SocialMedia>
          ) : (
            <></>
          )}
          {props.devpost ? (
            <SocialMedia src={Devpost} link={props.devpost}></SocialMedia>
          ) : (
            <></>
          )}
        </div>
      </TextContainer>
    </ProjectContainer>
  );
};

// const ProjectContainer = styled.div`
//   background-color: white;
//   padding: 2%;
//   // width: 50%;
//   overflow-wrap: break-word;
//   display: flex;
//   align-items: center;
//   height: 70vh;
// `;

// export default (props) => {
//   return (
//     <Container>
//       <div
//         style={{
//           height: "100%",
//           padding: "10%",
//           display: "table",

//           // display: "flex",
//           // flexDirection: "column",
//           // alignItems: "flex-end",
//         }}
//       >
//         <div
//           style={{
//             //display: "flex",
//             // flexDirection: "column",
//             // verticalAlign: "center",
//             position: "relative",
//             alignItems: "flex-start",
//             //top: 0,
//             //height: "200px",
//             bottom: 20,
//             //padding: "10%",
//           }}
//         >
//           <Photo style={{ height: "200px" }} src={props.img}></Photo>
//         </div>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             verticalAlign: "center",
//             flex: 1,
//           }}
//         >
//           <h3 style={{ color: colours.main }}>{props.title}</h3>
//           <p style={{ color: colours.secondary }}>{props.description}</p>
//         </div>
//         <div
//           style={{
//             flex: 1,
//             // position: "absolute",
//             // bottom: 0,
//             //width: "25%",
//             //display: "relative",
//             verticalAlign: "space-around",
//             float: "bottom",
//             alignSelf: "end",
//             display: "table-footer-group",
//           }}
//         >
//           <HorizontalGrid style={{ zIndex: 1 }}>
//             {props.git ? (
//               <SocialMedia
//                 src={GitImage}
//                 link={props.git}
//                 modal={props.info}
//               ></SocialMedia>
//             ) : (
//               <></>
//             )}
//             {props.info ? (
//               <SocialMedia
//                 src={Info}
//                 onClick={() => props.showModal(props.title, props.info)}
//               ></SocialMedia>
//             ) : (
//               <></>
//             )}
//             {props.devpost ? (
//               <SocialMedia src={Devpost} link={props.devpost}></SocialMedia>
//             ) : (
//               <></>
//             )}
//           </HorizontalGrid>
//         </div>
//       </div>
//     </Container>
//   );
// };
