import React, { Component } from 'react';
import Button from '../../../UI/Button';
import Spinner from '../../../UI/Spinner';
import axios from '../../../axios-orders';
import classes from './ContactData.module.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
		const { ingredients, totalPrice } = this.props;
		const order = {
			ingredients,
			totalPrice,
			customer: {
				name: 'Angel Reyes',
				address: {
					street: 'Elm street',
					zipCode: '123',
					country: 'USA',
				},
				email: 'angel@firebase.com',
				deliveryMethod: 'fastest',
			},
		};

		axios
			.post('/orders.json', order)
			.then((response) => {
        this.setState({ loading: false })
        this.props.history.push('/');
      })
    	.catch((error) => this.setState({ loading: false }));
  }

  render () {
    const { loading } = this.state;

    let form = (
      <form>
        <input type='text' className={classes.Input} name='name' placeholder='Name' />
        <input type='email' className={classes.Input} name='email' placeholder='Mail' />
        <input type='text' className={classes.Input} name='street' placeholder='Street' />
        <input type='text' className={classes.Input} name='zipCode' placeholder='ZIP Code' />
        <Button btnType='Success' click={this.orderHandler}>ORDER</Button>
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

export default ContactData;
