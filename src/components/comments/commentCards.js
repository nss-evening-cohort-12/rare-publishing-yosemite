import React from 'react'
import { Link } from 'react-router-dom'

export const CommentCards = (props) => {
  const { comment } = props

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{comment.subject}</h5>
      </div>
    </div>
  );
};
