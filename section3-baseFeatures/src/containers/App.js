import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons';
import Cockpit from '../components/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App constructor', JSON.stringify(props));
    this.state = {
      persons: [
        { name: 'Angel', age:26, index: 0 },
        { name: 'Lio', age:33, index: 1 },
        { name: 'Miguel', age:26, index: 2 },
      ],
      otherState: 'some other value',
      showPersons: false
    }
  }

  componentWillMount() {
    console.log('App - Will mount');
  }

  // state = {
  //   persons: [
  //     { name: 'Angel', age:26, index: 0 },
  //     { name: 'Lio', age:33, index: 1 },
  //     { name: 'Miguel', age:26, index: 2 },
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

  componentDidMount() {
    console.log('App - Did mount');
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  nameChangeHandler = (event, index) => {
    const personIndex = this.state.persons.findIndex(p => p.index === index);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons });
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  }

  render() {
    console.log('App - Render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
          persons = { this.state.persons }
          clicked = { this.deletePersonHandler }
          changed = { this.nameChangeHandler }
          />;
    }

    return(
      <div className = { classes.App }>
      <Cockpit 
        showPersons = { this.state.showPersons }
        persons = { this.state.persons }
        clicked = { this.togglePersonsHandler }
      />
        {
          persons
        }
      </div>
    );
  }
}

export default App;
