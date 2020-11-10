import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import tagData from '../utils/tagData'

export const AddTag = (props) => {
  const [name, setName] = useState('')
  const history = useHistory()

  const setNameEvent = (e) => {
    e.preventDefault();
    setName(e.target.value)
  };

  const submitTagEvent = (e) => {
    const newTag = {
      name
    }

    tagData.createTag(newTag)
      .then((res) => {history.push('/tags')})
      .catch((err) => console.error(err))
  };

  return (
    <div className="text-center">
      <h1>Add A Tag!</h1>
      <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor ="tagName">Tag Name</label>
            <input
            type="text"
            className="form-control"
            id="artistName"
            value={name}
            placeholder="Enter Tag Name"
            onChange={setNameEvent}
            />
          </div>
          <button className="btn button btn-danger" type="submit" onClick={submitTagEvent}>Submit</button>
      </form>
    </div>
  )
};
