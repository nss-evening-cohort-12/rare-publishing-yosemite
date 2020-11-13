import React, { useState } from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

import catData from '../utils/categoryData'

export const UpdateCategory = (props) => {
  const [category, setCategory] = useState({})
  const history = useHistory()

  useEffect(() => {
    console.log(props)
    const { catId } = props.match.params;
    console.log(catId)
    catData.getSingleCat(catId)
    .then((res) => setCategory(res.data))
    .catch((err) => console.error(err))
  }, [])

  const updateNameEvent = (e) => {
    e.preventDefault();
    const name = e.target.value
    setCategory( category, name)
  };

  const updateCategoryEvent = (e) => {
    e.preventDefault();
    const newCat = category;
    const { catId } = props.match.params;
    catData.updateCat(catId, newCat)
      .then((res) => history.push('/categories'))
      .catch((err) => console.error(err));
  };

  return (
    <div className="text-center">
      <h1>Update Category</h1>
      <form className="col-6 offset-3">
        <div className="form-group">
          <label htmlFor ="tagName">Cagtegory Name</label>
          <input
          type="text"
          className="form-control"
          id="tagName"
          value={category.name}
          onChange={updateNameEvent}
          />
        </div>
        <button className="btn button btn-danger" type="submit" onClick={updateCategoryEvent}>Save</button>
    </form>
    </div>
  )
  
};
