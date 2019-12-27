import React from 'react';
import './Person.css';

const person = (props) => {
  const { name, age, id, click, change } = props;

  return (
  <div className="Person">
    <p onClick={click}>ID: {id} - I'm {name} - {age} years old!</p>
    <p>{props.children}</p>
    <input type="text" onChange={change} value={name} />
  </div>
  )
}

export default person;
