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
  }

  switchNameHandler = () => {
    //DONT this.state.persons[0].name = 'Max'
    this.setState({
      persons: [
        { name: 'Mickey', age:28 },
        { name: 'Leo', age:35 },
        { name: 'Angel', age:36 },
      ]
    })
  }

  render() {
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'This is a random message'));

    return(
      <div className="App">
      <h1>I'm a React App</h1>
      <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;
