import React from "react"
import Subtitle from "./Subtitle"
import Title from "./Title"
import VerticalGrid from "../Layouts/VerticalGrid"
import { useMediaQuery } from "react-responsive"
export default props => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
    query: "(max-width:  1500px)",
  })
  const isUltrawide = useMediaQuery({
    query: "(min-width: 1500px)",
  })
  const isWindowNarrow = useMediaQuery({ query: "(max-height: 700px)" })

  return (
    <VerticalGrid>
      <div
        style={{
          textAlign: "center",
          backgroundColor: isDesktopOrLaptop ? "transparent" : "white",

          borderRadius: "20px",
          padding: "5%",
        }}
      >
        <Title
          style={{
            fontSize: isWindowNarrow
              ? "250%"
              : isDesktopOrLaptop
              ? "450%"
              : isUltrawide
              ? "600%"
              : "300%",
          }}
        >
          {props.title}
        </Title>
        <Subtitle
          style={{
            fontSize: isWindowNarrow
              ? "110%"
              : isDesktopOrLaptop
              ? "200%"
              : isUltrawide
              ? "250%"
              : "150%",
          }}
        >
          {props.children}
        </Subtitle>
      </div>
    </VerticalGrid>
  )
}
