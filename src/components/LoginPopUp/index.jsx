import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import "./index.css";
import LogInGoogle from "../LogInGoogle";
import { useIsAuthenticated } from "react-auth-kit";
import LogInFacebook from "../LogInFacebook";
import LogInForm from "../LogInForm";

function LoginPopUp({showModal,handleModalClose}) {
  const isAuthenticated = useIsAuthenticated();
  useEffect(() => {
    if (isAuthenticated()) {
      handleModalClose();
    }
  }, [isAuthenticated]);

  return (
    <>
      <Modal
        style={{ backgroundColor: " rgba(0, 0, 0, 0)" }}
        show={showModal}
        onHide={handleModalClose}
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
