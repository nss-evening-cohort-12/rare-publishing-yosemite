import React from 'react';

export const PostsCards = props => {
  const { post } = props;

  return (
    <div className="post-cards-container">
      <img className="card-img-top header-img" src={post.header_img} alt="Album Cover" />
      <div className="card-body">
        <h3 className="card-title text-left">{post.title}</h3>
        <h4 className="card-title post-date text-left">{post.publish_date}</h4>
        <p className="card-content post-content">{post.content}</p>
      </div>
    </div>
  );
};
