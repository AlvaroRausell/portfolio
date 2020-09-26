import React from "react";
import styled from "styled-components";
import Tag from "./Tag";

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  flex-wrap: wrap;
`;
export default (props) => {
  return (
    <TagContainer>
      {props.children}
      {props.tags ? props.tags.map((tag) => <Tag>{tag}</Tag>) : <></>}
    </TagContainer>
  );
};
