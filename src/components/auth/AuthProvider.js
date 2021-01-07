import React, { useState } from "react"

export const ProfileContext = React.createContext()

export const ProfileProvider = (props) => {
    const [profile, setProfile] = useState({events:[]})

    const getProfile = () => {
        return fetch("http://localhost:8000/profile", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("user_id")}`
            }
        })
            .then(response => response.json())
            .then(setProfile)
    }

    const createImage = (review) => {
        return fetch("http://localhost:8000/image", {
          method: "POST",
          headers: {
            "Authorization": `Token ${localStorage.getItem("r_token")}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(review)
        })
        .then(res => res.json())
      .then(setProfile)
    }

    return (
        <ProfileContext.Provider value={{
            profile, getProfile, createImage
        }}>
            {props.children}
        </ProfileContext.Provider>
    )
}
