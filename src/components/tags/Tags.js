import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom'

import tagData from '../utils/tagData'
import { TagCards } from './TagCards';

export const Tags = (props) => {
  const [tags, setTags] = useState([]);

  const getTags = () => {
    tagData.getAllTags()
      .then((res) => {
        setTags(res.data)})
      .catch((err) => console.error(err))
  };
  
  useEffect(getTags, [])

  const deleteTag = (tagId) => {
    tagData.deleteTag(tagId)
      .then((res) => {
        getTags();
      })
      .catch((err) => console.error(err))
  };
  
  const tagCards = tags.map((tag) => <TagCards key={tag.id} tag={tag} deleteTag={deleteTag}/>)


  return (
    <div className="container-fluid text-center">
      <h1>Manage Tags!</h1>
      <div className="add">
        <Link to="/addTag" className="btn btn-info">Add New Tag</Link>
      </div>
      <div className="card-deck text-center">
        {tagCards}
      </div>
    </div>
  );
};
