import React from "react"
import colours from "../../colours.json"
export default props => {
  return <h1 style={{ color: colours.main }}>{props.children}</h1>
}
