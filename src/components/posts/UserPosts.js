import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { PostContext } from "../posts/PostProvider";
import { UserPostCard } from "./UserPostCard"

import "../home/Home.css"

export const UserPosts = props => {
  const { posts, getPostsByUserId} = useContext(PostContext)

  useEffect(() => {
    const userId = localStorage.getItem("user_id")
    getPostsByUserId(userId)
  }, [])

  const myPosts = posts && posts.results ? posts.results.map((post) => <UserPostCard {...props} key={post.id} post={post} />) : <h1>You haven't written any posts.</h1>

    return (
      <div className="home-container">
        <div className="preview-container">
            {myPosts}
        </div>
      </div>
    )
}
