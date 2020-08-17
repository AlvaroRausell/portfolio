import React from "react"
import Photo from "../components/Photo/ProfilePhoto"
import profilePicture from "../images/profile.jpg"
import Layout from "../components/Layouts/Layout"
import FullTitle from "../components/text/FullTitle"
import colours from "../colours.json"
import HorizontalGrid from "../components/Layouts/HorizontalGrid"
import Particles from "../P5/Particles"
import { loadableP5 as P5Wrapper } from "../P5/loadable"
import ProfilePhoto from "../components/Photo/ProfilePhoto"
import MediaQuery, { useMediaQuery } from "react-responsive"
import VerticalGrid from "../components/Layouts/VerticalGrid"
import scrollAnimation from "../images/arrow.gif"
const CenteredContainer = props => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        boxShadow: "-9px 11px 23px 0px rgba(156,156,156,1)",
        display: "flex",
        alignItems: "center",
        fontSize: "1px !important",
      }}
    >
      {props.children}
    </div>
  )
}
export default function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  })
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" })
  const isTabletOrMobile = useMediaQuery({
    query: "(max-device-width: 1224px)",
  })
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  })
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" })
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" })
  return (
    <Layout>
      <div
        style={{
          position: "absolute",
          zIndex: "-1",

          margin: 0,
          padding: 0,
          overflow: "hidden",
        }}
      >
        <Particles numParticles={isDesktopOrLaptop ? 200 : 50}></Particles>
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: isDesktopOrLaptop ? "white" : "transparent",
          boxShadow: "-9px 11px 23px 0px rgba(156,156,156,1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "1px !important",
          height: isDesktopOrLaptop ? "60%" : "100%",
        }}
      >
        {isDesktopOrLaptop ? (
          <>
            <HorizontalGrid>
              {/* <div
            style={{
              height: "100%",
              margin: 0,
              padding: 0,
              width: "10%",
            }}
          ></div> */}
              <ProfilePhoto src={profilePicture}></ProfilePhoto>
              <FullTitle title="Alvaro Rausell">
                3rd year computer science student at
                <br />
                <span style={{ color: colours.accent }}>
                  King's College London
                </span>
              </FullTitle>
            </HorizontalGrid>
          </>
        ) : (
          <VerticalGrid>
            <ProfilePhoto src={profilePicture}></ProfilePhoto>
            <FullTitle title="Alvaro Rausell">
              3rd year computer science student at
              <br />
              <span style={{ color: colours.accent }}>
                King's College London
              </span>
            </FullTitle>
          </VerticalGrid>
        )}
      </div>
    </Layout>
  )
}
