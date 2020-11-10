import axios from 'axios'

const baseUrl = 'http://localhost:8088'

const getAllCats = () => axios.get(`${baseUrl}/categories`)

const deleteCat = (catId) => axios.delete(`${baseUrl}/categories/${catId}`)

const createCat = (newCat) => axios.post(`${baseUrl}/categories`, newCat)

export default { getAllCats, deleteCat, createCat }
