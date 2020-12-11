import React, { useState, useContext } from 'react'
import { TagContext } from './TagProvider'

// import tagData from '../utils/tagData'

export const TagForm = (props) => {
  const { createTag } = useContext(TagContext)

  const [ currentTag, setCurrentTag ] = useState({
    label: '',
  })

  const handleControlledInputChange = e => {
    currentTag[e.target.name] = e.target.value
    setCurrentTag(currentTag)
  }

  return (
    <div className="text-center">
      <h1>Add A Tag!</h1>
      <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor ="label">Tag Label</label>
            <input
            type="text"
            name="label"
            className="form-control"
            defaultValue={currentTag.label}
            placeholder="Enter Tag label"
            onChange={handleControlledInputChange}
            />
          </div>
          <button className="btn button btn-danger" type="submit" onClick={e => {
            e.preventDefault();
            const tag = {
              label: currentTag.label
            }
            createTag(tag)
              .then(props.history.push({pathname: "/tags"}))
          }}>Create</button>
      </form>
    </div>
  )
}
