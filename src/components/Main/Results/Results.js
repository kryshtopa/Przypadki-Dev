import React from 'react';

import cases from '../../../assets/cases';

const results = (props) => {
	const endings1 = cases[props.casesChosen.case][props.casesChosen.word][props.casesChosen.quantity][props.casesChosen.gender];
	
	let endings2 = null;
	if(props.casesChosen.gender === "menski") {
		if([props.casesChosen.genderPlus] in endings1) {
			endings2 = endings1[props.casesChosen.genderPlus]
		} else {
			endings2 = endings1		
		}
	} else {
		endings2 = endings1
	}

	const endings = Object.keys(endings2).map((key, i) => {
		return (
			<li key={key + i} className="mdl-list__item">
				<span className="result-conditions">{key}</span>
				<span>:</span>
				<span className="result-endings">{endings2[key]}</span>
			</li>
			)
	});


	return (
		<div className="mdl-card">
			<div className="mdl-card__title">
    		<h2 className="mdl-card__title-text">{props.casesChosen.case}</h2>
    	</div>
    	<div className="mdl-card__supporting-text">
				<h4 className="mdl-card__subtitle-text">{props.casesChosen.word} • {props.casesChosen.quantity} • {props.casesChosen.gender} {props.casesChosen.genderPlus.length > 0 ? " • " + props.casesChosen.genderPlus : '' }</h4>
    	</div>
			<ul className="mdl-list">
				{endings}
			</ul>
		</div>
	);
}

export default results;