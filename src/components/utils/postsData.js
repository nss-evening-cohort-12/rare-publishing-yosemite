import axios from 'axios'

const baseUrl = 'http://localhost:8088'

const getAllPosts = () => axios.get(`${baseUrl}/posts`)

const getSinglePost = (postId) => axios.get(`${baseUrl}/posts/${postId}`)

const deletePost = (postId) => axios.delete(`${baseUrl}/posts/${postId}`)

const createPost = (newPost) => axios.post(`${baseUrl}/posts`, newPost)

const updatePost = (postId, editedPost) => axios.put(`${baseUrl}/posts/${postId}.json`, editedPost);

const getUsersPosts = (user_id) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/entries?q="${user_id}"`)
    .then((response) => {
      const usersPosts = response.data
      const userPosts = []

      Object.keys(usersPosts).forEach((userId) => {
        const user = usersPosts[userId];
        user.id = userId;
        userPosts.push(user);
      });
      resolve(userPosts);
    })
    .catch((err) => reject(err));
});

export default {
  getAllPosts,
  deletePost,
  createPost,
  getSinglePost,
  getUsersPosts,
  updatePost
}
