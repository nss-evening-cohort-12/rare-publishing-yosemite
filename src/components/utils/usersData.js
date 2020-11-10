import axios from 'axios'

const baseUrl = 'http://localhost:8088'

const createUser = (new_user) => axios.post(`${baseUrl}/users`, new_user)

export default { createUser }
