import React, { useState } from 'react'

export const TagContext = React.createContext()

export const TagProvider = props => {
  const [ tags, setTags ] = useState([])

  const getTags = () => {
    return fetch("http://localhost:8000/tags", {
      headers: {
        "Authorization": `Token ${localStorage.getItem("r_token")}`
      }
    })
      .then(res => res.json())
      .then(setTags)
  }

  const getTag = (id) => {
    return fetch(`http://localhost:8000/tags/${id}`, {
      headers: {
        "Authorization": `Token ${localStorage.getItem("r_token")}`
      }
    })
      .then(res => res.json())
  }

  const deleteTag = id => {
    return fetch(`http://localhost:8000/tags/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Token ${localStorage.getItem("r_token")}`
      }
    })
      .then(getTags)
  }

  const editTag = tag => {
    return fetch(`http://localhost:8000/tags/${tag.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem('r_token')}`
      },
      body: JSON.stringify(tag)
    })
      .then(getTags)
  }

  const createTag = newTag => {
    return fetch('http://localhost:8000/tags', {
      method: "POST",
      headers: {
        "Authorization": `Token ${localStorage.getItem("r_token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTag)
    })
    .then(res => res.json())
    .then(getTags)
  }

  return (
    <TagContext.Provider value={{
      tags,
      getTags,
      getTag,
      createTag,
      editTag,
      deleteTag
    }}>
      {props.children}
    </TagContext.Provider>
  )

}
