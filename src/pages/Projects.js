import React from "react"
import Layout from "../components/Layouts/Layout"
import colours from "../colours.json"
export default props => {
  return (
    <Layout>
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: colours.accent,
          textAlign: "center",
        }}
      >
        <h1>Hellooo</h1>
      </div>
    </Layout>
  )
}
