import axios from 'axios'

const baseUrl = 'http://localhost:8088'

const getAllPosts = () => axios.get(`${baseUrl}/posts`)

const getSinglePost = (postId) => axios.get(`${baseUrl}/posts/${postId}`)

const deletePost = (postId) => axios.delete(`${baseUrl}/posts/${postId}`)

const createPost = (newPost) => axios.post(`${baseUrl}/posts`, newPost)

const updatePost = (postId, editedPost) => axios.put(`${baseUrl}/posts/${postId}.json`, editedPost);

const getUsersPosts = (user_id) => axios.get(`${baseUrl}/posts?q="${user_id}"`)

export default {
  getAllPosts,
  deletePost,
  createPost,
  getSinglePost,
  getUsersPosts,
  updatePost
}
