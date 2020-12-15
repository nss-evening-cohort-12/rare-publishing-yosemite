import React, { useState } from "react"

export const CommentContext = React.createContext()

export const CommentProvider = (props) => {
    const [ comments, setComments] = useState([])
    const [ post, setPost ] =useState({})
    const [ comment, setComment] = useState({})

    const getComments = () => {
        return fetch("http://localhost:8000/comments", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("r_token")}`
            }
        })
        .then(response => response.json())
        .then(setComments)
    }

    const getCommentsByPostId = (id) => {
        return fetch(`http://localhost:8000/comments?post=${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("r_token")}`
            }
        })
        .then(response => response.json())
        .then(setComments)
    }

    const createComment = (comment) => {
        return fetch("http://localhost:8000/comments", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("r_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        })
        .then(response => response.json())
        .then(setComment)
    }

    const deleteComment = id => {
        return fetch(`http://localhost:8000/comments/${id}`, {
          method: "DELETE",
          headers: {
            "Authorization": `Token ${localStorage.getItem("r_token")}`
          }
        })
          .then(getComments)
      }

      const editComment = comment => {
        return fetch(`http://localhost:8000/comments/${comment.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem('r_token')}`
          },
          body: JSON.stringify(comment)
        })
          .then(getComments)
      }
      
    const getPostById = (id) => {
        return fetch(`http://localhost:8000/posts/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("r_token")}`
            }
        })
        .then(response => response.json())
        .then(setPost)
    }

    return (
        <CommentContext.Provider value={{ comments, comment, getComments, createComment, getCommentsByPostId, deleteComment , editComment, getPostById, post }} >
            { props.children }
        </CommentContext.Provider>
    )
}
