import React from "react"

export default props => {
  return (
    <img
      src={props.src}
      alt="Profile"
      style={{
        borderRadius: "10px",
        margin: 0,
        maxHeight: "100%",
      }}
    ></img>
  )
}
