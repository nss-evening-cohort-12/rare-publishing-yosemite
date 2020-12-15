import React, { useContext, useEffect } from "react"
import { PostsCards } from "./PostsCards"
import { Link } from "react-router-dom"
import { PostContext } from "./PostProvider";
import { Table } from 'react-bootstrap'

export const Posts = props => {
  const { posts, getPosts, deletePost } = useContext(PostContext)

  useEffect(() => {
    getPosts()
  }, []);

  // const postCards = posts && posts.results ? posts.results.map((post) => <PostsCards {...props} key={post.id} post={post} deletePost={deletePost}/>) :''

  return (
    <div className="container">
      <Link to="/addPost" className="btn btn-info">Add New Post</Link>
      <Link to="/myPosts" className="btn btn-primary">View My Posts</Link>
      <Table bordered>
        <thead className="table-dark">
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Date</th>
            <th scope="col">Category</th>
            <th scope="col">Tags</th>
          </tr>
        </thead>
        <tbody>
          {
            posts && posts.results 
            ? posts.results.map((post) => 
            <tr>
              <button className="btn btn-primary"><i className="far fa-edit"></i></button>
              <button className="btn btn-danger" onClick={e => {
                e.preventDefault();
                deletePost(post.id)}}><i className="fas fa-trash-alt"></i></button>
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
