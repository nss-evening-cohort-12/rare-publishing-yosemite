import React, { useState, useEffect } from "react"
import { UserContext } from './UserProvider.js'
import { useContext } from "react"
import { Table, Form} from 'react-bootstrap'
import './usercard.css'



export const UserProfiles = props => {
  const {users, getUsers} = useContext(UserContext)


  useEffect(() =>{
    getUsers()
  }, [])

  const isActive = <input></input>

  return (
    <article className="users">
      <h1>Users</h1>
      <Table bordered striped hover className="col-6 offset-3">
        <tbody>
          {
            users && users.results
            ? users.results.map((user) =>
              <tr key={user.user.id}>
                <td>{user.user.username}</td>
                <td>
                  {
                    <Form>
                      <Form.Group>
                        <Form.Check type="checkbox"  label="Is Active" checked={user.user.is_active} value={user.user.is_active} onChange={!user.user.is_active}/>
                      </Form.Group>
                    </Form>
                  }
                </td>
                <td>
                  { 
                    <Form>
                      <Form.Group>
                        <Form.Check inline type="radio" label="Author" />
                        <Form.Check inline type="radio" label="Admin" />
                      </Form.Group>
                    </Form>
                  }
                </td>
              </tr>
            )
            : ''
          }
        </tbody>
      </Table>
    </article>
    
  )
}
