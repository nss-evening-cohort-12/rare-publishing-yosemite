import React, { useState, useEffect } from 'react'
import postsData from '../utils/postsData'



export const SinglePost = (props) => {
  const [post, setPost ] = useState({})

  const getPost = () => {
    console.error(props)
    const { postId } = props.match.params
    console.error(postId, "id")
    postsData.getSinglePost(postId)
      .then((res) => {
        setPost(res.data[0])
        console.error(res)
      })
      .catch((err) => console.error(err));
  };

  useEffect(getPost, [])

  return (
    <div className="posts-container text-center">
      <img className="card-img-top header-img" src={post.header_img} alt="Album Cover" />
      <h3>{post.title}</h3>
      <h6>{post.publish_date}</h6>
      <p>{post.content}</p>
    </div>
  )
}
