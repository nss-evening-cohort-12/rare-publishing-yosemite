import React, { useContext, useEffect } from 'react'
import { CategoryContext } from './CategoryProvider.js'
import { CategoryCards } from './CategoryCards';

export const CategoryList = (props) => {
    const { categories, getCategories, deleteCategory } = useContext(CategoryContext)

    useEffect(() => {
      getCategories()
    }, [])

    const categoryCards = categories && categories.results ? categories.results.map((category) => <CategoryCards key={category.id} deleteCategory={deleteCategory} category={category} />) : ''
    return (
      <article className="categories">
        <div className="cat-new">
        <button className="btn btn-primary "
          onClick={() => {
          props.history.push({ pathname: "/categories/new" })
          }}
      >Create New Category</button>
        </div>
      
        {categoryCards}
      {/* {
          categories.results.map(category => {
              return <section key={category.id} className="category">
                  <div className="category__title">{category.label}</div>
              </section>
          })
      } */}
  </article>
    )
}
