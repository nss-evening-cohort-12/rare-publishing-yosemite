import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { PostContext } from "./PostProvider";
import { Table } from 'react-bootstrap'
import { CategoryContext } from "../categories/CategoryProvider";

export const Posts = props => {
  const { posts, getPosts, deletePost, getPostsByCat } = useContext(PostContext)
  const { categories, getCategories } = useContext(CategoryContext)

  useEffect(() => {
    getPosts()
  }, []);

  useEffect(() => {
    getCategories()
  }, []);

  const sortByCategory = (e) => {
    e.preventDefault();
    const catId = e.target.value
    getPostsByCat(catId)
    props.history.push({pathname: `/posts?category=${catId}`})
  };


  return (
    <div className="container">
      <Link to="/addPost" className="btn btn-info">Add New Post</Link>
      <Link to="/myPosts" className="btn btn-primary">View My Posts</Link>
      <h3>Sort By: </h3>
      <select
      id="category_id"
      name="category"
      onChange={sortByCategory}
      >
        {
          categories && categories.results
          ? categories.results.map((cat) => { return <option value={cat.id} key={cat.id}>{cat.label}</option> }) 
          : ''
        }
        {/* <option onChange={props.history.push({pathname: "/allposts"})}>All</option> */}
      </select>
      <Table bordered striped hover>
        <thead className="table-dark">
          <tr>
            <th scope="col" className="text-center ">Actions</th>
            <th scope="col" className="text-center">#</th>
            <th scope="col" className="text-center">Title</th>
            <th scope="col" className="text-center">Date</th>
            <th scope="col" className="text-center">Category</th>
            <th scope="col" className="text-center">Tags</th>
          </tr>
        </thead>
        <tbody>
          {
            posts && posts.results 
            ? posts.results.map((post) => 
            <tr key={post.id}>
              <th scope="row">
                <button className="btn btn-primary mr-0" onClick={e => props.history.push({pathname: `/posts/${post.id}/edit`})}><i className="far fa-edit"></i></button>
                <button className="btn btn-warning  ml-1 mr-0" onClick={e => props.history.push({pathname: `posts/${post.id}`})}><i className="fas fa-search-plus"></i></button>
                <button className="btn btn-danger ml-1" onClick={e => {
                  e.preventDefault();
                  deletePost(post.id)}}><i className="fas fa-trash-alt"></i></button>
              </th>
              <th scope="row">{post.id}</th>
              <td>{post.title}</td>
              <td>{post.publication_date}</td>
              <td>{post.category.label}</td>
              <td><ul>{post.tags.map(tag => <li>{tag.label}</li>)}</ul></td>
            </tr>
            ) 
            :''
          }
        </tbody>
      </Table>
    </div>
  );
};
