import React, { useState, useEffect } from "react"
import { PostsCards } from "./PostsCards"
import postsData from '../utils/postsData';
import { Link } from "react-router-dom"

export const Posts = props => {
  const [posts, setPosts] = useState([]);
  
  const getPosts = () => {
    postsData.getAllPosts()
      .then((res) => {
        console.log(res)
        setPosts(res.data)})
      .catch((err) => console.error(err));
  };

  useEffect(getPosts, []);

  const deletePost = (postId) => {
    postsData.deletePost(postId)
      .then((res) => {
        getPosts();
      })
      .catch((err) => console.error(err));
  };

  const postCards = posts.map((post) => <PostsCards key={post.id} post={post} deletePost={deletePost}/>);

  return (
    <div className="container">
      <Link to="/addPost" className="btn btn-info">Add New Post</Link>
      <Link to="/myPosts" className="btn btn-primary">View My Posts</Link>
      <div className="posts-container card-deck text-center">
        {postCards}
      </div>
    </div>
  );
};
