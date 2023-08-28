import { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./index.css";
import LogIn from "../../pages/LogIn";
import { useSignIn, useIsAuthenticated } from "react-auth-kit";

function LoginPopUp(props) {
  const signIn = useSignIn();

  const isAuthenticated = useIsAuthenticated();
  useEffect(() => {
    if (isAuthenticated()) {
      props.handleModalClose();
    }
  });
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        style={{ backgroundColor: " rgba(0, 0, 0, 0)" }}
        show={props.showModal}
        onHide={props.handleModalClose}
      >
        {/* <Modal.Header closeButton style={{marginTop: "0px"}}>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <LogIn />
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer > */}
      </Modal>
    </>
  );
}

export default LoginPopUp;
