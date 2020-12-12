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
      <Link to={updateLink} className="btn"><i class="fas fa-cog"></i></Link>
        <div>
      <button className="btn" onClick={toggle}><i class="fas fa-trash-alt"></i></button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          <button className="btn btn-danger" onClick={deleteCategoryEvent}>Confirm Delete</button>
        </ModalHeader>
      </Modal>
    </div>
        <h5 className="cat-card-title">{category.label}</h5>
      </div>
      
    </div>
  );
};
