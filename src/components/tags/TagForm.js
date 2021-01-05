import React, { useState, useContext } from 'react'
import { useEffect } from 'react'
import { TagContext } from './TagProvider'

// import tagData from '../utils/tagData'

export const TagForm = (props) => {
  const { createTag, getTag, editTag } = useContext(TagContext)

  const [ currentTag, setCurrentTag ] = useState({
    label: '',
  })

  const handleControlledInputChange = e => {
    currentTag[e.target.name] = e.target.value
    setCurrentTag(currentTag)
  }

  useEffect(() => {
    if ("tagId" in props.match.params) {
      getTag(props.match.params.tagId)
      .then( tag => {
        setCurrentTag({
          label: tag.label
        })
      })
    }
  }, [props.match.params.tagId])

  return (
    <div className="text-center">
      {
        ("tagId" in props.match.params)
        ? <h1>Edit Tag</h1>
        : <h1>Add A Tag</h1>
      }
      <form className="col-4 offset-4">
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
          {
            ("tagId" in props.match.params)
            ? <button className="btn btn-primary" type="submit" onClick={e => {
              e.preventDefault();
              const tag = {
                id: parseInt(props.match.params.tagId),
                label: currentTag.label
              }
              editTag(tag)
                .then(() => props.history.push({pathname: "/tags"}))
            }}>Edit</button>
            :  <button className="btn button btn-danger" type="submit" onClick={e => {
                e.preventDefault();
                const tag = {
                  label: currentTag.label
                }
                createTag(tag)
                  .then(props.history.push({pathname: "/tags"}))
              }}>Create</button>
          }
      </form>
    </div>
  )
}
