import React from 'react'

export const TagCards = props => {
  const { tag, deleteTag } = props

  const deleteEvent = (e) => {
    e.preventDefault();
    deleteTag(tag.id)
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{tag.label}</h5>
        <button className="btn btn-secondary" onClick={e => props.history.push({pathname:`/tags/${tag.id}/edit`})}>Edit</button>
        <button className="btn btn-danger" onClick={deleteEvent}>Delete Tag</button>
      </div>
    </div>
  );
};
