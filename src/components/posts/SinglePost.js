import React, { useState, useEffect, useContext } from 'react'
import postsData from '../utils/postsData'
import commentData from '../utils/commentData'
import { CommentCards } from '../comments/CommentCards'
import { Link } from 'react-router-dom'
import { PostContext } from './PostProvider'
import { TagContext } from '../tags/TagProvider'
import { UserContext } from '../users/UserProvider'
import { SubscriptionContext } from '../subscriptions/SubscriptionProvider'
import {Button} from 'react-bootstrap'
// import tagData from '../utils/tagData'
// import { TagCards } from '../tags/TagCards'

import "./SinglePost.css"


export const SinglePost = (props) => {
  const { getPostById, post } = useContext(PostContext)
  const { getTagsByPostId, tags } = useContext(TagContext)
  const { getSingleUser, user } = useContext(UserContext)
  const {  getSub, subscriptions } = useContext(SubscriptionContext)

  // const [ currentSubscription, setCurrentSubscription ] = useState({
  //   follower_id: '',
  //   author_id: ''
  // })
  const subUnsub = (e) => {
    e.preventDefault()
    const author_id = this.props.match.params.userId;
    const follower_id = localStorage.getItem('user_id')
    const { sub } = this.state
    if (!sub) {
      const new_sub = {
        follower_id,
        author_id,
      }
      fetch("http://127.0.0.1:8000/subscriptions", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
          new_sub
        )
      })
        .then(res => res.json())
        .then(res => {
          this.getSub()
        })
    }
    else {
      return fetch(`http://localhost:8000/subscriptions/${sub.id}`, {
      method: "DELETE",
        headers: {
          "Authorization": `Token ${localStorage.getItem("rare_user_id")}`}
    }).then(() => {
      this.getSub()
    })
    }
  }
  

  const user_id = localStorage.getItem("user_id")

  useEffect(() => {
    const { postId } = props.match.params
    getPostById(postId)
  }, [props.match.params.postId])

  useEffect(() => {
    const { postId } = props.match.params
    getTagsByPostId(postId)
  }, [])

  useEffect(() => {
    getSingleUser(user_id)
  }, []);

  const tagCards = tags && tags.results ? tags.results.map((tag) => {
    return <div>
      <h3 className="mt-3">Tags:</h3>
      <h6 key={tag.id} className="tag-card">{tag.label}</h6>
    </div>
  }) : ''

  const updatePost = `/posts/${post.id}/edit`
  const commentLink = `/comments/${post.id}`

  const showOptions = () => {
    if (user && user.user) {
      if (user.id === post.user.id || user.user.is_staff) {
        return <div className="single-options"><i className="fas fa-trash-alt mr-3"></i><Link to ={updatePost}><i className="fas fa-cog mr-3"></i></Link></div>
      }
    } else {
      return <p></p>
    }
}

  return (
    <div className="single-main-container">
        <div className="single-post-container">
          <div>
          {/* <button className="btn button btn-danger" type="submit" onClick={e => {
                  e.preventDefault();
                  const subscription = {
                    follower_id: currentSubscription.follower_id,
                    author_id: currentSubscription.author_id
                  }
                  createSubscription(subscription)
                    .then(props.history.push({pathname: "/subscriptions"}))
            }}>Create</button>          */}
          </div>
            <div className="single-heading">
              { post && post.user ? showOptions() : ''}
              <div className="single-title">
                <h1>{post.title}</h1>
              </div>
              <div className="single-category mt-4">
                {post && post.category 
                ? <h6 className="cat-label">{post.category.label}</h6>
                : ''}
              </div>
            </div>
            <div className="single-img-container">
              <img className="single-img" src={post.header_img_url} alt=''></img>
            </div>
            <div className="sub-heading">
              <div className="single-author">
                {post && post.user ? <p>By: {post.user.user.first_name} {post.user.user.last_name}</p> : ''}
              </div>
              <div className="navbar__item">
              <Link className="navbar__link com-link" to={commentLink}>Comments</Link>
              </div>
            </div>
            <div className="post-content">
              {post.content}
            </div>
        </div>
        <div className="single-tag-container mt-0">
          {tagCards}
        </div>     
        
    </div>
  )
}
