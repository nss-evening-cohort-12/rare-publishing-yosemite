import React, { useState, useContext } from 'react';	
import { Link } from 'react-router-dom';	
import './usercard.css'	
import { Form } from 'react-bootstrap'	
import { UserContext } from './UserProvider';

export const UserTable = props => {	
  const { user } = props;	
  const { updateUser, getUsers } = useContext(UserContext);
  const [ isEditing, setIsEditing ] = useState(false)
  const [isActive, setIsActive] = useState(user.user.is_active)
  const [isStaff, setIsStaff] = useState(user.user.is_staff)
  const [currentUser, setCurrentUser] = useState({
    active: user.active,
    bio: user.bio,
    created_on: user.created_on,
    id: user.id,
    profile_image: user.profile_image,
    user: {
      date_joined: user.user.date_joined,
      email: user.user.email,
      first_name: user.user.first_name,
      groups: user.user.groups,
      id: user.user.id,
      is_active: user.user.is_active,
      is_staff: user.user.is_staff,
      is_superuser: user.user.is_superuser,
      last_login: user.user.last_login,
      last_name: user.user.last_name,
      password: user.user.password,
      user_permissions: user.user.user_permissions,
      username: user.user.username
    
    }
  })


  const editor = e => setIsEditing(!isEditing)
  
  const handleControlledInputChange = e => {
    const newUserState = Object.assign({}, currentUser)
    newUserState[e.target.name] = e.target.value
  }
  const updateIsStaff = e => setIsStaff(e.target.value)

  const editUser = e => {
    user.user.is_active = isActive
    user.user.is_staff = isStaff
    console.log(user)
    // updateUser(user)
    setIsEditing(!isEditing)
  }
  

  return (
            <tbody>            
              {
              isEditing 
              ?
              <tr key={user.user.id}>
                <td><button className="btn" onClick={editor}><i className="fas fa-cog fa-lg"></i></button></td>
                <td><Link to={`/users/${user.id}`}>{user.user.username}</Link></td>
                <td>
                  {
                    <Form>
                      <Form.Group>
                        <Form.Check type="checkbox" name="is_active" label="Is Active" checked={currentUser.user.is_active} value={currentUser.user.is_active} onChange={handleControlledInputChange}/>
                      </Form.Group>
                    </Form>
                  }
                </td>
                <td>
                  { 
                    <Form>
                      <Form.Group>
                        <Form.Check inline value={false} checked={currentUser.user.is_staff} name="is_staff" type="radio" label="Author" onChange={handleControlledInputChange} />
                        <Form.Check inline checked={currentUser.user.is_staff} value={true} name="is_staff" type="radio" label="Admin" onChange={handleControlledInputChange} />
                        {/* CURRENTUSER.USER.IS_STAFF IS NOT UPDATING WHETHER OR NOT IT'S CHECKED... */}
                      </Form.Group>
                    </Form>
                  }
                </td>
                <td><button className="btn btn-primary" onClick={editUser}>Save</button></td>
              </tr>
              : 
              <tr key={user.user.id}>
                <td><button className="btn" onClick={editor}><i className="fas fa-cog fa-lg"></i></button></td>
                <td><Link to={`/users/${user.id}`}>{user.user.username}</Link></td>
                <td>{currentUser.user.is_active ? 'Active' : 'Inactive'}</td>
                <td>{currentUser.user.is_staff ? 'Admin' : 'Author'}</td>
              </tr>
            }
          </tbody>
            
  );	
};
