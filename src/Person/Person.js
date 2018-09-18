import React from 'react';

const person = (props) => {
    return <div>
        <p>I'm a Person Component!</p>
        <p>{props.name} - {props.age}</p>
        <p>{props.children}</p>
    </div>
}
export default person;
