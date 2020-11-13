import axios from 'axios'

const baseUrl = 'http://localhost:8088'

const createComment = (newComment) => axios.post(`${baseUrl}/comments`, newComment);

const updateComment = (id, newComment) => axios.put(`${baseUrl}/comments/${id}`, newComment)

const deleteComment = (commentId) => axios.delete(`${baseUrl}/comments/${commentId}`)

const getSingleComment = (id) => axios.get(`${baseUrl}/comments/${id}`)

const getCommentsByPostId = (postId) => axios.get(`${baseUrl}/comments?post_id=${postId}`)

export default {
  createComment, 
  updateComment,
  deleteComment,
  getSingleComment,
  getCommentsByPostId
}
