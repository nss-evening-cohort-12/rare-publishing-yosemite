import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import commentData from '../utils/commentData'
import usersData from '../utils/usersData'

export const CreateComment = (props) => {
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [post_id, setPost_id] = useState('')
  const history = useHistory()

  const setSubjectEvent = (e) => {
    e.preventDefault();
    setSubject(e.target.value)
  };
  const setContentEvent = (e) => {
    e.preventDefault();
    setContent(e.target.value)
  };

  const submitCommentEvent = (e) => {
    e.preventDefault();
    const postId = props.match.params
    setPost_id(postId)

    const authorId = localStorage.getItem('user_id')
    usersData.getUserById(authorId)
      .then((res) => setAuthor(res.data))
      .catch((err) => console.error(err))

    const newComment = {
      subject,
      content,
      author,
      post_id
    }

    commentData.CreateComment(newComment)
      .then(history.push(`posts/${post_id}`))
      .catch((err) => console.error(err))
  }

  return (
    <div>
      <h1>Add a comment!</h1>
      <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor ="subject">Subject</label>
            <input
            type="text"
            className="form-control"
            id="subject"
            value={subject}
            placeholder="Enter Subject"
            onChange={setSubjectEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor ="content">Content</label>
            <input
            type="text"
            className="form-control"
            id="content"
            value={content}
            placeholder="Enter Content"
            onChange={setContentEvent}
            />
          </div>
        <button className="btn button btn-danger" type="submit" onClick={submitCommentEvent}>Submit</button>
      </form>
    </div>
  )
};
