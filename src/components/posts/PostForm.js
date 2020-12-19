import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { TagContext } from '../tags/TagProvider';
import { PostContext } from './PostProvider';

export const PostForm = props => {
  const { createPost, categories, getCategories, getPostById, updatePost } = useContext(PostContext)
  const { getTags, tags } = useContext(TagContext)
  const [currentPost, setCurrentPost] = useState({
    user: "",
    title: "",
    content: "",
    category: 0,
    publication_date: "",
    header_img_url: "",
    tags: []
  })

  useEffect(() => {
    getCategories()
  }, [])

  useEffect(() => {
    getTags()
  }, [])

  const userId = localStorage.getItem("user_id")


  useEffect(() => {
    if ("postId" in props.match.params) {
      getPostById(props.match.params.postId)
      .then(post => {
        setCurrentPost({
          user: userId,
          title: post.title,
          content: post.content,
          category: post.category,
          publication_date: post.publication_date,
          header_img_url: post.header_img_url,
          tags: post.tags
        })
      })
    }
  } , [props.match.params.postId])


  const handleControlledInputChange = (event) => {
    const newPostState = Object.assign({}, currentPost)
    const checkedTags = []
    if (event.target.type !== "checkbox") {
      newPostState[event.target.name] = event.target.value
    } else {
      const checkeds = document.getElementsByTagName("input")
      for (let i = 0 ; i < checkeds.length; i++) {
        if (checkeds[i].checked) {
          checkedTags.push(checkeds[i].value)
        }
      }
      newPostState["tags"] = checkedTags
    }
    setCurrentPost(newPostState)
  }

  const categorySelect = categories && categories.results ? categories.results.map((category) => { return <option value={category.id} key={category.id}>{category.label}</option> }) :''

  const tagSelect = tags && tags.results ? tags.results.map(tag => {
    return currentPost.tags.some(t => t.id === tag.id)
    ? <div key={tag.id}>
      <input type="checkbox" checked={true} name="tags" value={tag.id} id={tag.label} onChange={handleControlledInputChange}/><label className="ml-2" htmlFor={tag.label}>{tag.label}</label>
      </div>
    : <div key={tag.id}>
    <input type="checkbox" name="tags" defaultValue={tag.id} id={tag.label} onChange={handleControlledInputChange}/><label className="ml-2" htmlFor={tag.label}>{tag.label}</label>
    </div>
  }) : ''


  return (
    <div className="text-center">
      {
        ("postId" in props.match.params)
        ? <h1>Edit Post</h1>
        : <h1>New Post</h1>
      }
      <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor ="postTitle">Title</label>
            <input
            type="text"
            className="form-control"
            id="postTitle"
            name="title"
            defaultValue={currentPost.title}
            placeholder="Enter Title"
            onChange={handleControlledInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor ="postContent">Content</label>
            <input
            type="text"
            className="form-control"
            id="postContent"
            name="content"
            defaultValue={currentPost.content}
            placeholder="Enter Content"
            onChange={handleControlledInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor ="category_id">Category</label>
            <select
            className="form-control"
            id="category_id"
            name="category"
            onChange={handleControlledInputChange}
            >
              {
                ("postId" in props.match.params)
                ? <option value={currentPost.category.id} >{currentPost.category.label}</option> 
                : ''
              }
              {categorySelect}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor ="pubData">Date</label>
            <input
            type="date"
            className="form-control"
            id="pubDate"
            name="publication_date"
            defaultValue={currentPost.publication_date}
            placeholder="date"
            onChange={handleControlledInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor ="headerImg">Header Image</label>
            <input
            type="text"
            className="form-control"
            id="headerImg"
            name="header_img_url"
            defaultValue={currentPost.header_img_url}
            placeholder="Select Image"
            onChange={handleControlledInputChange}
            />
          </div>
          <div className="form-group">
              {tagSelect}
          </div>
          {
            ("postId" in props.match.params)
              ? <button
                onClick={evt => {
                  evt.preventDefault()
                  updatePost ({
                    id: props.match.params.postId,
                    user: userId,
                    title: currentPost.title,
                    content: currentPost.content,
                    category: parseInt(currentPost.category),
                    publication_date: currentPost.publication_date,
                    header_img_url: currentPost.header_img_url,
                    tags: currentPost.tags.map(tag => parseInt(tag))
                  })
                    .then(() => props.history.push("/allposts"))
                }}
                className="btn btn-primary">Edit</button>
              : <button className="btn button btn-primary" type="submit" onClick={
                evt => {
                  evt.preventDefault()
                  createPost({
                    user: userId,
                    title: currentPost.title,
                    content: currentPost.content,
                    category: parseInt(currentPost.category),
                    publication_date: currentPost.publication_date,
                    header_img_url: currentPost.header_img_url,
                    tags: currentPost.tags.map(tag => parseInt(tag))
                  })
                }
              }
              >Submit</button>
          }
      </form>
    </div>
  );
};
