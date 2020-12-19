import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { PostContext } from "../posts/PostProvider";
import { HomePostCard } from "./HomePostCard"

import "./Home.css"

export const Home = props => {
  const { posts, getPosts, deletePost } = useContext(PostContext)

  useEffect(() => {
    getPosts()
  }, []);

  const postCards = posts && posts.results ? posts.results.map((post) => <HomePostCard {...props} key={post.id} post={post} />) : ''

    return (
      <div className="home-container">
        <div className="preview-container">
            {postCards}
        </div>
      </div>
    )
}
