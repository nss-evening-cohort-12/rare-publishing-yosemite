import axios from 'axios'

const baseUrl = 'http://localhost:8088'

const getAllCats = () => axios.get(`${baseUrl}/categories`)

const deleteCat = (catId) => axios.delete(`${baseUrl}/categories/${catId}`)

const createCat = (newCat) => axios.post(`${baseUrl}/categories`, newCat)

const updateCat = (id, newCat) => axios.put(`${baseUrl}/categories/${id}`, newCat)

const getSingleCat = (catId) => axios.get(`${baseUrl}/categories/${catId}`)

export default { 
  getAllCats,
  deleteCat,
  createCat,
  updateCat,
  getSingleCat }
