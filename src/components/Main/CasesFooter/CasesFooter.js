import React from 'react';

const casesFooter = (props) => {
	let buttonBack;
	let buttonRestart;
	let buttonBug;

	if (props.casesQuizCurrentStage > 1) {
		buttonBack = (
			<button onClick={props.backQuizHandler} className="mdl-button mdl-js-button mdl-button--primary button-back">
				<i className="material-icons">rotate_left</i>
			</button>
		)
		buttonRestart = (
			<button onClick={props.restartQuizHandler} className="mdl-button mdl-js-button mdl-button--primary">
				<i className="material-icons">loop</i>
			</button>
		)
	} 
	if (props.showResults === true) {
		buttonBug = (
			<a href="mailto:dmitry.kryshtopa.work@gmail.com?subject=Przypadki App Feedback&body=Cześć Dmitry!" className="mdl-button mdl-js-button mdl-button--primary button-message">
				<i className="material-icons orange600">email</i>
			</a>
		)
	}

	return (
		<div className="footer">
			{buttonBack}
			{buttonBug}
			{buttonRestart}
		</div>
	)
}

export default casesFooter;