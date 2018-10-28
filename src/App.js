import React from 'react';
import 'material-design-lite/material.min.css';
import 'material-design-lite/material.min.js';
import './assets/styles.css';

import Aux from './hoc/Aux';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

const app = () => (
	<Aux>
		<Header />
		<Main />
	</Aux>
)

export default app;