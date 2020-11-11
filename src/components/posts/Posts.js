import React, { useState, useEffect } from "react"
import { PostsCards } from "./PostsCards"
import postsData from '../utils/postsData';

export const Posts = props => {
  const [posts, setPosts] = useState([]);
  
  const getPosts = () => {
    postsData.getAllPosts()
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(getPosts, []);

  const postCards = posts.map((post) => <PostsCards key={post.id} post={post} />);

  return (
    <div className="posts-container">
      {postCards}
    </div>
  );
};
