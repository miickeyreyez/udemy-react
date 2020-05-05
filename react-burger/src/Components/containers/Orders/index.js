import React, { Component } from 'react';
import Order from '../../Order';
import ErrorHandler from '../../hoc/ErrorHandler';
import axios from '../../axios-orders';

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  }
  componentDidMount () {
    axios.get(process.env.REACT_APP_ORDERS_URL)
      .then(({ data }) => {
        const fetchedOrders = [];
        const objectArray = Object.entries(data);

        objectArray.forEach(([key, value]) => fetchedOrders.push({ ...value, id: key }));

        this.setState({ loading: false, orders: fetchedOrders })
      })
      .catch((error) => this.setState({ loading: false }));
  }
  render() {
    const { orders } = this.state;
    return (
      <div>
        { orders.map(({
            id, ingredients, totalPrice,
          }) => (
            <Order
              key={id}
              ingredients={ingredients}
              totalPrice={totalPrice}
            />
          ))
        }
    </div>
    );
  }
}

export default ErrorHandler(Orders, axios);
