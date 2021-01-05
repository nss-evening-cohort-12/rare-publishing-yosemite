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
     <div className="user-header"><h1 >User Information</h1></div>
      <div className="user-container">
        <div className="row table-headers">
          <div className="user-card-body col"><h3 className="user-card-title col ">Full Name</h3></div>
                {/* <Link to={singleUser} className="btn btn-secondary">View User</Link> */}      
          <div className="col"><h4 className="user-card-title col">UserName</h4></div>
          <div className="col"><h4 className="user-card-content col ">Staff</h4></div>
        </div>
      {userCards}
      
    </div>
    </article>
    
  )
}
