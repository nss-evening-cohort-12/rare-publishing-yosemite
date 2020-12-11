import React, { useContext, useEffect } from 'react'
import { CategoryContext } from './CategoryProvider.js'

export const CategoryList = (props) => {
    const { categories, getCategories } = useContext(CategoryContext)

    useEffect(() => {
      getCategories()
    }, [])

    return (
      <article className="categoriess">
      <button className="btn btn-2 btn-sep icon-create"
          onClick={() => {
          props.history.push({ pathname: "/categories/new" })
          }}
      >Create New Category</button>
      {
          categories.map(category => {
              return <section key={`category--${category.id}`} className="category">
                  <div className="category__title">{category.label}</div>
              </section>
          })
      }
  </article>
    )
}
