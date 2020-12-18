import React, { useState, useEffect, useContext } from 'react'
import postsData from '../utils/postsData'
import commentData from '../utils/commentData'
import { CommentCards } from '../comments/CommentCards'
import { Link } from 'react-router-dom'
import { PostContext } from './PostProvider'
import { TagContext } from '../tags/TagProvider'
// import tagData from '../utils/tagData'
// import { TagCards } from '../tags/TagCards'



export const SinglePost = (props) => {
  const { getPostById } = useContext(PostContext)
  const { getTags, tags } = useContext(TagContext)
  const [post, setPost] = useState({})


  useEffect(() => {
    const { postId } = props.match.params
    getPostById(postId).then(post => {
      setPost(post)
    })
  }, [props.match.params.postId])

  useEffect(() => {
    getTags()
  })

  // const tagCards = tags && tags.results ? tags.results.map(tag => {
  //   return post.tags.some(t => t.id === tag.id)
  //   ? <p>{tag.label}</p>
  //   : ''
  // }) : ''

  return (
    <div className="container text-center col-6 offset-3">
      <div className="posts-container text-center card">
        <img className="card-img-top header-img" src={post.header_img_url} alt="Album Cover" />
        <h3 className="card-title">{post.title}</h3>
        <h6 className="card-title">{post.publish_date}</h6>
        <p className="card-text">{post.content}</p>
        <button className="btn btn-secondary" onClick={e => props.history.push({pathname: `/comments/${post.id}`})}>Comments</button>
      </div>
      <div className="tags container">
        {/* {tagCards} */}
      </div>
      <div className="comment-container card-deck text-center">
        {/* {commentCards} */}
      </div>
    </div>

  )
}
