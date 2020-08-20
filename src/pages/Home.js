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
  const isWindowNarrow = useMediaQuery({ query: "(max-height: 700px)" })
  return (
    <div
      style={{
        margin: `${isWindowNarrow ? "10%" : 0} 0 ${
          !isDesktopOrLaptop && isWindowNarrow ? "10%" : 0
        } 0`,
      }}
    >
      <Layout>
        <div
          style={{
            height: "100%",
            width: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            //marginBottom: "10vh",
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
              height: isDesktopOrLaptop ? "60%" : "100%",
            }}
          >
            {isDesktopOrLaptop ? (
              <>
                <div style={{ padding: "2%", height: "100%", width: "100%" }}>
                  <HorizontalGrid>
                    <ProfilePhoto src={profilePicture}></ProfilePhoto>
                    <FullTitle title="Álvaro Rausell">
                      3rd year computer science student at
                      <br />
                      <span style={{ color: colours.accent }}>
                        King's College London
                      </span>
                    </FullTitle>
                  </HorizontalGrid>
                </div>
              </>
            ) : (
              <VerticalGrid>
                <ProfilePhoto src={profilePicture}></ProfilePhoto>
                <FullTitle title="Álvaro Rausell">
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
    </div>
  )
}
