import React, { useState, useEffect } from 'react';
import postsData from '../utils/postsData'
import { PostsCards } from './PostsCards';


export const UserPosts = props => {
  const [posts, setPosts] = useState([])
  
  const getUserPosts = () => {
    const userId = localStorage.getItem("user_id")

    postsData.getUsersPosts(userId)
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err))
  };

  useEffect(getUserPosts, []);

  const deletePost = (postId) => {
    postsData.deletePost(postId)
      .then((res) => {
        getUserPosts();
      })
      .catch((err) => console.error(err));
  };

  const postCards = posts.map((post) => <PostsCards key={post.id} post={post} deletePost={deletePost}/>)

  return (
    <div className="posts-container card-deck text-center">
      {postCards}
    </div>
  )

}
