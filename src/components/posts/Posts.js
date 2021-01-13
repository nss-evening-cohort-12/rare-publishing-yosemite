import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { PostContext } from "./PostProvider";
import { Table } from 'react-bootstrap'
import { CategoryContext } from "../categories/CategoryProvider";
import { TagContext } from "../tags/TagProvider";
import './Posts.css'
import { UserContext } from "../users/UserProvider";
// import { ReactionSelector } from '../reactions/Reactions'
import { ReactionContext } from '../reactions/ReactionProvider'


export const Posts = props => {
  const { posts, getPosts, deletePost, getPostsByCat, getPostsByUserId, getPostsByTag, getPostById, updatePost } = useContext(PostContext)
  const { categories, getCategories } = useContext(CategoryContext)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {reactions, getReactions} = useContext(ReactionContext)
  const [selectedReaction, setSelectedReaction] = useState({})

  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const { getUsers, users, getSingleUser, user } = useContext(UserContext)
  const { tags, getTags } = useContext(TagContext)
  const [ isApproved, setIsApproved ] = useState(false)
  const [post, setPost] = useState({})

  const userId = localStorage.getItem("user_id")

  useEffect(() => {
    getSingleUser(userId)
  }, [])

  useEffect(() => {
    getPosts()
  }, []);

  useEffect(() => {
    getCategories()
  }, []);

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    getTags()
  }, [])

  useEffect(() => {
    getReactions()
  }, [])

  const searchByTag = (e) =>{
    e.preventDefault();
    const tagId = e.target.value
    getPostsByTag(tagId)
  }
  const sortByCategory = (e) => {
    e.preventDefault();
    const catId = e.target.value
    getPostsByCat(catId)
  };

  const sortByUser = (e) => {
    e.preventDefault();
    const uid = e.target.value
    getPostsByUserId(uid)
  };

  const handleReaction = (e) => {
    e.preventDefault()
    const reactionToDatabase = reactions.results.find(r => r.id === parseInt(e.target.value))
    setSelectedReaction(reactionToDatabase)
  }

  const reactionSelect = reactions && reactions.results ? reactions.results.map((reaction) => { return <option value={reaction.id} key={reaction.id}>{reaction.emoji}: {reaction.label}</option> }) :''

  const searchIcon = <i class="fas fa-search"></i>
  return (
    <div className="container p-0">
      <div className="ml-1">
      <div className="d-inline-flex mr-3 mb-2">
      <h5><i className="fas fa-search mb-2"></i></h5>
          <form>
          <input 
          type="text"
          id="tag_id"
          name="tag"
          className=" search mb-2"
          placeholder= " search"
          onChange={searchByTag}
          />
          </form>
      </div>
        </div>
      <div className="sort-buttons ml-1 ">
        <div className="d-inline-flex">
          <h5 className=" mr-3 mb-2">Sort By Category: </h5>
          <select
          id="category_id"
          name="category"
          className="mb-2" 
          onChange={sortByCategory}
          >
            <option value={''}>All</option>
            {
              categories && categories.results
              ? categories.results.map((cat) => { return <option value={cat.id} key={cat.id}>{cat.label}</option> }) 
              : ''
            }
          </select>
        </div>
        <div className="d-inline-flex">
          <h5 className="ml-3 mr-3 mb-2">Sort By user: </h5>
          <select
          id="user_id"
          name="user"
          className="mb-2" 
          onChange={sortByUser}
          >
            <option value={''}>All</option>
            {
              users && users.results
              ? users.results.map((u) => { return <option value={u.user.id} key={u.user.id}>{u.user.first_name} {u.user.last_name}</option> }) 
              : ''
            }
          </select>
        </div>
        <div className="d-inline-flex text-right col-5 pr-0">
          <Link to={'/addpost'} className="addLink d-inline-flex ml-auto "><h5>Add Post</h5><i className="fas fa-plus fa-lg ml-1"></i></Link>
        </div>
      </div>
      <Table bordered striped hover>
        <thead className="table-dark">
          <tr>
            <th scope="col" className="text-center actions-column">Actions</th> 
            <th scope="col" className="text-center">#</th>
            <th scope="col" className="text-center">Title</th>
            <th scope="col" className="text-center">Date</th>
            <th scope="col" className="text-center">Category</th>
            <th scope="col" className="text-center">Tags</th>
            <th scope="col" className="text-center">React</th>
          </tr>
        </thead>
        <tbody>{
            posts && posts.results
            ? posts.results.map((post) => 
            {
              return post.approved || (user && user.user.is_staff)
              ?  <tr key={post.id}>
              {
                user && user.user
                ?  user.user.is_staff || post.user.id === user.id
                      ? <th scope="row" className="actions-row">
                          {
                            user.user.is_staff 
                              ? <div>
                                <input type="checkbox" checked={post.approved} defaultValue={post.id} name="approved" onChange={e => {
                                  post.approved = !post.approved
                                  updatePost({
                                    id: post.id,
                                    user: parseInt(post.user.id),
                                    title: post.title,
                                    content: post.content,
                                    category: parseInt(post.category.id),
                                    publication_date: post.publication_date,
                                    header_img_url: post.header_img_url,
                                    tags: post.tags.map(tag => parseInt(tag)),
                                    approved: post.approved,
                                    reactions: post.reactions.map(reaction => parseInt(reaction.id))
                                  })
                                }}/><label className="ml-2" htmlFor="approved">Approved</label>
                                </div>
                              : ''
                          }
                          <Link className="ml-3 mr-2" to={`posts/${post.id}`}><i className="fas fa-search-plus fa-lg"></i></Link>
                          <Link className="mr-2" to={`/posts/${post.id}/edit`}><i className="fas fa-cog fa-lg"></i></Link>
                          <i className="fas fa-trash-alt mr-3 fa-lg" onClick={(e) => {
                            e.preventDefault();
                            deletePost(post.id)
                          }}></i>
                        </th> 
                      : <th><Link className="ml-3 mr-2" to={`posts/${post.id}`}><i className="fas fa-search-plus fa-lg"></i></Link></th>
                    : ''
              }
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.publication_date}</td>
                <td>{post.category.label}</td>
                <td><ul>{post.tags.map(tag => <li key={tag.id}>{tag.label}</li>)}</ul></td>
                <td>
                {post.reactions.map(reaction => <p>{reaction.emoji}</p>)}
                <div className="form-group">
                    <select
                      id="reaction_id"
                      name="reaction"
                      className="form-control"
                      onChange={handleReaction}
                    >
                      {reactionSelect}
                    </select>
                    <button className="btn btn-primary"
                    onClick={evt => {
                      evt.preventDefault()
                      post.reactions.push(selectedReaction)
                      updatePost ({
                        id: post.id,
                        user: parseInt(post.user.id),
                        title: post.title,
                        content: post.content,
                        category: parseInt(post.category.id),
                        publication_date: post.publication_date,
                        header_img_url: post.header_img_url,
                        tags: post.tags.map(tag => parseInt(tag)),
                        approved: post.approved,
                        reactions: post.reactions.map(reaction => parseInt(reaction.id))
                      })
                    }}>
                      <p>Submit</p>
                    </button>
                  </div>
                </td>
              </tr>
            : ''}
            ) 
          :''
          }
        </tbody>
      </Table>
    </div>
  );
};
