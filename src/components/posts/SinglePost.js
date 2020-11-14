import React, { useState, useEffect } from 'react'
import postsData from '../utils/postsData'
import commentData from '../utils/commentData'
import { CommentCards } from '../comments/CommentCards'
import { Link } from 'react-router-dom'



export const SinglePost = (props) => {
  const [post, setPost ] = useState({})
  const [comments, setComments] = useState([])


  const getPost = () => {
    const { postId } = props.match.params
    postsData.getSinglePost(postId)
      .then((res) => {
        setPost(res.data[0])
        
        commentData.getCommentsByPostId(postId)
          .then((res) => setComments(res.data))
          .catch((err) => console.error(err))
        
      })
      .catch((err) => console.error(err));
  };

  useEffect(getPost, [])

  const deleteComment = (commentId) => {
    commentData.deleteComment(commentId)
      .then((res) => getPost())
      .catch((err) => console.error(err))
  };
  const commentCards = comments.map((comment) => <CommentCards key={comment.id} comment={comment} deleteComment={deleteComment}/>)

  const createCommentLink = `/addComment/${post.id}`

  return (
    <div className="container text-center">
      <div className="posts-container text-center card">
        <img className="card-img-top header-img" src={post.header_img} alt="Album Cover" />
        <h3 className="card-title">{post.title}</h3>
        <h6 className="card-title">{post.publish_date}</h6>
        <p className="card-text">{post.content}</p>
      </div>
      <div className="comment-container card-deck text-center">
        {commentCards}
      </div>
      <Link to={createCommentLink} className="btn btn-primary">Add a comment</Link>
    </div>

  )
}
