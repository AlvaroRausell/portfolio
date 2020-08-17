import React from "react"
import profilePicture from "../images/profile.jpg"
import FullTitle from "../components/text/FullTitle"
import colours from "../colours.json"
import HorizontalGrid from "../components/Layouts/HorizontalGrid"
import ProfilePhoto from "../components/Photo/ProfilePhoto"
import { useMediaQuery } from "react-responsive"
import VerticalGrid from "../components/Layouts/VerticalGrid"
import Layout from "../components/Layouts/Layout"

export default function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  })
  return (
    <Layout>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            backgroundColor: isDesktopOrLaptop ? "white" : "transparent",
            boxShadow: isDesktopOrLaptop
              ? "-9px 11px 23px 0px rgba(156,156,156,1)"
              : "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1px !important",
            height: isDesktopOrLaptop ? "60%" : "100%",
            // margin: "25%",
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
      </div>
    </Layout>
  )
}
