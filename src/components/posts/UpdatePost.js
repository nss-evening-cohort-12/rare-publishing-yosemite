import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import postsData from '../utils/postsData'
import categoryData from '../utils/categoryData'

export const UpdatePost = props => {
  // const [title, setTitle] = useState('')
  // const [content, setContent] = useState('')
  // const [category_id, setCategory_id] = useState(0)
  // const [header_img, setHeader_img] = useState('')
  // const [tags, setTags] = useState([])
  const [post, setPost] = useState ({});
  const [categories, setCategories] = useState([])
  const history = useHistory()

  useEffect(() => {
    const { postId } = props.match.params;
    postsData.getSinglePost(postId)
      .then((res) => setPost(res.data))
      .catch((err) => console.error(err))
  }, []);

  useEffect(() => {
    categoryData.getAllCats()
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  })

  const editTitleEvent = (e) => {
    e.preventDefault();
    const title = e.target.value;
    setPost({ ...post, title })
  };

  const editContentEvent = (e) => {
    e.preventDefault();
    const content = e.target.value;
    setPost({ ...post, content })
  };

  const editCategoryEvent = (e) => {
    e.preventDefault();
    const category_id = e.target.value;
    setPost({ ...post, category_id })
  };

  const editHeaderImgEvent = (e) => {
    e.preventDefault();
    const header_img = e.target.value;
    setPost({ ...post, header_img })
  };

  // const editTagEvent = (e) => {
  //   e.preventDefault();
  //   const tags = e.target.value
  //   setPost({ ...post, tags })
  // };

  const updatePost = (e) => {
    e.preventDefault()

    const editedPost = post
    const { postId } = props.match.params;

    postsData.updatePost(postId, editedPost)
      .then((res) => history.push('/posts'))
      .catch((err) => console.error(err));
  };

  const categorySelect = categories.map((category) => { return <option value={category.id} key={category.id}>{category.name}</option> })

  return (
    <div className="text-center">
      <h1>Edit Post</h1>
      <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor ="postTitle">Title</label>
            <input
            type="text"
            className="form-control"
            id="postTitle"
            defaultValue={post.title}
            placeholder="Enter Title"
            onChange={editTitleEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor ="postContent">Content</label>
            <input
            type="text"
            className="form-control"
            id="postContent"
            defaultValue={post.content}
            placeholder="Enter Content"
            onChange={editContentEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor ="category_id">Category</label>
            <select
            className="form-control"
            id="category_id"
            onChange={editCategoryEvent}
            >
              {categorySelect}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor ="headerImg">Header Image</label>
            <input
            type="text"
            className="form-control"
            id="headerImg"
            defaultValue={post.header_img}
            placeholder="Select Image"
            onChange={editHeaderImgEvent}
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor ="postTag">Tag</label>
            <input
            type="text"
            className="form-control"
            id="postTag"
            defaultValue={post.tags}
            placeholder="Select Tag"
            onChange={editTagEvent}
            />
          </div> */}
          <button className="btn button btn-danger" type="submit" onClick={updatePost}>Submit</button>
      </form>
    </div>
  );
};
