import React from 'react'
import { Link } from 'react-router-dom'

export const CommentCards = (props) => {
  const { comment } = props

  const editLink = `/editComment/${comment.id}`

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">{comment.subject}</h5>
        <h6 className="card-title">{comment.author.name}</h6>
        <p className="card-text">{comment.content}</p>
        <p className="card-text">{comment.creation_date}</p>        
      </div>
      <Link to={editLink} className="btn btn-secondary">Edit this comment</Link>
    </div>
  );
};
