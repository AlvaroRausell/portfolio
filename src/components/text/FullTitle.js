import React from "react"
import Subtitle from "./Subtitle"
import Title from "./Title"
import VerticalGrid from "../Layouts/VerticalGrid"
import { useMediaQuery } from "react-responsive"
export default props => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  })
  return (
    <VerticalGrid>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "white",
          boxShadow: isTabletOrMobileDevice
            ? "-9px 11px 23px 0px rgba(156,156,156,1)"
            : "none",
          borderRadius: "20px",
          padding: "5%",
        }}
      >
        <Title>{props.title}</Title>
        <Subtitle>{props.children}</Subtitle>
      </div>
    </VerticalGrid>
  )
}
