import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from "react-bootstrap/Form";

export const EditModal = props => {
    const [content, setContent] = useState(props.content);
    return (
      <Modal show={props.editShow} onHide={props.handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={props.handleSave}>
            <Form.Group controlId="formBasicDevice">
              <Form.Label>Update Your Comment</Form.Label>
              <Form.Control
                type="text"
                defaultValue={props.content}
                onChange={e => setContent(e.target.value)}
              />
            </Form.Group> 
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => props.handleSave(content)}>Update</Button>
          <Button variant="secondary" onClick={props.handleEditClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}
