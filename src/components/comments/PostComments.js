import React, { useContext, useEffect } from 'react'
import { CommentContext } from "./CommentProvider"

import "./PostComments.css"

export const PostComments = props => {
  const { comments, getCommentsById } = useContext(CommentContext)

  useEffect(() => {
    const postId = props.match.params
    getCommentsById(postId)
  }, [])

  return (
    <h1>comments</h1>
  )
}
