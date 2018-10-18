import React, { Component } from 'react';
import classes from './Person.css';

// const person = (props) => {
//     // const rnd = Math.random();
//     // if (rnd > 0.7) {
//     //     throw new Error('Something went wrong');
//     // }
//     return (
//     <div className = { classes.Person }>
//         <p onClick = { props.click }>
//             { props.name } - { props.age }
//         </p>
//         <p>
//             { props.children }
//         </p>
//         <input type = "text"
//             onChange = { props.changed }
//             value = { props.name }/>
//     </div>)
// }
// export default person;

class Person extends Component {
    render () {
        return  (
            <div className = { classes.Person }>
                <p onClick = { this.props.click }>
                    { this.props.name } - { this.props.age }
                </p>
                <p>
                    { this.props.children }
                </p>
                <input type = "text"
                    onChange = { this.props.changed }
                    value = { this.props.name }/>
            </div>
        );
    }
}

export default Person;
