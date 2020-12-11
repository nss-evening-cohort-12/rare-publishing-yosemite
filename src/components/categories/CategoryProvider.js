import React, { useState } from "react"

export const CategoryContext = React.createContext()

export const CategoryProvider = (props) => {
  const [categories, setCategories] = useState([])

  const getCategories = () => {
    return fetch('http://localhost:8000/categories',{
      headers:{
        "Authorization": `Token ${localStorage.getItem("r_token")}`
      }
    })
      .then(response => response.json())
      .then(setCategories)
  }

  const createCategory = category => {
    return fetch('http://localhost:8000/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(category)
    })
      .then(getCategories)
  }

  const updateCategory = category => {
    return fetch(`http://localhost:8000/categories/${category.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(category)
    })
      .then(getCategories)
  }

  const deleteCategory = id => {
    return fetch(`http://localhost:8000/categories/${id}`, {
      method: 'DELETE',
    })
      .then(getCategories)
  }

  const getCategoryById = (id) => {
    return fetch(`http://localhost:8000/categories/${id}`)
    .then(res => res.json())
}

  return (
    <CategoryContext.Provider value={{
      categories, getCategories, createCategory, updateCategory, deleteCategory, getCategoryById
    }}>
      {props.children}
    </CategoryContext.Provider>
  )
}
