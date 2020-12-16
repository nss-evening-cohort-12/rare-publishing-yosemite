import React, { useContext, useEffect, useState } from 'react'
import { CategoryContext } from './CategoryProvider.js'
import { CategoryCards } from './CategoryCards';

export const CategoryList = (props) => {
    const { categories, getCategories, deleteCategory, createCategory, updateCategory } = useContext(CategoryContext)

    const [ currentCategory, setCurrentCategory ] = useState({
      label:'',
    })

    const handleControlledInputChange = e => {
      currentCategory[e.target.name] = e.target.value
      setCurrentCategory(currentCategory)
    }

    useEffect(() => {
      getCategories()
    }, [])

    

    const categoryCards = categories && categories.results ? categories.results.map((category) => <CategoryCards key={category.id} deleteCategory={deleteCategory} category={category} updateCategory={updateCategory}/>) : ''
    return (
      
      <article>
        <article className="cat-header">
        <h1>Category Manager</h1>
      </article>
      <div className='categories'>
        <div className="category-cards">
        {categoryCards}
        </div>
        <div className="cat-new">
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor ="label">Category Label</label>
            <input
            type="text"
            name="label"
            className="form-control-cat"
            defaultValue={currentCategory.label}
            placeholder="Enter Category label"
            onChange={handleControlledInputChange}
            />
          </div>
            <button className="btn button btn-danger" type="submit" onClick={e => {
                e.preventDefault();
                const category = {
                  label: currentCategory.label
                }
                createCategory(category)
                  .then(props.history.push({pathname: "/categories"}))
              }}>Create</button>
           
      </form>
        </div>
      
        
      {/* {
          categories.results.map(category => {
              return <section key={category.id} className="category">
                  <div className="category__title">{category.label}</div>
              </section>
          })
      } */}
      </div>
  </article>
    )
}
