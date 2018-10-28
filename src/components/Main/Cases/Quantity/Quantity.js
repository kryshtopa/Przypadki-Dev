import React from 'react';

const quantity = (props) => {

	const quantity = props.quantity.map(qtyKey => {
		return (
			<li key={qtyKey} className="mdl-list__item mdl-list__item--center">
				<button
					onClick={() => props.caseHandler(qtyKey, "quantity")}
					className="mdl-button mdl-js-button mdl-button--margin mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
					{qtyKey}
				</button>
			</li>
			)
		});

	return (
		<ul className="mdl-list mdl-list--center">
			{quantity}
		</ul>
	);
}

export default quantity;