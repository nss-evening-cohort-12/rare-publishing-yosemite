import React, { useContext, useEffect } from "react"
import { PostsCards } from "./PostsCards"
import { Link } from "react-router-dom"
import { PostContext } from "./PostProvider";

export const Posts = props => {
  const { posts, getPosts, deletePost } = useContext(PostContext)

  useEffect(() => {
    getPosts()
  }, []);

  const postCards = posts && posts.results ? posts.results.map((post) => <PostsCards {...props} key={post.id} post={post} deletePost={deletePost}/>) :''

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
