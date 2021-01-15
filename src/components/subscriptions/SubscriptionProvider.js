import React, {useState} from 'react'

export const SubscriptionContext = React.createContext()

export const SubscriptionProvider = (props) => {
  const [subs, setSubs] = useState([])

  const getSubs = (author_id, follower_id) => {
    // const author_id = this.props.match.params.userId;
    // const follower_id = localStorage.getItem('user_id')
    console.log(author_id)
    console.log(follower_id)
    return   fetch(`http://localhost:8000/subscriptions?follower_id=${follower_id}&author_id=${author_id}`, {   
      headers: {
        "Authorization": `Token ${localStorage.getItem("r_token")}`}
      })
      .then(res => res.json())
      .then(setSubs)
  }  
  const subscribe = (new_sub) => {
    return fetch("http://localhost:8000/subscriptions", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("r_token")}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(
          new_sub
        )
      })
        .then(res => res.json())
        .then(getSubs)
  }

  const unsubscribe = (id) =>{
    return fetch(`http://localhost:8000/subscriptions/${subs.id}`, {
      method: "DELETE",
        headers: {
          "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
        }
    })
    .then(getSubs)
  }
  return (
    <SubscriptionContext.Provider value={
      {
        subs, 
        getSubs,
        subscribe,
        unsubscribe 
      }
    }>
      {props.children}
    </SubscriptionContext.Provider>
  )
}
