import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import postsData from '../utils/postsData'

export const NewPost = props => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category_id, setCategory_id] = useState(0)
  const [header_img, setHeader_img] = useState('')
  const [tags, setTags] = useState([])
  const history = useHistory()

  const setTitleEvent = (e) => {
    e.preventDefault();
    setTitle(e.target.value)
  };

  const setContentEvent = (e) => {
    e.preventDefault();
    setContent(e.target.value)
  };

  const setCategoryEvent = (e) => {
    e.preventDefault();
    setCategory_id(e.target.value)
  };

  const setHeaderImgEvent = (e) => {
    e.preventDefault();
    setHeader_img(e.target.value)
  };

  const setTagEvent = (e) => {
    e.preventDefault();
    setTags(e.target.value)
  };

  const submitNewPost = (e) => {
    e.preventDefault()

    const newPost = {
      title,
      content,
      category_id,
      header_img,
      "user_id": localStorage.getItem("user_id"),
      tags
    }

    postsData.createPost(newPost)
      .then((res) => history.push('/posts'))
      .catch((err) => console.error(err));
  };

  return (
    <div className="text-center">
      <h1>New Post</h1>
      <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor ="postTitle">Title</label>
            <input
            type="text"
            className="form-control"
            id="postTitle"
            value={title}
            placeholder="Enter Title"
            onChange={setTitleEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor ="postContent">Content</label>
            <input
            type="text"
            className="form-control"
            id="postContent"
            value={content}
            placeholder="Enter Content"
            onChange={setContentEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor ="postCategory">Category</label>
            <input
            type="text"
            className="form-control"
            id="postCategory"
            value={category_id}
            placeholder="Select Category"
            onChange={setCategoryEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor ="headerImg">Header Image</label>
            <input
            type="text"
            className="form-control"
            id="headerImg"
            value={header_img}
            placeholder="Select Image"
            onChange={setHeaderImgEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor ="postTag">Tag</label>
            <input
            type="text"
            className="form-control"
            id="postTag"
            value={tags}
            placeholder="Select Tag"
            onChange={setTagEvent}
            />
          </div>
          <button className="btn button btn-danger" type="submit" onClick={submitNewPost}>Submit</button>
      </form>
    </div>
  );
};
