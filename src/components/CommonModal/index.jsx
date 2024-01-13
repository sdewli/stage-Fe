import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const CommonModal = (props) => {
  const { showModal, handleClose, children } = props;
  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default CommonModal;
