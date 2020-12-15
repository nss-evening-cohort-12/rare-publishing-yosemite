import React, { useContext, useEffect } from 'react';
import { TagContext } from './TagProvider'

export const Tags = (props) => {
  const { tags, getTags, deleteTag } = useContext(TagContext)
  
  useEffect(() => {
    getTags()
  }, [])

  return (
    <div className="container">
      <h1 className="text-center">Tags</h1>
      <div className="add">
        <button className="btn btn-warning offset-5" onClick={e => {props.history.push({pathname: "/tags/new"})}}>Create New Tag</button>
      </div>
      <div className="taglist-container container text-center col-6">
        <ul className="list-group">
          {
            tags && tags.results
            ? tags.results.map((tag) => 
            <li key={tag.id} className="list-group-item">
              {tag.label}
              <button className="btn btn-sm btn-secondary text-right text-nowrap" onClick={e => props.history.push({pathname:`/tags/${tag.id}/edit`})}><i className="far fa-edit"></i></button>
              <button className="btn btn-sm btn-danger text-right text-nowrap" onClick={e => {
                e.preventDefault()
                deleteTag(tag.id)}}><i className="fas fa-trash-alt"></i>
              </button>
            </li>
            )
            : ''
          }
        </ul>
      </div>
    </div>
  );
};
