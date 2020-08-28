import React from "react";
import Icon from "./Icon";

export default (props) => {
  return (
    <a href={props.link}>
      <Icon src={props.src}></Icon>
    </a>
  );
};
