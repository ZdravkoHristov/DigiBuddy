import React from 'react';
import ReactDOM from 'react-dom';
import font from './fonts/avantebs.ttf';
import './main.css';
import App from './App';
import FontStyles from './fontStyles';

console.log(font);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
