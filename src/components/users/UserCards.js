import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './usercard.css'

export const UserCards = props => {
  const { user } = props;

  const singleUser = `/singleUser/${user.id}`
  const staff = user.user.is_staff ? 'Staff' : 'Rare User'
  return (
    <div className="user-card">
      <div className="user-card-body">
        <h3 className="user-card-title ">{user.user.first_name} {user.user.last_name}</h3>
        <h4 className="user-card-title ">{user.user.username}</h4>
        <p className="user-card-content ">{staff}</p>
        {/* <Link to={singleUser} className="btn btn-secondary">View User</Link> */}
      </div>
    </div>
  );
};
