import React, { useState } from "react"

export const PostContext = React.createContext()

export const PostProvider = props => {
    const [ posts, setPosts ] = useState([])
    const [ post, setPost ] = useState({})
    const [ categories, setCategories ] = useState([])

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
            "Authorization": `Token ${localStorage.getItem("r_token")}`,
            'Content-Type': 'application/json',
            "Accept": "application/json",
            },
            body: JSON.stringify(post)
        })
            .then(response => response.json())
            .then(getPosts)
    }

    const updatePost = post => {
        return fetch(`http://localhost:8000/posts/${post.id}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(getPosts)
    }

    const deletePost = id => {
        return fetch(`http://localhost:8000/posts/${id}`, {
            method: 'DELETE',
        })
            .then(getPosts)
    }

    const getPostById = (id) => {
        return fetch(`http://localhost:8000/posts/${id}`)
            .then(res => res.json())
            .then(setPost)
    }

    const getCategories = () => {
        return fetch('http://localhost:8000/categories',{
            headers:{
            "Authorization": `Token ${localStorage.getItem("r_token")}`
            }
        })
            .then(response => response.json())
            .then(setCategories)
        }

    const getPostsByCat = (catId) => {
        return fetch(`http://localhost:8000/posts?category=${catId}`)
            .then(res => res.json())
            .then(setPosts)
    }

    const getPostsByTag = (tagId) => {
      const tagName = tagId.toLowerCase()
      return fetch(`http://localhost:8000/posts?tags__label=${tagName}`)
          .then(res => res.json())
          .then(setPosts)
  }

    const getPostsByUserId = (id) => {
        return fetch(`http://localhost:8000/posts?user=${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("r_token")}`
            }
        })
        .then(response => response.json())
        .then(setPosts)
    }

    const getSubbedPosts = (userId) => {
        return fetch(`http://localhost:8000/posts?subscribed=${userId}`,{
            headers:{
            "Authorization": `Token ${localStorage.getItem("r_token")}`
            }
        })
            .then(response => response.json())
            .then(setPosts)
    }

    return (
        <PostContext.Provider value={{
            posts,
            post,
            getPosts,
            createPost,
            updatePost,
            deletePost,
            getPostById,
            categories,
            getCategories,
            getPostsByCat,
            getPostsByUserId,
            getPostsByTag,
            getSubbedPosts
        }}>
            {props.children}
        </PostContext.Provider>
    )

}
