import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Button from '../../UI/Button';

class OrderSummary extends Component {
	render () {
		const { ingredients, totalPrice, cancel, purchased } = this.props;

		return (
			<Aux>
				<h3>Your order</h3>
				<p>Delicious burger with the following ingredients</p>
				<ul>
					{
						Object
							.keys(ingredients)
							.map((key) => (
							<li key={key}>
								<span style={{ textTransform: 'capitalize' }}>{key}</span>
								{`: ${ingredients[key]}`}
							</li>
							)
						)
					}
				</ul>
				<p><strong>Total Price:</strong> ${totalPrice.toFixed(2)}</p>
				<p>Continue to checkout?</p>
				<Button clicked={cancel} btnType={'Danger'}>CANCEL</Button>
				<Button clicked={purchased} btnType={'Success'}>CONTINUE</Button>
			</Aux>
		);
	}	
}

export default OrderSummary;
