import React, { useState } from 'react'

export const UserContext = React.createContext()

export const UserProvider = (props) => {
  const [rareUsers, setRareUsers] = useState([])

  const getUsers = () => {
    return fetch('http://localhost:8000/rare_users',{
      headers:{
        "Authorization": `Token ${localStorage.getItem("r_token")}`
      }
    })
      .then(response => response.json())
      .then(setRareUsers)
  }

  const getSingleUser = (id) => {
    return fetch(`http://localhost:8000/rare_users/${id}`)
      .then(response => response.json())
  }

  return (
    <UserContext.Provider value={{
      getUsers, rareUsers, getSingleUser
    }}>
      {props.children}
    </UserContext.Provider>
  )
}
