import React, { useState, useEffect } from "react"
import usersData from '../utils/usersData'
import { UserCards } from './UserCards'

export const UserProfiles = props => {
  const [users, setUsers] = useState([])

  const getUsers = () => {
    usersData.getAllUsers()
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err))
  }

  useEffect(getUsers, []);

  const userCard = users.map((user) => <UserCards key={user.id} user={user} />)

  return (
    <div className="user-container card-deck text-center">
      {userCard}
    </div>
  )
}
