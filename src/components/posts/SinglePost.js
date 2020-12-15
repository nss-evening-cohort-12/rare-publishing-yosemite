import React, { useState, useEffect, useContext } from 'react'
import postsData from '../utils/postsData'
import commentData from '../utils/commentData'
import { CommentCards } from '../comments/CommentCards'
import { Link } from 'react-router-dom'
import { PostContext } from './PostProvider'
// import tagData from '../utils/tagData'
// import { TagCards } from '../tags/TagCards'



export const SinglePost = (props) => {
  const { post, getPostById } = useContext(PostContext)
  const [comments, setComments] = useState([])
  const [tags, setTags] = useState([])

  console.log(post.tags)

  useEffect(() => {
    const { postId } = props.match.params
    getPostById(postId)
  }, [props.match.params.postId])

  // const getTags = () => {
  //   tagData.getAllTags
  // };

  // const deleteComment = (commentId) => {
  //   commentData.deleteComment(commentId)
  //     .then((res) => getPost())
  //     .catch((err) => console.error(err))
  // };
  

  // const commentCards = comments.map((comment) => <CommentCards key={comment.id} comment={comment} deleteComment={deleteComment}/>)
  // const tagCards = tags.map((tag) => <TagCards key={tag.id} />)
  const createCommentLink = `/addComment/${post.id}`

  return (
    <div className="container text-center">
      <div className="posts-container text-center card">
        <img className="card-img-top header-img" src={post.header_img} alt="Album Cover" />
        <h3 className="card-title">{post.title}</h3>
        <h6 className="card-title">{post.publish_date}</h6>
        <p className="card-text">{post.content}</p>
        <Link className="btn btn-secondary" to='/tags'>Manage tags</Link>
      </div>
      <div className="tags">
        {/* {tags} */}
      </div>
      <div className="comment-container card-deck text-center">
        {/* {commentCards} */}
      </div>
      <Link to={createCommentLink} className="btn btn-primary">Add a comment</Link>
    </div>

  )
}
