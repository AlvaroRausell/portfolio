import React from "react"

export default props => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100%",
        width: "100%",
        padding: "2%",
        // backgroundColor: "red",
      }}
    >
      {props.children}
    </div>
  )
}
