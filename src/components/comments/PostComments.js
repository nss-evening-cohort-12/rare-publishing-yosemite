import moment from 'moment'
import React, { useContext, useEffect, useState } from 'react'
import { CommentContext } from "./CommentProvider"

import "./PostComments.css"

export const PostComments = props => {
  const { comments, getCommentsByPostId, createComment } = useContext(CommentContext)
  const [ currentComment, setCurrentComment ] = useState({
    comment: "",
    subject: "default"
  })

  useEffect(() => {
    const { postId } = props.match.params
    getCommentsByPostId(postId)
  }, [])

  const handleControlledInputChange = (event) => {
    const newCommentState = Object.assign({}, currentComment)
    newCommentState[event.target.name] = event.target.value
    setCurrentComment(newCommentState)
}

  return (
    <div className="main-container">
        <h1 className="comment-header">Post Titles Comments</h1>
        <div className="form-container">
            <textarea rows="5" name="comment" required autoFocus className="text-area" placeholder="Type your comment here.." onChange={handleControlledInputChange}></textarea>
            <button type="submit" 
                onClick={evt => {
                    evt.preventDefault()
                    const { postId } = props.match.params
                    const author_id = localStorage.getItem("user_id")
                    console.error(author_id)
                    const timeElapsed = Date.now();
                    const today = moment(timeElapsed).format('YYYY-MM-DD HH:mm:ss');
                    const comment = {
                      post_id: `${postId}`,
                      author_id: `${author_id}`,
                      content: currentComment.comment,
                      subject: currentComment.subject,
                      created_on: `${today}`
                    }
                    createComment(comment).then(() => getCommentsByPostId(postId)).then(() => setCurrentComment({ comment: '', subject: 'default'}))
                }}
            className="btn btn-outline-primary nav__button comment-btn">Submit</button>
        </div>
        <div className="comment-container">
        {
            comments.results && comments.results.map(comment => {
               const user_id = localStorage.getItem("user_id")
                if(comment.author_id == user_id) {
                    return  <div className="comment-child">
                              <div>
                                <div className="comment-options">
                                  <i className="fas fa-edit mr-1"></i><i className="fas fa-trash-alt mr-3"></i>
                                </div>
                                <p>{comment.content}</p>
                              </div>
                           </div>
                } else {
                  return <div className="comment-child" key={comment.id}>
                            <p>{comment.content}</p>
                         </div>
                }
            })
          }
        </div>
    </div>
  )
}
