import './App.css';
import wave from './assets/svgs/wave.svg';
import Header from './components/Header';
import AnimatedLine from './components/AnimatedLine';
import RolesSection from './components/RolesSection';
import RegTeacher from './components/RegTeacher';
import RegStudent from './components/RegStudent';
import LogTeacher from './components/LogTeacher';
import LogStudent from './components/LogStudent';
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
				<Faq />
			</div>
		</>
	);
}

export default App;
