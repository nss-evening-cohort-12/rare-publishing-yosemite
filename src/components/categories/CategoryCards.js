import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './categories.css'

export const CategoryCards = (props) => {
  const { category, deleteCategory } = props
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const deleteCategoryEvent = (e) => {
    e.preventDefault();
    deleteCategory(category.id)
  };

  return (
    <div className="cat-card">
      <div className="cat-card-body">
        <h5 className="cat-card-title">{category.name}</h5>
        <button className="btn btn-secondary">Update Category</button>
        <div>
      <Button color="danger" onClick={toggle}>Delete</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        {/* <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody> */}
        <button className="btn btn-danger" onClick={deleteCategoryEvent}>Confirm Delete</button>
      </Modal>
    </div>
      </div>
      
    </div>
  );
};
