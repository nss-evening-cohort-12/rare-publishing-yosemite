import React, { useState } from 'react'

export const ReactionContext = React.createContext()

export const ReactionProvider = props => {
    const [ reactions, setReactions ] = useState([])

    const getReactions = () => {
        return fetch('http://localhost:8000/reactions',{
            headers:{
            "Authorization": `Token ${localStorage.getItem("r_token")}`,
            'Content-Type': 'application/json'
            },
            // body: JSON.stringify(reactions)
        })
            .then(response => response.json())
            .then(setReactions)
    }

    const createReaction = reaction => {
        return fetch('http://localhost:8000/reactions',{
            method: 'POST',
            headers: {
            "Authorization": `Token ${localStorage.getItem("r_token")}`,
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(reaction)
        })
            .then(response => response.json())
            .then(getReactions)
    }

    return (
        <ReactionContext.Provider value={{
            reactions,
            getReactions,
            createReaction
        }}>
            {props.children}
        </ReactionContext.Provider>
    )
}