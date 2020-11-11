import axios from 'axios'

const baseUrl = 'http://localhost:8088'

const getAllTags = () => axios.get(`${baseUrl}/tags`)

const deleteTag = (tagId) => axios.delete(`${baseUrl}/tags/${tagId}`)

const createTag = (newTag) => axios.post(`${baseUrl}/tags`, newTag)

const updateTag = (id, newTag) => axios.put(`${baseUrl}/tags/${id}`, newTag)

const getSingleTag = (tagId) => axios.get(`${baseUrl}/tags/${tagId}`)

export default { 
  getAllTags,
  deleteTag,
  createTag,
  updateTag,
  getSingleTag }
