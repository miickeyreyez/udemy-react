import React from 'react';
import Burger from '../../Burger';
import Button from '../../UI/Button';
import { CheckoutSummary } from './CheckoutSummary.module.css' 

const checkoutSummary = ({ cancelCheckout, continueCheckout, ingredients }) => (
  <div className={CheckoutSummary}>
    <h1>We hope taste well!</h1>
    <div style={{ width: '100%', height: '300px', margin: 'auto' }}>
      <Burger ingredients={ingredients} />
    </div>
    <Button
      btnType='Danger'
      click={cancelCheckout}>
        CANCEL
    </Button>
    <Button
      btnType='Success'
      click={continueCheckout}>
        CONTINUE
    </Button>
  </div>
);

export default checkoutSummary;
