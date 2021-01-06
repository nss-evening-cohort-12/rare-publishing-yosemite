import React from 'react';

const Reactions = props => (
    <span
        className="reactions"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
);
export default Reactions;