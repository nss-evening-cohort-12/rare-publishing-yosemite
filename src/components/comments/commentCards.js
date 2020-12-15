import moment from 'moment'
import React, { useContext, useEffect, useState } from 'react'
import { CommentContext } from "./CommentProvider"
import { DeleteModal } from "./DeleteModal"
import { EditModal } from "./EditModal"

import "./PostComments.css"

export const CommentCards = props => {
  const { comment, deleteComment, editComment } = props
  const [deleteShow, setDeleteShow ] = useState(false)
  const [editShow, setEditShow ] = useState(false)

  const handleSave = (content) => {
    setEditShow(false)
    const { postId } = props.match.params
    const author_id = localStorage.getItem("user_id")
    const updatedComment = {
      id: `${comment.id}`,
      post: `${postId}`,
      author: `${author_id}`,
      content: content,
      subject: 'default',
      created_on: `${comment.created_on}`
    }
      editComment(updatedComment)
  }

  const handleDeleteClose = () => setDeleteShow(false);
  const handleDeleteShow = () => setDeleteShow(true);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);


  const deleteEvent = (e) => {
    e.preventDefault();
    deleteComment(comment.id)
  };


  const showOptions = () => {
     const user_id = localStorage.getItem("user_id")
     if (user_id == comment.author.id) {
       return <div className="comment-options"><i className="fas fa-edit mr-1" onClick={handleEditShow}></i><i className="fas fa-trash-alt mr-3" onClick={handleDeleteShow}></i></div>
     } else {
       return ''
     }
  }

  return (  
        <div className="comment-child">
          {showOptions()}
          <p>{comment.content}</p>
          <p  className="author-name">-{comment.author.user.first_name} {comment.author.user.last_name}</p>
          <DeleteModal handleDeleteClose={handleDeleteClose} deleteShow={deleteShow} deleteEvent={deleteEvent}/>
          <EditModal handleEditClose={handleEditClose} handleSave={handleSave} editShow={editShow} content={props.comment.content} />
        </div>
    )
  }
