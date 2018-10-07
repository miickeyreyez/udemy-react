import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Angel', age:26, index: 1 },
      { name: 'Lio', age:33, index: 2 },
      { name: 'Miguel', age:26, index: 3 },
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

  nameChangeHandler = (event, index) => {
    const personIndex = this.state.persons.findIndex(p => p.id === index);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons});
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons});
  }

  render() {
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'This is a random message'));

    // This is an inline style
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
            return <Person
              click = { () => this.deletePersonHandler(index) }
              name = { person.name }
              age = { person.age }
              key = { person.id }
              changed = { (event) => this.nameChangeHandler(event, person.id) }>
            </Person>
          })
          }
          {
            /* <Person 
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
            </Person> */
          }
        </div>
      );
      style.backgroundColor = 'red';
    }

    // let classes = ['red', 'bold'].join(' ');
    const classes = [];
    
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return(
      <div className = "App">
        <h1>I'm a React App</h1>
        <p className = { classes.join(' ') }>
          This is really working!
        </p>
        <button 
          style = { style }
          className = 'button'
          onClick = { this.togglePersonsHandler }>
          Toggle persons
        </button>
        {
          /* This is a way to render conditional 
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
