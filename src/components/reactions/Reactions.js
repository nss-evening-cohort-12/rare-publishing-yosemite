import React, { useEffect, useContext } from 'react';
import { ReactionContext } from './ReactionProvider.js'

export const ReactionSelector = props => {
    const {reactions, getReactions} = useContext(ReactionContext)

    useEffect(() => {
        getReactions()
    }, [])

    const reactionSelect = reactions && reactions.results ? reactions.results.map((reaction) => { return <option value={reaction.id} key={reaction.id}>{reaction.emoji}: {reaction.label}</option> }) :''

    return(
       <div className="reactionMenu">
           <select
           id="reaction_id"
           name="reaction"
           className="reaction"
           >
               {reactionSelect}
           </select>
       </div>
    )
}

