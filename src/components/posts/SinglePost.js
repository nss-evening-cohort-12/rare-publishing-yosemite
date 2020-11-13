import React, { useState } from 'react'
import postsData from '../utils/postsData'



export const SinglePost = props => {
  const [post, setPost ] = useState({})

  const getPost = (postId) => {
    postsData.getSinglePost(postId)
      .then((res) => setPost(res.data))
      .catch((err) => console.error(err));
  }

  return (
    <div className="posts-container card-deck text-center">
      <h4>Need some comments!</h4>
    </div>
  )
}
