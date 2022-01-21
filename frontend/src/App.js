import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import LoggedTeacher from './components/LoggedTeacher/LoggedTeacher';
import './App.css';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='loggedTeacher' element={<LoggedTeacher />} />
		</Routes>
	);
}

export default App;
