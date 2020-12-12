import React, { useState, useContext } from 'react'
import { useEffect } from 'react';
import { CategoryContext } from './CategoryProvider'

export const CategoryForm = (props) => {
  const { getCategory, updateCategory} = useContext(CategoryContext)

  const [ currentCategory, setCurrentCategory ] = useState({
    label:'',
  })

  const handleControlledInputChange = e => {
    currentCategory[e.target.name] = e.target.value
    setCurrentCategory(currentCategory)
  }

  useEffect(() => {
    if ("categoryId" in props.match.params) {
      getCategory(props.match.params.categoryId)
      .then( category => {
        setCurrentCategory({
          label: category.label
        })
      })
    }
  }, [props.match.params.categoryId])

  return (
    <div className="text-center">
      {/* {
        ("CategoryId" in props.match.params)
        ? <h1>Edit Category</h1>
        : <h1>Add A Tag</h1>
      } */}
      <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor ="label">Tag Label</label>
            <input
            type="text"
            name="label"
            className="form-control"
            defaultValue={currentCategory.label}
            placeholder="Enter Tag label"
            onChange={handleControlledInputChange}
            />
          </div>
          {
            ("categoryId" in props.match.params)
            ? <button className="btn btn-primary" type="submit" onClick={e => {
              e.preventDefault();
              const category = {
                id: parseInt(props.match.params.tagId),
                label: currentCategory.label
              }
              updateCategory(category)
                .then(() => props.history.push({pathname: "/categories"}))
            }}>Edit</button>
            :  <button className="btn button btn-danger" type="submit" onClick={e => {
                e.preventDefault();
                const tag = {
                  label: currentCategory.label
                }
                updateCategory(tag)
                  .then(props.history.push({pathname: "/tags"}))
              }}>Create</button>
          }
      </form>
    </div>
  )
}
