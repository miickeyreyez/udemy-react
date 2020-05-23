import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import Spinner from '../../UI/Spinner';
import { auth, setAuthRedirectPath } from '../../../store/actions';
import classes from './Auth.module.css';

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Mail',
        },
        validation: {
          required: true,
          isEmail: true,
        },
        value: '',
        valid: false,
        touched: false,
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password',
        },
        validation: {
          required: true,
          minLength: 6,
        },
        value: '',
        valid: false,
        touched: false,
      },
    },
    isValidForm: false,
    isSignUp: true,
  };

  componentDidMount() {
    const { authRedirectPath, buildingBurger, onSetAuthRedirectPath } = this.props;
    if (!buildingBurger && authRedirectPath !== '/') {
      onSetAuthRedirectPath();
    }
  }

  checkValidity (value, rules) {
    const { email, minLength, maxLength, numeric, required } = rules;
    let isValid = true;

    if (!rules) {
      return true;
    }

    if (email) {
      const pattern = '/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/';
      isValid = pattern.test(value) && isValid;
    }

    if (numeric) {
      const pattern = '^[0-9]+$';
      isValid = pattern.test(value) && isValid;
    }

    if (required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (minLength && maxLength) {
      isValid = (value.length >= minLength && value.length <= maxLength) && isValid;
    }

    if (minLength) {
      isValid = (value.length >= minLength) && isValid;
    }

    return isValid;
  }

  inputChangeHandler = (event, id) => {
    const updatedControls = {
      ...this.state.controls,
      [id]: {
        ...this.state.controls[id],
        value: event.target.value,
        valid: this.checkValidity(event.target.value, this.state.controls[id].validation),
        touched: true,
      },
    };

    let isValidForm = true;

    for (let element in updatedControls) {
     
        if (!updatedControls[element].valid) {
          isValidForm = false;
          break;
        }
    }

    this.setState({ controls: updatedControls, isValidForm });
  }

  switchAuthHandler = () => {
    this.setState(prevState => ({
      isSignUp: !prevState.isSignUp,
    }));
  }

  submitHandler = (event) => {
    event.preventDefault();

    const {
      email: { value: emailValue },
      password: { value: passwordValue },
    } = this.state.controls;
    const { isSignUp } = this.state;
    const { onAuth } = this.props;

    onAuth(emailValue, passwordValue, isSignUp);
  }
 
  render () {
    const { controls, isValidForm } = this.state;
    const { authRedirectPath, error, isAuthenticated, loading } = this.props;
    const formElements = [];
    const formElementsArray = Object.entries(controls);

    formElementsArray.forEach(([key, value]) => formElements.push({ id: key, ...value }));

    let errorMessage;

    let form = (
      <div>
        <form onSubmit={this.submitHandler}>
          { formElements.map(
              ({ elementConfig, elementType, id, touched, valid, validation, value }, index) => (
                <Input
                  key={index}
                  change={(event) => this.inputChangeHandler(event, id)}
                  elementType={elementType}
                  elementConfig={elementConfig}
                  invalid={!valid}
                  shouldValidate={validation}
                  touched={touched}
                  value={value}
                />
              )
            )
          }
          <Button btnType='Success' disabled={!isValidForm}>SUBMIT</Button>
        </form>
        <Button btnType='Danger' click={this.switchAuthHandler}>
          { this.state.isSignUp ? 'SIGN IN' : 'SIGN UP' }
        </Button>
      </div>
    );

    if (loading) {
     form = <Spinner/>; 
    }

    if (error) {
      errorMessage = (
        <div>
          {error}
        </div>
      )
    }

    if (isAuthenticated) {
      return <Redirect to={authRedirectPath} />;
    }

    return (
      <div className={classes.Auth}>
        { form }
        { errorMessage }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authRedirectPath: state.auth.authRedirectPath,
  loading: state.auth.loading,
  error: state.auth.error,
  isAuthenticated: !!state.auth.idToken,
  buildingBurger: state.burgerBuilder.building,
});

const mapDispatchToProps = dispatch => ({
  onAuth: (email, password, method) => dispatch(auth(email, password, method)),
  onSetAuthRedirectPath: (path) => dispatch(setAuthRedirectPath('/')),
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
