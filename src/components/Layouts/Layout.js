import React from "react"

export default props => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
        flexDirection: "column",
        margin: 0,
        border: 0,
        height: "100vh",
      }}
    >
      {props.children}
    </div>
  )
}
