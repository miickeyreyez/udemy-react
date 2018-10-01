import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Angel', age:26 },
      { name: 'Lio', age:33 },
      { name: 'Miguel', age:26 },
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newValue) => {
    //DONT this.state.persons[0].name = 'Max'
    this.setState({
      persons: [
        { name: newValue, age:28 },
        { name: 'Leo', age:35 },
        { name: 'Angel', age:36 },
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Angel', age:28 },
        { name: 'Leo', age:35 },
        { name: event.target.value, age:36 },
      ]
    })
  }

  render() {
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'This is a random message'));

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person 
              name = { this.state.persons[0].name }
              age = { this.state.persons[0].age }>
            </Person>
            <Person 
              name = { this.state.persons[1].name }
              age = { this.state.persons[1].age }>
            </Person>
            <Person 
              name = { this.state.persons[2].name }
              age = { this.state.persons[2].age } 
              click = { this.togglePersonsHandler.bind(this, 'Max') }
              changed = {this.nameChangeHandler}>
            </Person>
        </div>
      );
    }

    return(
      <div className="App">
      <h1>I'm a React App</h1>
      <button 
        style= { style }
        onClick= {this.togglePersonsHandler}>Toggle persons
      </button>
      {/* This is a way to render conditional 
      {
        this.state.showPersons === true ? 
        <div>
          <Person 
              name = { this.state.persons[0].name }
              age = { this.state.persons[0].age }>
            </Person>
            <Person 
              name = { this.state.persons[1].name }
              age = { this.state.persons[1].age }>
            </Person>
            <Person 
              name = { this.state.persons[2].name }
              age = { this.state.persons[2].age } 
              click = { this.togglePersonsHandler.bind(this, 'Max') }
              changed = {this.nameChangeHandler}>
            </Person>
        </div>
        : null
      } */
        persons
      }
      </div>
    );
  }
}

export default App;
