import './App.css';
import wave from './assets/svgs/wave.svg';
import Header from './components/Header';
import AnimatedLine from './components/AnimatedLine';
import RolesSection from './components/RolesSection';
import RegTeacher from './components/RegTeacherEl';
import RegStudent from './components/RegStudentEl';
import LogTeacher from './components/LogTeacherEl';
import LogStudent from './components/LogStudentEl';
import Faq from './components/Faq';

function App() {
	return (
		<>
			<div className='gradient-holder'>
				{/* <img className='gradient-img' src={gradient} alt='gradient' /> */}
				<Header></Header>
				<AnimatedLine />
				<RolesSection />
				{/* <RegTeacher /> */}
				{/* <RegStudent /> */}
				{/* <LogTeacher /> */}
				<LogStudent />
			</div>
			<Faq />
		</>
	);
}

export default App;
