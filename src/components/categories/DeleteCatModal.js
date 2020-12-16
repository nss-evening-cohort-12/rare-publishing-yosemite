import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export const DeleteCatModal = (props) => {
  

  return (
    <Modal show={props.deleteShow} onHide={props.handleDeleteClose}>
      <Modal.Header closeButton>
        <Modal.Title>Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Are you sure you want to delete this category?</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.deleteCategoryEvent}>Yes</Button>
        <Button variant="secondary" onClick={props.handleDeleteClose}>No</Button>
      </Modal.Footer>
    </Modal>
  )
}
