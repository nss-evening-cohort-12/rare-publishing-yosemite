import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from './UserProvider'

export const SingleUser = props => {
  const { getSingleUser, user } = useContext(UserContext)

  

  useEffect(() => {
    const { userId } = props.match.params
    getSingleUser(userId)
  }, [props.match.params.userId])

  console.error(user, "user")

  return (
    <div className="container">
     { user.user ?
     <div className="card">
        <img className="card-img-top header-img" src={user.profile_image} alt="Profile Pic" />
        <div className="card-body">
          <h3 className="card-title text-left">{user.user.first_name} {user.user.last_name}</h3>
          <h4 className="card-title post-date text-left">{user.user.username}</h4>
          <p className="card-content post-content">{user.user.email}</p>
          <p className="card-content post-content">{user.created_on}</p>
          <p className="card-content post-content">{user.bio}</p>
        </div>
      </div>
      : ''
      }
    </div>
  )
}
