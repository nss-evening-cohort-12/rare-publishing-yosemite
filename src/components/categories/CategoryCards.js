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
  const updateLink = `/updateCategory/${category.id}`
  return (
    <div className="cat-card">
      <div className="cat-card-body">
        <h5 className="cat-card-title">{category.name}</h5>
        <Link to={updateLink} className="btn btn-secondary">Update Category</Link>
        <div>
      <Button color="danger" onClick={toggle}>Delete</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          <button className="btn btn-danger" onClick={deleteCategoryEvent}>Confirm Delete</button>
        </ModalHeader>
      </Modal>
    </div>
      </div>
      
    </div>
  );
};
