import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from './PostProvider';

export const PostsCards = props => {
  const { post } = props;
  const { deletePost } = useContext(PostContext)

  const singlePost = `/posts/${post.id}`
  const updatePost = `/editPost/${post.id}`


  return (
    <div className="card">
      <img className="card-img-top header-img" src={post.header_img} alt="Album Cover" />
      <div className="card-body">
        <h3 className="card-title text-left">{post.title}</h3>
        <h4 className="card-title post-date text-left">{post.publish_date}</h4>
        <p className="card-content post-content">{post.content}</p>
        <button className="btn btn-danger" onClick={() => deletePost(post.id)}>Delete Post</button>
        <Link className="btn btn-primary single-post" to={singlePost}>View Post</Link>
        <Link className="btn btn-primary update-post" to={updatePost}>Edit Post</Link>
      </div>
    </div>
  );
};
