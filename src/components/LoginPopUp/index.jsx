import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./index.css";
import LogInGoogle from "../LogInGoogle";
import { useIsAuthenticated } from "react-auth-kit";
import LogInFacebook from "../LogInFacebook";
import LogInForm from "../LogInForm";

function LoginPopUp(props) {
  const isAuthenticated = useIsAuthenticated();
  useEffect(() => {
    if (isAuthenticated()) {
      props.handleModalClose();
    }
  }, [isAuthenticated]);

  return (
    <>
      <Modal
        style={{ backgroundColor: " rgba(0, 0, 0, 0)" }}
        show={props.showModal}
        onHide={props.handleModalClose}
      >
        <Modal.Body style={{borderRadius:"25%"}}>
          <LogInForm/>
          <LogInGoogle />
         <LogInFacebook/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginPopUp;
