import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import './index.css'
import LogIn from "../../pages/LogIn";

function LoginPopUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal 
        style={{  backgroundColor:" rgba(0, 0, 0, 0)"}}
        show={show}
        onHide={handleClose}
      >
        {/* <Modal.Header closeButton style={{marginTop: "0px"}}>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <LogIn/>
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
