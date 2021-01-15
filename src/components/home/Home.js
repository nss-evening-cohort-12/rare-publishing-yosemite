import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { PostContext } from "../posts/PostProvider";
import { HomePostCard } from "./HomePostCard"

import "./Home.css"

export const Home = props => {
  const { posts, getSubbedPosts, deletePost } = useContext(PostContext)

  useEffect(() => {
    const userId = localStorage.getItem("user_id")
    getSubbedPosts(userId)
  }, []);

  const postCards = posts && posts.results ? posts.results.map((post) => <HomePostCard {...props} key={post.id} post={post} />) : ''

    return (
      <div className="home-container">
                <h1>Subscribed Posts</h1>
        <div className="preview-container">
            {postCards}
        </div>
      </div>
    )
}
