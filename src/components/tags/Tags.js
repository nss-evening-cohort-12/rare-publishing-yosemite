import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { TagContext } from './TagProvider'
import { UserContext } from '../users/UserProvider'
import './Tags.css'

export const Tags = (props) => {
  const { tags, getTags, deleteTag } = useContext(TagContext)
  const { getSingleUser, user } = useContext(UserContext)

  const userId = localStorage.getItem('user_id')

  useEffect(() => {
    getSingleUser(userId)
  }, [])
  
  useEffect(() => {
    getTags()
  }, [])

  return (
    <div className="container">
      <h1 className="text-Center">Tags</h1>
      <div className="add">
        <Link className="offset-5 create" to={"/tags/new"}>Create New Tag<i className="fas fa-plus fa-lg ml-2"></i></Link>
      </div>
      <div className="taglist-container container text-left col-6">
        <ul className="list-group">
          {
            tags && tags.results
            ? tags.results.map((tag) => { 
              return(
                  user && user.user 
                    ? user.user.is_staff 
                      ? <li key={tag.id} className="list-group-item"> 
                          <Link className="text-nowrap mr-2" to={`/tags/${tag.id}/edit`}><i className="fas fa-cog fa-lg"></i></Link>
                          <i className="fas fa-trash-alt mr-2 fa-lg" onClick={e => {
                            e.preventDefault()
                            deleteTag(tag.id)}}></i>
                          {tag.label}
                        </li>
                      : <li key={tag.id} className="list-group-item">{tag.label}</li>
                    : ''
              ) 
            })
          : ''
          }
        </ul>
      </div>
    </div>
  );
};
