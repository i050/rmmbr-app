import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import DeceasedForm from "../DeceasedForm";

function AddDeceasedCard({ handleClose,memoryWallId, onCancel,addNewDeceasedToMemoryWall }) {
    

    return (
        <Modal style={{ backgroundColor: " rgba(0, 0, 0, 0.5)" }} show={true} onHide={handleClose}>
          <Modal.Header closeButton={false}>
          <Modal.Title ><h3 className="text-center">הוספת כרטיס חדש</h3></Modal.Title>



          </Modal.Header>
          <Modal.Body>
         <DeceasedForm onCancel={onCancel} width={""}
          height={""} memoryWallId={memoryWallId} isNewCard={true} addNewDeceasedToMemoryWall={addNewDeceasedToMemoryWall}/>
          </Modal.Body>
          <Modal.Footer>
           
          </Modal.Footer>
        </Modal>
  );
}

export default AddDeceasedCard;
