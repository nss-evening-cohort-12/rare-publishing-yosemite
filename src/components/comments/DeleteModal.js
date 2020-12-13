import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export const DeleteModal = props => {
    return (
      <Modal show={props.deleteShow} onHide={props.handleDeleteClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Comment?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Are you sure you want to delete this comment?</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.deleteEvent}>Yes</Button>
          <Button variant="secondary" onClick={props.handleDeleteClose}>No</Button>
        </Modal.Footer>
      </Modal>
    )
}
