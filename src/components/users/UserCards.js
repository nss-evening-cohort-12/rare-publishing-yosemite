import React from 'react';
import { Link } from 'react-router-dom';


export const UserCards = props => {
  const { user } = props;

  const singleUser = `/singleUser/${user.id}`

  return (
    <div className="card">
      <img className="card-img-top header-img" src={user.avatar} alt="Album Cover" />
      <div className="card-body">
        <h3 className="card-title text-left">{user.first_name}</h3>
        <h4 className="card-title post-date text-left">{user.display_name}</h4>
        <p className="card-content post-content">{user.user.email}</p>
        <p className="card-content post-content">{user.user_type}</p>
        <p className="card-content post-content">{user.creation_date}</p>
        <Link to={singleUser} className="btn btn-secondary">View User</Link>
      </div>
    </div>
  );
};
