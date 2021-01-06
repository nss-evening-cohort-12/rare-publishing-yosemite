import React, { useState } from 'react'

export const UserContext = React.createContext()

export const UserProvider = (props) => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})

  const getUsers = () => {
    return fetch('http://localhost:8000/users',{
      headers:{
        "Authorization": `Token ${localStorage.getItem("r_token")}`
      }
    })
      .then(response => response.json())
      .then(setUsers)
  }

  const getSingleUser = (id) => {
    return fetch(`http://localhost:8000/users/${id}`)
      .then(response => response.json())
      .then(setUser)
  }

  const updateUser = (user) => {
    return fetch(`http://localhost:8000/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(getUsers)
  }

  return (
    <UserContext.Provider value={
      {
      getUsers,
      users,
      getSingleUser,
      user,
      updateUser
    }
    }>
      {props.children}
    </UserContext.Provider>
  )
}
