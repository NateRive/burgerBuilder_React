import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
		return (
			<li key={igKey}>
				<span style={{ textTransform: 'capitalize' }}>{igKey}</span> :{props.ingredients[igKey]}
			</li>
		);
	});

	return (
		<Aux>
			<h3>Your order</h3>
			<p>A delicious burger with the following ingredients</p>
			<ul>{ingredientSummary}</ul>
			<p>
				<stront>Total PRice: {props.price.toFixed(2)} </stront>
			</p>
			<p>Continue to Checkout?</p>
			<Button btnType="Danger" clicked={props.purchaseCanceled}>
				Cancel
			</Button>
			<Button btnType="Success" clicked={props.purchaseContinued}>
				Continue
			</Button>
		</Aux>
	);
};

export default orderSummary;
