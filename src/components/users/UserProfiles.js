import React, { useState, useEffect } from "react"
import { UserContext } from './UserProvider.js'
import { useContext } from "react"
import { Table, Form} from 'react-bootstrap'
import { UserTable } from './UserTable'	
import './usercard.css'



export const UserProfiles = props => {
  const {users, getUsers} = useContext(UserContext)


  useEffect(() =>{
    getUsers()
  }, [])

  const toggleChecked = (e) => {
    e.preventDefault()
    if (e.target.checked === true) {
      e.target.checked = false
    } else {
      e.target.checked = true
    }
  }

  const UserEntries = users && users.results ?  users.results.map((user) => <UserTable key={user.id} user={user} users={users}/>) : ''

  return (
    <article className="users">
      <h1>Users</h1>
      <Table bordered striped hover className="col-6 offset-3">
          {UserEntries}
      </Table>
    </article>
    
  )
}
