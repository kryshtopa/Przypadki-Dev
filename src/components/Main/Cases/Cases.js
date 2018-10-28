import React from 'react';

import Aux from '../../../hoc/Aux';
import Questions from './Questions/Questions';
import Word from './Word/Word';
import Quantity from './Quantity/Quantity';
import Gender from './Gender/Gender';
import GenderPlus from './GenderPlus/GenderPlus';

const cases = (props) => {

	let questions = null;
	let word = null;
	let quantity = null;
	let gender = null;
	let genderPlus = null;

	switch (props.casesQuizCurrentStage) {
		case 1:	
			questions = <Questions
				questions={props.questions}
				caseHandler={props.caseHandler}/>
		break;

		case 2:	
			word = <Word
				word={props.word}
				caseHandler={props.caseHandler}/>
		break;

		case 3:	
			quantity = <Quantity
				quantity={props.quantity}
				caseHandler={props.caseHandler}/>
		break;

		case 4:	
			gender = <Gender
				gender={props.gender}
				caseHandler={props.caseHandler}/>
		break;

		case 5:	
			genderPlus = <GenderPlus
				genderPlus={props.genderPlus}
				caseHandler={props.caseHandler}/>
		break;

		default: 
			questions = <Questions
				questions={props.questions}
				caseHandler={props.caseHandler}/>
		break;
	}

	return (
		<Aux>
			{questions}
			{word}
			{quantity}
			{gender}
			{genderPlus}
		</Aux>
	);
}

export default cases;