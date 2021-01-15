import React, { useContext, useState } from 'react';
import { ReactionContext } from './ReactionProvider'
import { useHistory } from 'react-router-dom'


export const NewReactions = props => {
    const { createReaction } = useContext(ReactionContext)
    const [emoji, setEmoji] = useState('')
    const [label, setLabel] = useState('')

    const setEmojiEvent = (e) =>{
        e.preventDefault();
        setEmoji(e.target.value)
      }

    const setLabelEvent = (e) => {
        e.preventDefault()
        setLabel(e.target.value)
    };

    const submitNewReaction = (e) => {
        e.preventDefault()
        const newReaction = {
            emoji,
            label
        }
        createReaction(newReaction)
        .then(() => props.history.push({pathname: "/allposts"}))
    }

    return (
        <div className="text-center">
          <h1 className="text-center">Add a Reaction</h1>
            <form className="col-6 offset-3">
                <div className="form-group">
                    <label htmlFor ="emoji">Emoji</label>
                    <input
                    type="text"
                    className="form-control"
                    id="emoji"
                    value={emoji}
                    placeholder="Enter Subject"
                    onChange={setEmojiEvent}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor ="label">Label</label>
                    <input
                    type="text"
                    className="form-control"
                    id="label"
                    value={label}
                    placeholder="Enter Content"
                    onChange={setLabelEvent}
                    />
                </div>
                <button className="btn button btn-danger" type="submit" onClick={submitNewReaction}>Submit</button>
            </form>
        </div>
    )
};