import React from 'react';
import './UserOutput.css';

const userOutput = (props) => (
  <div className='UserOutput'>
    <p>Droid name:</p>
    <p>{props.name}</p>
  </div>
);

export default userOutput;
