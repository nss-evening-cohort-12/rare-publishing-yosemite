import React, {useContext, useState, useEffect} from 'react';
import './categories.css'
import { DeleteCatModal } from './DeleteCatModal'
import { UserContext } from '../users/UserProvider'

import { EditCatModal } from './EditCatModal'

export const CategoryCards = (props) => {
  const { category, deleteCategory, updateCategory } = props
  const { getSingleUser, user } = useContext(UserContext)
  const [ deleteShow, setDeleteShow ] = useState(false)
  const [editShow, setEditShow ] = useState(false)
  
  const userId = localStorage.getItem('user_id')

  useEffect(() => {
    getSingleUser(userId)
  }, [])
  
  const handleSave = (label) => {
    setEditShow(false)
    const updatedCategory = {
      id: `${category.id}`,
      label: label
    }
      updateCategory(updatedCategory)
  }
  const handleDeleteClose = () => setDeleteShow(false);
  const handleDeleteShow = () => setDeleteShow(true);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  const deleteCategoryEvent = (e) => {
    e.preventDefault();
    deleteCategory(category.id)
  };
 
  return (
    <div className="cat-card">
        {
          user && user.user
          ? user.user.is_staff
            ? <div className="cat-card-body">
                <i className="fas fa-cog mr-3" onClick={handleEditShow}></i>
                <i className="fas fa-trash-alt mr-3" onClick={handleDeleteShow}></i>
                <h5 className="cat-card-title">{category.label}</h5>
              </div>
            : <div classname="cat-card-body"><h5 className="cat-card-title">{category.label}</h5></div>
          : ''
        }
        <DeleteCatModal handleDeleteClose={handleDeleteClose} deleteShow={deleteShow} deleteCategoryEvent={deleteCategoryEvent}/>
        <EditCatModal handleEditClose={handleEditClose} handleSave={handleSave} editShow={editShow} label={props.category.label} />     
    </div>
  );
};
