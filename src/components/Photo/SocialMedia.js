import React from "react";
import Icon from "./Icon";

export default (props) => {
  return (
    <div onClick={props.onClick} style={{ cursor: "pointer", zIndex: "1" }}>
      <a href={props.link}>
        <Icon src={props.src}></Icon>
      </a>
    </div>
  );
};
