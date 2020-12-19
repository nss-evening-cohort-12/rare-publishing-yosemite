import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { PostContext } from "./PostProvider";
import { Table } from 'react-bootstrap'
import { CategoryContext } from "../categories/CategoryProvider";
import './Posts.css'

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
    <div className="container p-0">
      <div className="sort-buttons row ml-1">
        <h5 className="offset-0 mr-3">Sort By: </h5>
        <select
        id="category_id"
        name="category"
        className="mb-2 text-center" 
        onChange={sortByCategory}
        >
          {
            categories && categories.results
            ? categories.results.map((cat) => { return <option value={cat.id} key={cat.id}>{cat.label}</option> }) 
            : ''
          }
          {/* <option onChange={props.history.push({pathname: "/allposts"})}>All</option> */}
        </select>
        <Link to={'/addpost'} className="addLink offset-9">Add Post<i className="fas fa-plus fa-lg ml-2 mr-1"></i></Link>
      </div>
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
        <tbody>{
            posts && posts.results
            ? posts.results.map((post) => 
            <tr key={post.id}>
              <th scope="row">
                <Link className=" ml-3 mr-2" to={`/posts/${post.id}/edit`}><i className="fas fa-cog fa-lg"></i></Link>
                <Link className="mr-2" to={`posts/${post.id}`}><i className="fas fa-search-plus fa-lg"></i></Link>
                <i className="fas fa-trash-alt mr-3 fa-lg" onClick={e => {
                  e.preventDefault();
                  deletePost(post.id)}}></i>
              </th>
              <th scope="row">{post.id}</th>
              <td>{post.title}</td>
              <td>{post.publication_date}</td>
              <td>{post.category.label}</td>
              <td><ul>{post.tags.map(tag => <li key={tag.id}>{tag.label}</li>)}</ul></td>
            </tr>
            ) 
            :''
          }
        </tbody>
      </Table>
    </div>
  );
};
