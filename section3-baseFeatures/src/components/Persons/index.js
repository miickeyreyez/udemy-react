import React, { Component } from 'react';
import Person from './Person';

//Stateless component
// const persons = (props) => props.persons.map((person, index) => {
//         return <Person
//           click = { () => props.clicked(index) }
//           name = { person.name }
//           age = { person.age }
//           key = { index }
//           changed = { (event) => props.changed(event, index) } />
//     });

// export default persons;

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('Persons constructor')
  }

  componentWillMount() {
    console.log('Persons - Will mount');
  }
  
  componentDidMount() {
    console.log('Persons - Did mount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('Persons - willReceiveProps', JSON.stringify(nextProps));
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Persons - shouldComponentUpdate', JSON.stringify(nextProps), JSON.stringify(nextState));
    // return false;
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Persons - componentWillUpdate', JSON.stringify(nextProps), JSON.stringify(nextState));
  }

  componentDidUpdate() {
    console.log('Persons - componentDidUpdate');
  }

  component

  render () {
    console.log('Persons - Render');
    return this.props.persons.map((person, index) => {
      return <Person
        click = { () => this.props.clicked(index) }
        name = { person.name }
        age = { person.age }
        key = { index }
        changed = { (event) => this.props.changed(event, index) } />
    });
  }
}

export default Persons;