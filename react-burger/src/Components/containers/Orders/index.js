import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from '../../Order';
import Spinner from '../../UI/Spinner';
import ErrorHandler from '../../hoc/ErrorHandler';
import axios from '../../../axios-orders';
import { fetchOrders } from '../../../store/actions';

class Orders extends Component {
  // state = {
  //   // orders: [],
  //   loading: true,
  // }

  componentDidMount () {
    const { idToken, userId } = this.props;
    this.props.onFetchOrders(idToken, userId);
    // axios.get(process.env.REACT_APP_ORDERS_URL)
    //   .then(({ data }) => {
    //     const fetchedOrders = [];
    //     const objectArray = Object.entries(data);

    //     objectArray.forEach(([key, value]) => fetchedOrders.push({ ...value, id: key }));

    //     this.setState({ loading: false, orders: fetchedOrders })
    //   })
    //   .catch((error) => this.setState({ loading: false }));
  }
  render() {
    const { loading, orders } = this.props;
    let ordersToShow = <Spinner />;

    if (!loading) {
      ordersToShow = (
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

    return ordersToShow;
  }
}

const mapStateToProps = state => ({
  idToken: state.auth.idToken,
  userId: state.auth.userId,
  orders: state.order.orders,
  loading: state.order.loading,
});

const mapDispatchToProps = dispatch => ({
  onFetchOrders: (idToken, userId) => dispatch(fetchOrders(idToken, userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler(Orders, axios));
