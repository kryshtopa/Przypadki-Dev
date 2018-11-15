import React, {Component} from 'react';

import cases from '../../assets/cases';
import Aux from '../../hoc/Aux';
import Cases from '../../components/Main/Cases/Cases';
import Results from '../../components/Main/Results/Results';
import CasesFooter from '../../components/Main/CasesFooter/CasesFooter';

class CasesQuiz extends Component {
	state = {
		casesQuizStages: {
			1: "case",
			2: "word",
			3: "quantity",
			4: "gender",
			5: "genderPlus"
		},
		casesQuizCurrentStage: 1,
		showResults: false,
		questions: {
			"MIANOWNIK": ["KTO?","CO?","JAKIE?"],
			"DOPEŁNIACZ": ["KOGO?","CZEGO?","JAKIEGO?","JAKIEJ?","JAKICH?","DOKĄD? (MIASTO, KRAJ, BUDYNEK)","obok","koło","na wprost","wzdłuż","blisko"],
			"CELOWNIK":["КОМU?","CZEMU?","JAKIEMU?","JAКIEJ?","JAKIEMU?","JAKIM?"],
			"BIERNIK": ["KOGO?","CO?","JAKIEGO?","JAKĄ?","JAKI?","JAKIE?","DOKĄD? (GÓRY, WODA, PLAC, WYSPA)"],
			"NARZĘDNIK": ["KIM?","CZYM?","JAKIM?","JAKĄ?","JAKIMI?","nad","pod","przed","między","za"],
			"MIEJSCOWNIK": ["O KIM?","O CZYM?","JAKIM?","JAKIEJ?","JAKICH?","GDZIE?","w","na","przy","po"]
		},
		word: [
			"rzeczownik",
			"przymiotnik"
		],
		quantity: [
			"liczba pojedyncza",
			"liczba mnoga"
		],
		gender: [
			"męski",
			"żeński",
			"nijaki"
		],
		genderPlus: [],
		casesChosen: {
			case: '',
			word: '',
			quantity: '',
			gender: '',
			genderPlus: ''
		}
	}

	setCasesChosen = (thisCase, thisStage) => {
		const updatedCasesChosen = {...this.state.casesChosen};
		const updatedCase = thisCase;
		
		updatedCasesChosen[thisStage] = updatedCase;

		this.setState({
			casesChosen: updatedCasesChosen
		});	
		this.casesQuizStageSwitcher(thisCase, thisStage);
	}

	casesQuizStageSwitcher = (thisCase, thisStage) => {
		const casesQuizStages = this.state.casesQuizStages;
		const nextStage = Object.keys(casesQuizStages)[Object.values(casesQuizStages).indexOf(thisStage)]*1 + 1;

		if (this.state.casesQuizCurrentStage < 4) {
			this.setState({
				casesQuizCurrentStage: nextStage
			});
			this.updateProgressBar(this.state.casesQuizCurrentStage, 4);
		} else if (this.state.casesQuizCurrentStage === 4) {
			this.genderPlusCheck(thisCase);
		} else {
			this.setState({
				showResults: true
			});
			this.updateProgressBar(this.state.casesQuizCurrentStage, 4);
		}
	}
	
	genderPlusCheck = (thisCase) => {
		const caseGender = cases[this.state.casesChosen.case][this.state.casesChosen.word][this.state.casesChosen.quantity][thisCase];

		if (caseGender["męskoosobowy"]) {
			const genderPlusUpdated = [
				"męskoosobowy",
				"niemęskoosobowy"
			]
			this.setState({
				casesQuizCurrentStage: 5,
				genderPlus: genderPlusUpdated
			});				
			this.updateProgressBar(this.state.casesQuizCurrentStage, 5);
		} else if (caseGender["żywotne"]) {
			const genderPlusUpdated = [
				"żywotne",
				"nieżywotne"
			];
			this.setState({
				casesQuizCurrentStage: 5,
				genderPlus: genderPlusUpdated
			});
			this.updateProgressBar(this.state.casesQuizCurrentStage, 5);
		} else {
			this.setState({
				showResults: true
			});
			this.updateProgressBar(this.state.casesQuizCurrentStage, 4);
		}
	}

	restartQuizHandler = () => {
		this.setState({
			showResults: false,
			casesQuizCurrentStage: 1,
			casesChosen: {
				case: '',
				word: '',
				quantity: '',
				gender: '',
				genderPlus: ''
			}
		});
		this.updateProgressBar(0,4)
	}

	backQuizHandler = () => {
		let prevStage;
		let casesChosenUpdated = {...this.state.casesChosen};

		if (this.state.showResults) {
			prevStage = this.state.casesQuizCurrentStage;
		} else {
			prevStage = this.state.casesQuizCurrentStage - 1;
		}

		for (var i = prevStage; i <= 5; i++) {
			casesChosenUpdated[this.state.casesQuizStages[i]]  = '';
		}

		this.setState({
			showResults: false,
			casesQuizCurrentStage: prevStage,
			casesChosen: casesChosenUpdated
		});

		this.updateProgressBar(prevStage - 1, 4)
	}

	updateProgressBar = (stage, stages) => {
		let value = stage/stages*100
		document.querySelector('#progressBar').MaterialProgress.setProgress(value);
	}

	render () {		
		let mainRender;
		
		if (this.state.showResults) {
			mainRender = (
				<Results
					casesChosen={this.state.casesChosen}/>
			)
		} else {
			mainRender = (
				<Cases
					casesQuizCurrentStage={this.state.casesQuizCurrentStage}
					questions={this.state.questions}
					word={this.state.word}
					quantity={this.state.quantity}
					gender={this.state.gender}
					genderPlus={this.state.genderPlus}
					caseHandler={this.setCasesChosen}/>
			)
		}

		return (
			<Aux>
				{mainRender}
				<CasesFooter
					casesQuizCurrentStage={this.state.casesQuizCurrentStage}
					showResults={this.state.showResults}
					backQuizHandler={this.backQuizHandler}
					restartQuizHandler={this.restartQuizHandler}/>
			</Aux>
		);
	}
}

export default CasesQuiz;