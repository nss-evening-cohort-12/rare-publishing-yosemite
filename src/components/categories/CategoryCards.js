import React from 'react';
import { Link } from 'react-router-dom'
import './categories.css'

export const CategoryCards = (props) => {
  const { category, deleteCategory } = props

  const deleteCategoryEvent = (e) => {
    e.preventDefault();
    deleteCategory(category.id)
  };

  return (
    <div className="cat-card">
      <div className="cat-card-body">
        <h5 className="cat-card-title">{category.name}</h5>
        <button className="btn btn-secondary">Update Category</button>
        <button className="btn btn-danger" onClick={deleteCategoryEvent}>Delete Category</button>
      </div>
    </div>
  );
};
