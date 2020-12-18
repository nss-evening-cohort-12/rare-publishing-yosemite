import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom"
import { PostContext } from "../posts/PostProvider";
import { DeletePostModal } from "./DeletePostModal"

import "../home//HomePostCard.css"
import "./UserPostCard.css"

export const UserPostCard = props => {
    const { deletePost } = useContext(PostContext)
    const [deleteShow, setDeleteShow ] = useState(false) 
    const { post } = props

    const handleDeleteClose = () => setDeleteShow(false);
    const handleDeleteShow = () => setDeleteShow(true);

    const deleteEvent = (e) => {
      e.preventDefault();
      deletePost(post.id)
    };
  

    const updatePost = `/posts/${post.id}/edit`

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
          <div className="user-footer">
            <div className="author-foot">
              <p>Author: {post.user.user.first_name} {post.user.user.last_name}</p>
            </div>
            <div className="user-options">
              <Link to ={updatePost}><i className="fas fa-cog mr-3"></i></Link>
              <i className="fas fa-trash-alt mr-3" onClick={handleDeleteShow}></i>
              <DeletePostModal handleDeleteClose={handleDeleteClose} deleteShow={deleteShow} deleteEvent={deleteEvent}/>
            </div>
          </div>
        </div>
      </div>
    )
}
