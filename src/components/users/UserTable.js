import React, { useState } from 'react';	
import { Link } from 'react-router-dom';	
import './usercard.css'	
import { Form } from 'react-bootstrap'	

export const UserTable = props => {	
  const { user } = props;	
  
  return (
          <tr key={user.user.id}>
            <td><Link to={`/users/${user.id}`}>{user.user.username}</Link></td>
            <td>
              {
                <Form>
                  <Form.Group>
                    <Form.Check type="checkbox"  label="Is Active" checked={user.user.is_active} value={user.user.is_active ? '1' : '0'}/>
                  </Form.Group>
                </Form>
              }
            </td>
            <td>
              { 
                <Form>
                  <Form.Group>
                    <Form.Check inline name="isStaff" type="radio" label="Author" id={user.user.is_staff ? '0' : '1'} />
                    <Form.Check inline name="isStaff" type="radio" label="Admin" id={user.user.is_staff ? '1' : '0'}/>
                  </Form.Group>
                </Form>
              }
            </td>
          </tr>
  );	
};
