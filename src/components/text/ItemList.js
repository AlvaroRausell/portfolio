import React from "react";
import styled from "styled-components";
import colours from "../../colours.json";
import HorizontalDivider from "./HorizontalDivider";

const Text = styled.p`
  font-size: 150%;
  span {
    color: ${colours.accent};
    font-weight: bold;
  }
`;

export default (props) => {
  return (
    <>
      {props.items.map((item) => (
        <>
          <Text>{item}</Text>
          <HorizontalDivider></HorizontalDivider>
        </>
      ))}
    </>
  );
};
