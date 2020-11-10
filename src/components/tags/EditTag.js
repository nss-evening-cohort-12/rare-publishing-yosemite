import React, { useState } from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

import tagData from '../utils/tagData'

export const EditTag = (props) => {
  const [tag, setTag] = useState({})
  const history = useHistory()
  
  useEffect(() => {
    console.log(props)
    const { tagId } = props.match.params;
    console.log(tagId)
    tagData.getSingleTag(tagId)
      .then((res) => setTag(res.data))
      .catch((err) => console.error(err))
  }, [])

  const editNameEvent = (e) => {
    e.preventDefault();
    const name = e.target.value;
    setTag( tag, name)
  };

  const updateTagEvent = (e) => {
    e.preventDefault();
    const newTag = tag;
    const { tagId } = props.match.params;
    tagData.updateTag(tagId, newTag)
      .then((res) => history.push('/tags'))
      .catch((err) => console.error(err));
  };


  return (
    <div className="text-center">
    <h1>Edit A Tag!</h1>
    <form className="col-6 offset-3">
        <div className="form-group">
          <label htmlFor ="tagName">Tag Name</label>
          <input
          type="text"
          className="form-control"
          id="tagName"
          value={tag.name}
          onChange={editNameEvent}
          />
        </div>
        <button className="btn button btn-danger" type="submit" onClick={updateTagEvent}>Submit</button>
    </form>
  </div>
  )
};
