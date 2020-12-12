import moment from 'moment'
import React, { useContext, useEffect, useState } from 'react'
import { CommentContext } from "./CommentProvider"

import "./PostComments.css"

export const CommentCards = props => {
  const { comment, deleteComment } = props

  const deleteEvent = (e) => {
    e.preventDefault();
    deleteComment(comment.id)
  };


  const showOptions = () => {
     const user_id = localStorage.getItem("user_id")
     if (user_id == comment.author.id) {
       return <div className="comment-options"><i className="fas fa-edit mr-1"></i><i className="fas fa-trash-alt mr-3" onClick={deleteEvent}></i></div>
     } else {
       return ''
     }
  }

  return (  
        <div className="comment-child">
          {showOptions()}
          <p>{comment.content}</p>
          <p  className="author-name">-{comment.author.user.first_name} {comment.author.user.last_name}</p>
        </div>
    )
  }
