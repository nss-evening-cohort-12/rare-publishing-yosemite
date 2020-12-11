import React, { useContext, useEffect } from 'react'
import { CommentContext } from "./CommentProvider"

import "./PostComments.css"

export const PostComments = props => {
  const { comments, getCommentsByPostId } = useContext(CommentContext)

  useEffect(() => {
    const { postId } = props.match.params
    getCommentsByPostId(postId)
  }, [])

  // showOptions = () => {
  //   const { post } = this.state
  //   const user_id = localStorage.getItem("rare_user_id")
  //   const editLink = `/editpost/${post.id}`
  //   if(post.user_id == user_id) {
  //     return <div><Link to={editLink}><i className="fas fa-edit mr-1"></i></Link><i className="fas fa-trash-alt mr-3" onClick={this.submit}></i></div>
  //   } else {
  //     return ''
  //   }
  // }

  return (
    <div className="main-container">
        <h1 className="comment-header">Post Titles Comments</h1>
        <div className="form-container">
            <textarea rows="5" name="review" required autoFocus className="text-area" placeholder="Type your comment here.."></textarea>
            <button className=" btn btn-outline-primary nav__button comment-btn">Submit</button>
        </div>
        <div className="comment-container">
          {
            comments.results && comments.results.map(comment => {
               const user_id = localStorage.getItem("r_token")
               console.error(user_id)
               return <div className="comment-child" key={comment.id}>
                          <p>{comment.content}</p>
                      </div>
            })
          }
        </div>
    </div>
  )
}
