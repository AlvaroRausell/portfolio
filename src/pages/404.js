import React from "react"
import FullTitle from "../components/text/FullTitle"
import HorizontalGrid from "../components/Layouts/HorizontalGrid"
import { useMediaQuery } from "react-responsive"
import VerticalGrid from "../components/Layouts/VerticalGrid"
import Layout from "../components/Layouts/Layout"
import Particles from "../P5/Particles"

export default function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  })
  return (
    <Layout>
      <div
        style={{
          position: "absolute",
          zIndex: "-1",

          margin: 0,
          padding: 0,
          bottom: 0,
          overflow: "hidden",
        }}
      >
        <Particles numParticles={isDesktopOrLaptop ? 200 : 50}></Particles>
      </div>
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
          }}
        >
          {isDesktopOrLaptop ? (
            <>
              <HorizontalGrid>
                <FullTitle title="404">
                  Can't find the page you are looking for :(
                </FullTitle>
              </HorizontalGrid>
            </>
          ) : (
            <VerticalGrid>
              <FullTitle title="404">
                Can't find the page you are looking for :(
              </FullTitle>
            </VerticalGrid>
          )}
        </div>
      </div>
    </Layout>
  )
}
