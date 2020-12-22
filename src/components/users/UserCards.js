import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './usercard.css'
import { Table } from 'react-bootstrap'

export const UserCards = props => {
  const { user } = props;

  const singleUser = `/singleUser/${user.id}`
  const staff = user.user.is_staff ? 'Admin' : 'Author'
  return (
    <div className="user-card row">
      <div className="col col-box">
        <h5 className="user-card-title col "> {user.user.first_name} {user.user.last_name}</h5>
            {/* <Link to={singleUser} className="btn btn-secondary">View User</Link> */}
      </div>
      <div className="col col-box"><h5 className="user-card-title col">{user.user.username}</h5></div>
      <div className="col"><p className="user-card-content col ">{staff}</p></div>
    </div>
    
  );
};
