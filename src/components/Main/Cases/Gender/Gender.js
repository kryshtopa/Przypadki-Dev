import React from 'react';

const gender = (props) => {

	const gender = props.gender.map(gndrKey => {
		return (
			<li key={gndrKey} className="mdl-list__item mdl-list__item--center">
				<button onClick={() => props.caseHandler(gndrKey, "gender")} className="mdl-button mdl-button--margin mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
					{gndrKey}
				</button>
			</li>
			)
		});

	return (
		<ul className="mdl-list mdl-list--center">
			{gender}
		</ul>
	);
}

export default gender;