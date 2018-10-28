import React from 'react';

const word = (props) => {

	const word = props.word.map(wrdKey => {
		return (
			<li key={wrdKey} className="mdl-list__item mdl-list__item--center">
				<button onClick={() => props.caseHandler(wrdKey, "word")} className="mdl-button mdl-button--margin mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
					{wrdKey}
				</button>
			</li>
			)
		});

	return (
		<ul className="mdl-list mdl-list--center">
			{word}
		</ul>
	);
}

export default word;