import React, {useState} from 'react'

export  const SubscriptionContext = React.createContext()

export const SubscriptionProvider = props => {
  const [ subscriptions, setSubscriptions ] = useState([])

  const getSubscriptions = () => {
    return fetch('http://localhost:8000/subscriptions',{
      headers:{
        "Authorization": `Token ${localStorage.getItem("r_token")}`
      }
    })
      .then(response => response.json())
      .then(setSubscriptions)
  }

  const getSub = () => {
    const author_id = this.props.match.params.userId;
    const follower_id = localStorage.getItem('user_id')

    return   fetch(`http://localhost:8000/subscriptions?follower_id=${Number(follower_id)}&author_id=${author_id}`, {   
      headers: {
        "Authorization": `Token ${localStorage.getItem("token")}`}
      })
      .then(res => res.json())
      .then(res => this.setState({sub: res.results[0]}))

  }  

  return (
      <SubscriptionContext.Provider value={{
        subscriptions, getSubscriptions,getSub }}>
          {props.children}
        </SubscriptionContext.Provider>
    )
}
