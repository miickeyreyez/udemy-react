import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import ContactData from './ContactData';
import CheckoutSummary from '../../Order/CheckoutSummary';

class Checkout extends Component {
  // state = {
  //   ingredients: null,
  //   totalPrice: 0,
  // }

  componentWillMount() {
    // const { search } = this.props.location;
    // const query = new URLSearchParams(search);
    // const ingredients = {};
    // let price = 0;

    // for (let param of query.entries()) {
    //   if (param[0] === 'price') {
    //     price = param[1];
    //     break;
    //   }

    //   ingredients[param[0]] = +param[1];
    // }

    // this.setState({ ingredients, totalPrice: price });
  }

  cancelCheckoutHandler = () => this.props.history.goBack();

  continueCheckoutHandler = () => this.props.history.replace('/checkout/contact-data');

  render () {
    const { ingredients, purchased } = this.props;
    let summary = <Redirect to='/' />

    if (ingredients) {
      const purchasedRedirect = purchased && <Redirect to='/' />;
      summary = (
        <div>
          { purchasedRedirect }
          <CheckoutSummary
            cancelCheckout={this.cancelCheckoutHandler}
            continueCheckout={this.continueCheckoutHandler}
            ingredients={ingredients} />
          <Route
            path={`${this.props.match.path}/contact-data`}
            render={(props) =>(
              <ContactData
                // ingredients={ingredients}
                // totalPrice={totalPrice}
                {...props}
              />
            )}
          />
        </div>
      );
    }

    return summary;
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
  };
}

export default connect(mapStateToProps)(Checkout);
