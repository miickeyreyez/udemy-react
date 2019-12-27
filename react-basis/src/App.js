import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';
import Validation from './components/Validation';
import Char from './components/Char';

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
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//       </header>

//       <p className="App-intro">
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
class App extends Component {
 state = {
   persons: [
     { id: 1, name: 'Lio', age: 28 },
     { id: 2, name: 'Angel', age: 27 },
     { id: 3, name: 'Karla', age: 23 },
   ],
   droids:[
     { name: 'R2D2' },
     { name: 'BB8' },
     { name: 'D0' },
   ],
   toggle: true,
   userInput: '',
 }
 
  droidsNameHandler = (event) => {
    const { value } = event.target;
    this.setState({
      droids:[
        { name: value || 'DNLD' },
        { name: value || 'U9C4' },
        { name: value || 'BC44' },
      ],
    })
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { id: 1, name: newName, age: 28 },
        { id: 2, name: 'Miguel', age: 27 },
        { id: 3, name: 'Lucero', age: 23 },
      ],
    });
  }

  nameChangeHandler = (event, index) => {
    const personsInState = this.state.persons;

    const personIndex = personsInState.findIndex(p => p.id  === index);
    
    const person = { ...personsInState[personIndex] };

    person.name = event.target.value;
    
    const persons = [ ...personsInState];
    
    persons[personIndex] = person;

    this.setState({ persons });
  }

  inputChangeHandler = (event) => {
    const userInput = event.target.value;

    this.setState({ userInput });
  }

  togglePersonsHandler = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  }
  
  deletePersonsHandler = (index) => {
    const { persons } = this.state;
    
    persons.splice(index, 1);
    
    this.setState({ persons });
  }

  deleteCharHandler = (index) => {
    const chars = this.state.userInput.split('');
    
    chars.splice(index, 1);
    
    const updatedText = chars.join('');
    
    this.setState({ userInput: updatedText });
  }
  
  render() {
    const style = {
      backgroundColor: 'red',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',     
    };

    let persons = null;
    
    const charList = this.state.userInput.split('').map((ch, index) =>
      <Char
        character={ch}
        index={index}
        key={index}
        click={() => this.deleteCharHandler(index)}
      />);
    
    if (this.state.toggle) {
      persons = 
      <div>
        {
          this.state.persons.map((person, index) => <Person
              key={person.id}
              id={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonsHandler(index)}
              // Binding with anonymous function
              // click={() => this.switchNameHandler('Leo')}
              change={(event) => this.nameChangeHandler(event, person.id)}
            />
          )
        }
      </div>
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <button
          style={style}
          // Binding with this
          onClick={this.switchNameHandler.bind(this, 'Lionel')}>
          Switch name
        </button>

        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Show persons
        </button>
        
        {persons}
        
        <UserInput
          change={this.droidsNameHandler}
          currentName={this.state.droids[0].name}
        />

        <UserOutput
          name={this.state.droids[0].name}
        />

        <UserOutput
          name={this.state.droids[1].name}
        />

        <UserOutput
          name={this.state.droids[2].name}
        />
        
        <input type='text' onChange={this.inputChangeHandler} value={this.state.userInput} />

        <p>~{this.state.userInput}~</p>

        <Validation inputLength={this.state.userInput.length}/>
        
        {charList}
      </div>
    );
    // Creating a rect element
    // return React.createElement('div', { className: 'App' }, 'This is my text');
  }
}

export default App;
