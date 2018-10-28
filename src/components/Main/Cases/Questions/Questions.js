import React from 'react';

const questions = (props) => {

	const questions = Object.keys(props.questions).map((casesKey, i) => {
		return [...Array(props.questions[casesKey])].map(content => {
			return (
				<li
					key={casesKey + i}
					className="mdl-list__item"
				>
					{
						content.map((question, i) => {
							let buttonClassName

							if (question.includes('?')) {
								buttonClassName = "mdl-button mdl-button--margin mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
							} else {
								buttonClassName = "is-not-a-question mdl-button mdl-button--margin mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
							}
							return (
									<button
										key={question + i}
										onClick={() => props.caseHandler(casesKey, "case")}
										className={buttonClassName}>
										{question}
									</button>
							)
						})
					}
				</li>
			)
		})
	});

	return (
		<ul className="mdl-list mdl-list--center">
			{questions}
		</ul>
	);
}

export default questions;