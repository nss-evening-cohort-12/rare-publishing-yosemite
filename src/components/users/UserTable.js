import React, { useState, useContext } from 'react';	
import { Link } from 'react-router-dom';	
import './usercard.css'	
import { Form } from 'react-bootstrap'	
import { UserContext } from './UserProvider';

export const UserTable = props => {	
  const { user, users } = props;	
  const { updateUser, getUsers } = useContext(UserContext);
  const [ isEditing, setIsEditing ] = useState(false)
  const [isActive, setIsActive] = useState(user.user.is_active)
  const [isStaff, setIsStaff] = useState(user.user.is_staff)
  const invalidDialog = React.createRef()



  const editor = e => setIsEditing(!isEditing)
  
  const userId = parseInt(localStorage.getItem('user_id'))

  const adminCount = () => {
    return users.results.filter(u => u.user.is_staff).length    
  }

  const updateIsActive = e => setIsActive(!isActive)
  const updateIsStaff = e => setIsStaff(!isStaff)

  const editUser = e => {
    
    if ( isStaff || (adminCount() > 0 && user.id !== userId)) {
      user.user.is_active = isActive
      user.user.is_staff = isStaff
      updateUser(user.user)
      setIsEditing(!isEditing)
    } else {
      invalidDialog.current.showModal()
    }
  }
  

  return (
            <tbody>
              <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Must be at least one administrator</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>            
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
                        <Form.Check type="checkbox" name="is_active" label="Is Active" checked={isActive} onChange={updateIsActive}/>
                      </Form.Group>
                    </Form>
                  }
                </td>
                <td>
                  { 
                    <Form>
                      <Form.Group>
                        { isStaff ? <Form.Check inline name="is_staff" type="radio" label="Author" onChange={updateIsStaff} /> : <Form.Check inline name="is_staff" checked type="radio" label="Author" onChange={updateIsStaff} />}
                        { isStaff ? <Form.Check inline checked name="is_staff" type="radio" label="Admin" onChange={updateIsStaff} /> : <Form.Check inline name="is_staff" type="radio" label="Admin" onChange={updateIsStaff} />}
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
                <td>{user.user.is_active ? 'Active' : 'Inactive'}</td>
                <td>{user.user.is_staff ? 'Admin' : 'Author'}</td>
              </tr>
            }
          </tbody>
            
  );	
};
