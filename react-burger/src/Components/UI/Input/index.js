import React from 'react';
import { Input, InputElement, Invalid, Label, ValidationError } from './Input.module.css';

const input = ({
    change,
    invalid,
    elementConfig,
    elementType,
    shouldValidate,
    touched,
    value,
  }) => {
  let inputElement = null;
  let validationError = null;
  const inputClasses = [InputElement];

  if (invalid && shouldValidate && touched) {
    inputClasses.push(Invalid);
    validationError = <p className={ValidationError}>Please, add a valid value!</p>;
  }

  const classes = inputClasses.join(' ');

  switch(elementType) {
    case 'input':
      inputElement = <input className={classes} {...elementConfig} value={value} onChange={change} />
      break;
    case 'textarea':
      inputElement = <textarea className={classes} {...elementConfig} value={value} onChange={change} />
      break;
    case 'select':
      inputElement = (
        <select className={classes} value={value} onChange={change}>
          { elementConfig.options.map((option) => (
              <option key={option.value} value={option.value}>
                { option.displayValue }
              </option>
            ))
          }
        </select>
      )
      break;
    default:
      inputElement = <input className={classes} {...elementConfig} value={value} onChange={change} />
      break;
  }
  
  return (
    <div className={Input}>
    <label className={Label}></label>
    { inputElement }
    { validationError }
  </div>
  );
}

export default input;
