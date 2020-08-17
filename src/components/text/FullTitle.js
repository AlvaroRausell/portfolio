import React from "react"
import Subtitle from "./Subtitle"
import Title from "./Title"
import VerticalGrid from "../Layouts/VerticalGrid"
export default props => {
  return (
    <VerticalGrid>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "white",

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
