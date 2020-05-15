import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../../UI/Input';
import Button from '../../../UI/Button';
import Spinner from '../../../UI/Spinner';
import ErrorHandler from '../../../hoc/ErrorHandler';
import axios from '../../../../axios-orders';
import { purchaseBurger } from '../../../../store/actions';
import classes from './ContactData.module.css';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Name',
        },
        validation: {
          required: true,
        },
        value: '',
        valid: false,
        touched: false,
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street',
        },
        validation: {
          required: true,
        },
        value: '',
        valid: false,
        touched: false,
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zip Code',
        },
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5,
        },
        value: '',
        valid: false,
        touched: false,
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country',
        },
        validation: {
          required: true,
        },
        value: '',
        valid: false,
        touched: false,
      },
      email: {
        elementType: 'email',
        elementConfig: {
          type: 'text',
          placeholder: 'Mail',
        },
        validation: {
          required: true,
        },
        value: '',
        valid: false,
        touched: false,
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options:[
            { value: 'F', displayValue: 'Fastest' },
            { value: 'C', displayValue: 'Cheapest' },
          ]
        },
        validation: {},
        value: 'F',
        valid: true,
      },
    },
    isValidForm: false,
    // loading: false,
  };

  checkValidity (value, rules) {
    const { required, minLength, maxLength } = rules;
    let isValid = true;

    if (!rules) {
      return true;
    }

    if (required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (minLength && maxLength) {
      isValid = (value.length >= minLength && value.length <= maxLength) && isValid;
    }

    return isValid;
  }

  inputChangeHandler = (event, id) => {
    const updatedOrderFrom = { ...this.state.orderForm }; 
    updatedOrderFrom[id].value = event.target.value;
    updatedOrderFrom[id].valid = this.checkValidity(updatedOrderFrom[id].value, updatedOrderFrom[id].validation);
    updatedOrderFrom[id].touched = true;

    let isValidForm = true;

    for (let element in updatedOrderFrom) {
     
        if (!updatedOrderFrom[element].valid) {
          isValidForm = false;
          break;
        }
    }

    this.setState({ orderForm: updatedOrderFrom, isValidForm });
  }

  orderHandler = (event) => {
    const formData = {};
    const { orderForm } = this.state; 
    const { ingredients, onOrderBurger, totalPrice } = this.props;

    event.preventDefault();

    // this.setState({ loading: true });

    for (let element in orderForm) {
      formData[element] = orderForm[element].value;
    }
 
		const order = {
			ingredients,
      totalPrice,
      orderData: formData,
    };
    
    onOrderBurger(order);

		// axios
		// 	.post('/orders.json', order)
		// 	.then((response) => {
    //     this.setState({ loading: false })
    //     this.props.history.push('/');
    //   })
    // 	.catch((error) => this.setState({ loading: false }));
  }

  render () {
    const { isValidForm, orderForm } = this.state;
    const { loading } = this.props;
    const formElements = [];
    const formElementsArray = Object.entries(orderForm);

    formElementsArray.forEach(([key, value]) => formElements.push({ id: key, ...value }));

    let form = (
      <form onSubmit={this.orderHandler}>
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
        <Button btnType='Success' disabled={!isValidForm}>ORDER</Button>
      </form>    
    );

    if (loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        { form }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onOrderBurger: (orderData) => dispatch(purchaseBurger(orderData)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler(ContactData, axios));
