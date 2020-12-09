import React, { useContext, useEffect } from 'react';
import { TagContext } from './TagProvider'
import { TagCards } from './TagCards';

export const Tags = (props) => {
  const { tags, getTags, editTag, deleteTag } = useContext(TagContext)
  
  useEffect(() => {
    getTags()
    
  }, [])
  
  
  const tagCards = tags && tags.results ? tags.results.map((tag) => <TagCards key={tag.id} tag={tag} deleteTag={deleteTag} editTag={editTag}/>) : ''


  return (
    <div className="container-fluid text-center">
      <h1>Manage Tags!</h1>
      <div className="add">
        <button className="btn btn-2" onClick={() => {props.history.push({pathname: "/tags/new"})}}>Add New Tag</button>
      </div>
      <div className="card-deck text-center">
        {tagCards}
      </div>
    </div>
  );
};
