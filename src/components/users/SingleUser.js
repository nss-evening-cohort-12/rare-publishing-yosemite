import React, { useState, useEffect, useContext } from 'react'
import usersData from '../utils/usersData'
import { UserContext } from './UserProvider'

export const SingleUser = props => {
  const [user, setUser] = useState([])
  const { getSingleUser } = useContext(UserContext)

  

  useEffect(() => {
    const { userId } = props.match.params
    getSingleUser(userId).then(user => {
      setUser(user)
    })
  }, [props.match.params.userId])

  return (
    <div className="card">
      <img className="card-img-top header-img" src={user.avatar} alt="Album Cover" />
      <div className="card-body">
        <h3 className="card-title text-left">{user.name}</h3>
        <h4 className="card-title post-date text-left">{user.display_name}</h4>
        <p className="card-content post-content">{user.email}</p>
        <p className="card-content post-content">{user.user_type}</p>
        <p className="card-content post-content">{user.creation_date}</p>
      </div>
    </div>
  )
}
