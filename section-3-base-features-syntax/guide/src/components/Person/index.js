import React from 'react';
import './Person.css';

const person = (props) => {
  const { name, age, click, change } = props;

  return (
  <div className="Person">
    <p onClick={click}>I'm {name} - {age} years old!</p>
    <p>{props.children}</p>
    <input type="text" onChange={change} value={name} />
  </div>
  )
}

export default person;
