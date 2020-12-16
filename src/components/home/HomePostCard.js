import React from 'react'

import "./HomePostCard.css"

export const HomePostCard = props => {
    const { post } = props
    return (
      <div className="home-card-container">
        <div className="home-card">
          <div className="heading">
            <h2>{post.title}</h2>
            <p>Publication Date: {post.publication_date}</p>
          </div>
          <div className="home-img-container">
            <img className="home-img" src={post.header_img_url}></img>
          </div>
          <div className="home-footer">
            <p>Author: {post.user.user.first_name} {post.user.user.last_name}</p>
          </div>
        </div>
      </div>
    )
}
