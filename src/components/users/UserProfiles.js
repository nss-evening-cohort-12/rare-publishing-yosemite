import React, { useState, useEffect } from "react"
import { UserContext } from './UserProvider.js'
import { useContext } from "react"
import { Link } from "react-router-dom"
import './usercard.css'



export const UserProfiles = props => {
  const {users, getUsers} = useContext(UserContext)


  useEffect(() =>{
    getUsers()
  }, [])

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
        {
          users && users.results
          ? users.results.map((user) =>
            <div className="user-card row">
              <div className="col col-box">
                <h5 className="user-card-title col "> {user.user.first_name} {user.user.last_name}</h5>
                    {/* <Link to={singleUser} className="btn btn-secondary">View User</Link> */}
              </div>
              <div className="col col-box"><Link to={`/users/${user.id}`}><h5 className="user-card-title col">{user.user.username}</h5></Link></div>
              <div className="col"><p className="user-card-content col ">{user.user.is_staff ? 'Admin' : 'Author'}</p></div>
            </div>
          )
          : ''
        }      
    </div>
    </article>
    
  )
}
