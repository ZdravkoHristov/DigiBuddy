import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import LoggedTeacher from './components/LoggedTeacher/LoggedTeacher';
import LoggedStudent from './components/LoggedStudent/LoggedStudent';
import Authors from './components/Authors';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='api/teacher/:id/home' element={<LoggedTeacher />} />
			<Route path='api/student/:id/home' element={<LoggedStudent />} />
			<Route path='authors' element={<Authors />} />
		</Routes>
	);
}

export default App;
