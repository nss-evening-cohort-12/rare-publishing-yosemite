import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import commentData from '../utils/commentData'
import usersData from '../utils/usersData'

export const CreateComment = (props) => {
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')
  const history = useHistory()

  const setSubjectEvent = (e) => {
    e.preventDefault();
    setSubject(e.target.value)
  };
  const setContentEvent = (e) => {
    e.preventDefault();
    setContent(e.target.value)
  };

  const submitCommentEvent = async (e) => {
    e.preventDefault();
    let { postId }= props.match.params
    
    const authorId = localStorage.getItem('user_id')

    const res = await usersData.getUserById(authorId)
      const author = res.data.name

    createComment(postId, author)
  }

  const createComment = (postId, author) => {

    const newComment = {
      subject,
      content,
      author,
      "post_id": postId
    }
    console.log(newComment)

    commentData.createComment(newComment)
      .then(history.push(`/post/${postId}`))
      .catch((err) => console.error(err))
  };

  return (
    <div className="text-center">
      <h1 className="text-center">Add a comment!</h1>
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
