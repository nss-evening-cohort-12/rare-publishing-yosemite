import React from 'react'
import { Link } from 'react-router-dom'

export const TagCards = (props) => {
  const { tag, deleteTag } = props

  const deleteEvent = (e) => {
    e.preventDefault();
    deleteTag(tag.id)
  };

  const editLink = `/editTag/${tag.id}`

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{tag.name}</h5>
        <Link to={editLink} className="btn btn-secondary">Update Tag</Link>
        <button className="btn btn-danger" onClick={deleteEvent}>Delete Tag</button>
      </div>
    </div>
  );
};
