import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { PostContext } from './PostProvider'
// import tagData from '../utils/tagData'
// import { TagCards } from '../tags/TagCards'



export const SinglePost = (props) => {
  const { getPostById } = useContext(PostContext)
  const [post, setPost] = useState([])
  const [comments, setComments] = useState([])
  const [tags, setTags] = useState([])

  console.log(post.tags)

  useEffect(() => {
    const { postId } = props.match.params
    getPostById(postId).then(post => {
      setPost(post)
    })
  }, [props.match.params.postId])

  // const getTags = () => {
  //   tagData.getAllTags
  // };

  // const tagCards = tags.map((tag) => <TagCards key={tag.id} />)
  const createCommentLink = `/addComment/${post.id}`

  return (
    <div className="container text-center">
      <div className="posts-container text-center card">
        <img className="card-img-top header-img" src={post.header_img_url} alt="Album Cover" />
        <h3 className="card-title">{post.title}</h3>
        <h6 className="card-title">{post.publish_date}</h6>
        <p className="card-text">{post.content}</p>
        <button className="btn btn-secondary" onClick={e => props.history.push({pathname: `/comments/${post.id}`})}>Comments</button>
      </div>
      <div className="tags">
        {/* {tags} */}
      </div>
      <Link to={createCommentLink} className="btn btn-primary">Add a comment</Link>
    </div>

  )
}
