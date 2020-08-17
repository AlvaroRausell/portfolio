import React from "react"

export default props => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "3%",
        width: "100%",
      }}
    >
      {props.children}
    </div>
  )
}
