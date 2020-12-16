import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from "react-bootstrap/Form";

export const EditCatModal = props => {
  const [ label, setLabel ] = useState(props.label);
  return (
    <Modal show={props.editShow} onHide={props.handleEditClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={props.handleSave}>
          <Form.Group controlId="formBasicDevice">
            <Form.Label>Update Your Category</Form.Label>
            <Form.Control
              type="text"
              defaultValue={props.label}
              onChange={e => setLabel(e.target.value)}
            />
          </Form.Group> 
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => props.handleSave(label)}>Update</Button>
        <Button variant="secondary" onClick={props.handleEditClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
