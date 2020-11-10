import React, { useState } from "react";
import axios from 'axios';

export const PostContext = React.createContext

export const PostProvider = props => {
  const [ posts, setPosts ] = useState([]);
  const [ post, setPost ] = useState({});

  const getPosts = () => {
    axios.get(`http://localhost:8088/posts`)
      .then((res) => {
        console.error(res)
        setPosts(res)
      });
  };

  const getUsersPosts = posts => {
    axios.get(`http://localhost:8088/entries?q=${posts.user_id}`)
      .then((res) => setPosts(res));
  };

  const deletePost = id => {
    axios.delete(`http://localhost:8088/posts/${id}`)
      .then(getPosts);
  };

  const getSinglePost = id => {
    axios.get(`http://localhost:8088/entries/${id}`)
      .then((res) => setPost(res));
  };


  const newPost = post => {
    axios.post("http://localhost:8088/entries", { post })
      .then(getPosts);
  };

  const updatePost = id => {
    axios.put(`http://localhost:8088/entries/${id}`)
      .then((res) => setPost(res));
  };

  return (
    <PostContext.PostProvider
      value={{
        posts,
        getPosts,
        deletePost,
        getSinglePost,
        post,
        newPost,
        updatePost,
        getUsersPosts
      }}
    >
      {props.children}
    </PostContext.PostProvider>
  )
  
};
