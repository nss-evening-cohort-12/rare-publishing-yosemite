import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export const DeleteModal = props => {
    return (
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Comment?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Are you sure you want to delete this comment?</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.deleteEvent}>Yes</Button>
          <Button variant="secondary" onClick={props.handleClose}>No</Button>
        </Modal.Footer>
      </Modal>
    )
}
