import axios from 'axios'

const baseUrl = 'http://localhost:8088'

const validateUserLogin = (user) => axios.post(`${baseUrl}/login`, user)

export default { validateUserLogin };
