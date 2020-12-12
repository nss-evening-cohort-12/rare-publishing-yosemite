import React, { useState } from "react"

export const PostContext = React.createContext()

export const PostProvider = props => {
    const [ post, setPost ] = useState([])
    const [ posts, setPosts ] = useState({})

    const getPosts = () => {
        return fetch('http://localhost:8000/posts',{
          headers:{
            "Authorization": `Token ${localStorage.getItem("r_token")}`
          }
        })
          .then(response => response.json())
          .then(setPosts)
      }
    
      const createPost = post => {
        return fetch('http://localhost:8000/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(category)
        })
          .then(getPosts)
      }
    
      const updatePost = post => {
        return fetch(`http://localhost:8000/posts/${post.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(category)
        })
          .then(getPosts)
      }
    
      const deletePost = id => {
        return fetch(`http://localhost:8000/posts/${id}`, {
          method: 'DELETE',
        })
          .then(getCategories)
      }
    
      const getPostById = (id) => {
        return fetch(`http://localhost:8000/posts/${id}`)
        .then(res => res.json())
    }

}