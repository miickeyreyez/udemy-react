import React from 'react';
import Person from './Person';

const persons = (props) => props.persons.map((person, index) => {
        return <Person
          click = { () => props.clicked(index) }
          name = { person.name }
          age = { person.age }
          key = { index }
          changed = { (event) => props.changed(event, index) } />
    });

export default persons;
