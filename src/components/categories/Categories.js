import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import {CategoryCards} from './CategoryCards';
import catData from '../utils/categoryData';

export const Categories = (props) => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    catData.getAllCats()
      .then((res) => {
        setCategories(res.data)})
      .catch((err) => console.error(err))
  };

  useEffect(getCategories, [])

  const deleteCategory = (catId) => {
    catData.deleteCat(catId)
      .then((res) => {
        getCategories();
      })
      .catch((err) => console.error(err))
  };

  const catCards = categories.map((category) => <CategoryCards key={category.id} category={category} deleteCategory={deleteCategory}/>)

  return (
    <div className="container-fluid text-center">
    <h1>Category Management </h1>
    <div className="add">
      <Link to="/addCat" className="btn btn-info">Add New Category</Link>
    </div>
    <div className="card-deck text-center">
      {catCards}
    </div>
  </div>
  );
};


// class Categories extends React.Component {
//   state = {
//     categories: [],
//   }

//   componentDidMount() {
//     this.getAllCategories();
//   }

//   getAllCategories = () => {
//     return fetch("http://localhost:8088/categories/")
//     .then(res => res.json())
//     .then(res => {
//       this.setState({ categories: res })
//     })
//   }

//   render() {
//     const { categories } = this.state;
//     const category = categories.map((category) => <Category key={category.id} category={category} />)
//     return (
//       <div className="categories">
//         <h1> View All Categories</h1>
//         <button className=" btn btn-danger">Create a Category</button>
//         <div className="cat-container">
//           {category}
//         </div>
//       </div>
//     )
//   }
// }

// export default Categories
