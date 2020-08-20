import React from "react"
import colours from "../../colours.json"

export default props => {
  return (
    <h3 style={{ color: colours.secondary, ...props.style }}>
      {props.children}
    </h3>
  )
}
