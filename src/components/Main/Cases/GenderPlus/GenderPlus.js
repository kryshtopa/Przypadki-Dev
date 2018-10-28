import React from 'react';

const genderPlus = (props) => {

	const genderPlus = props.genderPlus.map(gndrPlsKey => {
		return (
			<li key={gndrPlsKey} className="mdl-list__item mdl-list__item--center">
				<button onClick={() => props.caseHandler(gndrPlsKey, "genderPlus")} className="mdl-button mdl-button--margin mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
					{gndrPlsKey}
				</button>
			</li>
			)
		});

	return (
		<ul className="mdl-list mdl-list--center">
			{genderPlus}
		</ul>
	);
}

export default genderPlus;