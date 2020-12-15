import moment from 'moment'
import React, { useContext, useEffect, useState } from 'react'
import { CommentContext } from "./CommentProvider"
import { CommentCards } from "./commentCards"

import "./PostComments.css"

export const PostComments = props => {
  const { comments, getCommentsByPostId, createComment, deleteComment, editComment, getPostById, post } = useContext(CommentContext)

  const [ currentComment, setCurrentComment ] = useState({
    comment: "",
    subject: "default"
  })

  useEffect(() => {
    const { postId } = props.match.params
    getCommentsByPostId(postId)
  }, [])

  useEffect(() => {
    const { postId } = props.match.params
    getPostById(postId)
  }, [])

  const handleControlledInputChange = (event) => {
    const newCommentState = Object.assign({}, currentComment)
    newCommentState[event.target.name] = event.target.value
    setCurrentComment(newCommentState)
}
  const commentCards = comments && comments.length > 0 ? comments.map((comment) => <CommentCards {...props} key={comment.id} comment={comment} deleteComment={deleteComment} editComment={editComment} />) : ''

  return (
    <div className="main-container">
        <h1 className="comment-header">{post && post.title}'s Comments</h1>
        <div className="form-container">
            <textarea rows="5" name="comment" required autoFocus className="text-area" placeholder="Type your comment here.." onChange={handleControlledInputChange}></textarea>
            <button type="submit" 
                onClick={evt => {
                    evt.preventDefault()
                    const { postId } = props.match.params
                    const author_id = localStorage.getItem("user_id")
                    const timeElapsed = Date.now();
                    const today = moment(timeElapsed).format('YYYY-MM-DD HH:mm:ss');
                    const comment = {
                      post: `${postId}`,
                      author: `${author_id}`,
                      content: currentComment.comment,
                      subject: currentComment.subject,
                      created_on: `${today}`
                    }
                    createComment(comment).then(() => getCommentsByPostId(postId)).then(() => setCurrentComment({ comment: '', subject: 'default'}))
                }}
            className="btn btn-outline-primary nav__button comment-btn">Submit</button>
        </div>
        <div className="comment-container">
          {commentCards}
        </div>
    </div>
  )
}
