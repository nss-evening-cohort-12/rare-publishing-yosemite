import React, { useState, useEffect } from "react"
import { UserContext } from './UserProvider.js'
import { UserCards } from './UserCards'
import { useContext } from "react"
import './usercard.css'

export const UserProfiles = props => {
  const {users, getUsers} = useContext(UserContext)

  useEffect(() =>{
    getUsers()
  }, [])

  

  const userCards = users && users.results ?  users.results.map((user) => <UserCards key={user.id} user={user} />) : ''

  return (
    <article className="users">
      <h1>users</h1>
      <div className="user-container">
      {userCards}
    </div>
    </article>
    
  )
}
