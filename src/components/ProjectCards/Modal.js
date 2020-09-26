import React from "react";
import { Modal, Button } from "react-bootstrap";
import ReactMarkdown from "react-markdown/with-html";
import colours from "../../colours.json";
export default (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <h2 style={{ color: colours.main }}>{props.title}</h2>
      </Modal.Header>
      <Modal.Body>
        <ReactMarkdown source={props.md}></ReactMarkdown>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{ backgroundColor: colours.accent }}
          onClick={props.onHide}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
