import axios from 'axios'

const baseUrl = 'http://localhost:8088'

const getAllUsers = () => axios.get(`${baseUrl}/users`)

const createUser = (new_user) => axios.post(`${baseUrl}/users`, new_user)

const getUserById = (id) => axios.get(`${baseUrl}/users/${id}`)

export default { createUser, getUserById, getAllUsers }
