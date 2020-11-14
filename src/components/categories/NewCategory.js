import React, { useState } from 'react';
import categoryData from '../utils/categoryData';
import { useHistory } from 'react-router-dom'

export const NewCategory = props => {
  const [name, setName] = useState('')
  const history = useHistory()

  const setNameEvent = (e) => {
    e.preventDefault()
    setName(e.target.value)
  };

  const submitCategory = (e) => {
    e.preventDefault()

    const NewCategory = {
      name
    }

    categoryData.createCat(NewCategory)
      .then((res) => history.push('/categories'))
      .catch((err) => console.error(err));
  };

  return (
    <div className="text-center">
      <h1>New Category</h1>
      <form className="col-6 offset-3">
        <div className="form-group">
          <label htmlFor ="tagName">Cagtegory Name</label>
          <input
          type="text"
          className="form-control"
          id="tagName"
          value={name}
          onChange={setNameEvent}
          />
        </div>
        <button className="btn button btn-danger" type="submit" onClick={submitCategory}>submit</button>
    </form>
    </div>
  )

};
