import React from 'react';

function Cat(props) {
    return (
        <div>Hello, {props.match.params.cat}</div>
    )
}

export default Cat;