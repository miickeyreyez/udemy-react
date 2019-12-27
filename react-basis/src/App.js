import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

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
     { name: 'Lio', age: 28 },
     { name: 'Angel', age: 27 },
     { name: 'Karla', age: 23 },
   ],
   droids:[
     { name: 'R2D2' },
     { name: 'BB8' },
     { name: 'D0' },
   ],
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
      { name: newName, age: 28 },
      { name: 'Miguel', age: 27 },
      { name: 'Lucero', age: 23 },
    ],
  });
}

nameChangeHandler = (event) => {
  this.setState({
    persons: [
      { name: event.target.value, age: 28 },
    ],
  })
}
  
  render() {
    const style = {
      backgroundColor: 'red',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',     
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Lionel')}>
          Switch name
        </button>
        
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={() => this.switchNameHandler('Leo')}
          change={this.nameChangeHandler}
        />
        
        <UserInput change={this.droidsNameHandler} currentName={this.state.droids[0].name} />

        <UserOutput
          name={this.state.droids[0].name}
        />
        <UserOutput
          name={this.state.droids[1].name}
        />
        <UserOutput
          name={this.state.droids[2].name}
        />
      </div>
    );
    // Creating a rect element
    // return React.createElement('div', { className: 'App' }, 'This is my text');
  }
}

export default App;
