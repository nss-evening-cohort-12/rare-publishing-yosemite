import React, { useContext, useEffect } from "react"
import usersData from '../utils/usersData'
import { UserCards } from './UserCards'
import { UserContext } from "./UserProvider"

export const UserProfiles = props => {
  const { users, getUsers } = useContext(UserContext)

  

  useEffect(() => {
    getUsers()
  }, []);

  const userCard = users && users.results ? users.results.map((user) => <UserCards key={user.id} user={user} />) :''

  return (
    <div className="user-container card-deck text-center">
      {userCard}
    </div>
  )
}
