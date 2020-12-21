import React, { useState } from 'react'

export const UserContext = React.createContext()

export const UserProvider = props => {
    const [ users, setUsers] = useState([])
    const [ user, setUser ] = useState({})

    const getUsers = () => {
        return fetch('http://localhost:8000/user',{
            headers:{
            "Authorization": `Token ${localStorage.getItem("r_token")}`
            }
        })
            .then(response => response.json())
            .then(setUsers)
        }
}