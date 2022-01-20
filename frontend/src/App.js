import { useSelector } from 'react-redux';
import { homeStateSelector } from './store/store';
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
	const { activeForm } = useSelector(homeStateSelector);

	return (
		<>
			<div className='gradient-holder'>
				{/* <img className='gradient-img' src={gradient} alt='gradient' /> */}
				<Header></Header>
				<AnimatedLine />
				<RolesSection />
				{activeForm === 'regTeacher' && <RegTeacher />}
				{activeForm === 'regStudent' && <RegStudent />}
				{activeForm === 'logTeacher' && <LogTeacher />}
				{activeForm === 'logStudent' && <LogStudent />}
				<Faq />
			</div>
		</>
	);
}

export default App;
