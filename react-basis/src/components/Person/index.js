import React from 'react';
import Radium from 'radium';
import styled from 'styled-components';

import './Person.css';

const StyledDiv = styled.div`
  color: red;
  font-size: 18px;
  padding: 20px;
  width: 50%;
  border: 2px solid red;
`;

const person = (props) => {
  const { name, age, id, click, change } = props;
  
  const style = {
    '@media (min-width: 500px)': {
      width: '450px',
    },
  };

  return (
  // To use radium
  // <div className="Person" style={style}>
  <div className="Person">
    <p onClick={click}>ID: {id} - I'm {name} - {age} years old!</p>
    <p>{props.children}</p>
    <input type="text" onChange={change} value={name} />
    <StyledDiv>I'm a div created with styled components</StyledDiv>
  </div>
  )
}

// To use radium
// export default Radium(person);
export default person;
