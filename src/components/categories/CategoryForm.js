import React, { useState, useContext } from 'react'
import { useEffect } from 'react';
import { CategoryContext } from './CategoryProvider'

export const CategoryForm = (props) => {
  const { getCategoryById, updateCategory} = useContext(CategoryContext)

  const [ currentCategory, setCurrentCategory ] = useState({
    label:'',
  })

  const handleControlledInputChange = e => {
    currentCategory[e.target.name] = e.target.value
    setCurrentCategory(currentCategory)
  }

  useEffect(() => {
    if ("categoryId" in props.match.params) {
      getCategoryById(props.match.params.categoryId)
      .then( category => {
        setCurrentCategory({
          label: category.label
        })
      })
    }
  }, [props.match.params.categoryId])

  return (
    <div className="text-center">
      <h1>Edit Category</h1>
      <form className="col-6 offset-3">
          <div className="form-group">
            <label  htmlFor ="label">Category Label</label>
            <input
            type="text"
            name="label"
            className="text-center form-control"
            defaultValue={currentCategory.label}
            placeholder="Enter Categorylabel"
            onChange={handleControlledInputChange}
            />
          </div>

            <button className="btn btn-primary" type="submit" onClick={e => {
              e.preventDefault();
              const category = {
                id: parseInt(props.match.params.categoryId),
                label: currentCategory.label
              }
              updateCategory(category)
                .then(() => props.history.push({pathname: "/categories"}))
            }}>Save</button>
      </form>
    </div>
  )
}
