import React from "react"
import Photo from "./Photo"
import { useMediaQuery } from "react-responsive"

export default props => {
  return (
    <div
      style={{
        height: "100%",
        maxWidth: useMediaQuery({ query: "(min-device-width: 1824px)" })
          ? "33%"
          : "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxHeight: "100%",
        // flex: 1,
        // backgroundColor: colours.accent,
      }}
    >
      <Photo src={props.src}></Photo>
    </div>
  )
}
