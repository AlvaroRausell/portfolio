import React from "react";
import style from "styled-components";

const Tag = (props) => {
  const TagContainer = style.div` 
    position: relative;
    opacity: 1;
    background-color: #A34452;
    display: inline-block;
	border-radius: 5px;
	padding: 0 10px;
	height: 1.5rem;
	margin: 1% 2%;
	transition: 0.2s;
    &:hover {opacity: 0.8}
    color: white 
   `;

  return (
    <TagContainer style={{ ...props.style }}>
      <p>{props.children}</p>
    </TagContainer>
  );
};
export const WinnerTag = (props) => {
  return <Tag style={{ backgroundColor: "#F39C12" }}>{props.children}</Tag>;
};
export default Tag;
