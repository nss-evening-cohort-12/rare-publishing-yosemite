import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'

import commentData from '../utils/commentData'

export const EditComment = (props) => {
  const [comment, setComment] = useState({})
  const history = useHistory()

  useEffect(() => {
    const { commentId } = props.match.params
    commentData.getSingleComment(commentId)
      .then((res) => setComment(res.data))
      .catch((err) => console.error(err))

  }, [])

  const editSubjectEvent = (e) => {
    e.preventDefault();
    const subject = e.target.value;
    setComment({ ...comment, subject });
  };

  const editContentEvent = (e) => {
    e.preventDefault();
    const content = e.target.value
    setComment({ ...comment, content });
  };

  const updateComment = (e) => {
    e.preventDefault();
    const newComment = comment
    const postId = comment.post_id
    const commentId = comment.id
    commentData.updateComment(commentId, newComment)
      .then((res) => history.push(`/posts/${postId}`))
      .catch((err) => console.error(err))
  };

  return (
    <div className="text-center">
    <h1>Edit Comment</h1>
    <form className="col-6 offset-3">
        <div className="form-group">
          <label htmlFor ="commentSubject">Subject</label>
          <input
          type="text"
          className="form-control"
          id="tagName"
          defaultValue={comment.subject}
          onChange={editSubjectEvent}
          />
        </div>
        <div className="form-group">
          <label htmlFor ="commentContent">Content</label>
          <input
          type="text"
          className="form-control"
          id="tagName"
          defaultValue={comment.content}
          onChange={editContentEvent}
          />
        </div>
      <button className="btn button btn-danger" type="submit" onClick={updateComment}>Submit</button>
    </form>
  </div>
  )
}
