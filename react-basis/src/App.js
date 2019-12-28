import React, { Component, useState } from 'react';
import Radium, { StyleRoot } from 'radium';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';
import Validation from './components/Validation';
import Char from './components/Char';
import ErrorBoundary from './components/ErrorBoundary';

// Example with hooks to manipulate state
// const app = props => {
//   const [ personsState, setPersonsState ] =  useState({
//     persons: [
//       { name: 'Lio', age: 28 },
//       { name: 'Angel', age: 27 },
//       { name: 'Karla', age: 23 },
//     ],
//   });

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: 'Andres', age: 28 },
//         { name: 'Miguel', age: 27 },
//         { name: 'Lucero', age: 23 },
//       ],
//     });
//   }

//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <img src={logo} className='App-logo' alt='logo' />
//           <h1 className='App-title'>Welcome to React</h1>
//       </header>

//       <p className='App-intro'>
//         To get started, edit <code>src/App.js</code> and save to reload.
//       </p>

//       <h1> This is a really cool React App</h1>

//       <hr/>

//       <button onClick={switchNameHandler}>Switch name</button>

//       < Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//     </div>
//   );
// }

// export default app;

// Example with state to manipulate state
const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'salmon' : 'purple'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: lightgreen;
    color: black;
  },
`;
class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Lio', age: 28 },
      { id: 2, name: 'Angel', age: 27 },
      { id: 3, name: 'Karla', age: 23 }
    ],
    droids: [{ name: 'R2D2' }, { name: 'BB8' }, { name: 'D0' }],
    toggle: true,
    userInput: ''
  };

  droidsNameHandler = event => {
    const { value } = event.target;
    this.setState({
      droids: [
        { name: value || 'DNLD' },
        { name: value || 'U9C4' },
        { name: value || 'BC44' }
      ]
    });
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { id: 1, name: newName, age: 28 },
        { id: 2, name: 'Miguel', age: 27 },
        { id: 3, name: 'Lucero', age: 23 }
      ]
    });
  };

  nameChangeHandler = (event, index) => {
    const personsInState = this.state.persons;

    const personIndex = personsInState.findIndex(p => p.id === index);

    const person = { ...personsInState[personIndex] };

    person.name = event.target.value;

    const persons = [...personsInState];

    persons[personIndex] = person;

    this.setState({ persons });
  };

  inputChangeHandler = event => {
    const userInput = event.target.value;

    this.setState({ userInput });
  };

  togglePersonsHandler = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  deletePersonsHandler = index => {
    const { persons } = this.state;

    persons.splice(index, 1);

    this.setState({ persons });
  };

  deleteCharHandler = index => {
    const chars = this.state.userInput.split('');

    chars.splice(index, 1);

    const updatedText = chars.join('');

    this.setState({ userInput: updatedText });
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      },
    };

    let persons = null;

    const charList = this.state.userInput
      .split('')
      .map((ch, index) => (
        <Char
          character={ch}
          index={index}
          key={index}
          click={() => this.deleteCharHandler(index)}
        />
      ));

    if (this.state.toggle) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <ErrorBoundary key={person.id}>
              <Person
                id={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonsHandler(index)}
                // Binding with anonymous function
                // click={() => this.switchNameHandler('Leo')}
                change={event => this.nameChangeHandler(event, person.id)}
              />
            </ErrorBoundary>
          ))}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'cyan',
        color: 'black',
      };
    }
    
    // let classes = ['red', 'bold'].join(' ');
    let classes = [];
    
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      // To use radium
      // <StyleRoot>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
          <p className={classes.join(' ')}>This is really working!</p>
        </header>
        
        <StyledButton
          alt={this.state.toggle}
          onClick={this.togglePersonsHandler}
        >
          Styled button
        </StyledButton>

        <button
          key='button1'
          style={style}
          // Binding with this
          onClick={this.switchNameHandler.bind(this, 'Lionel')}
        >
          Switch name
        </button>

        <button
          key='button2'
          style={style}
          onClick={this.togglePersonsHandler}
        >
          Show persons
        </button>

        {persons}

        <UserInput
          change={this.droidsNameHandler}
          currentName={this.state.droids[0].name}
        />

        <UserOutput name={this.state.droids[0].name} />

        <UserOutput name={this.state.droids[1].name} />

        <UserOutput name={this.state.droids[2].name} />

        <input
          type='text'
          onChange={this.inputChangeHandler}
          value={this.state.userInput}
        />

        <p>~{this.state.userInput}~</p>

        <Validation inputLength={this.state.userInput.length} />

        {charList}
      </div>
      // </StyleRoot>
    );
    // Creating a rect element
    // return React.createElement('div', { className: 'App' }, 'This is my text');
  }
}

// To use radium
// export default Radium(App);
export default App;
