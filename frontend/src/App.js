import './App.css';
import gradient from './assets/svgs/home-back2.svg';
import Header from './components/Header';
import AnimatedLine from './components/AnimatedLine';
import RolesSection from './components/RolesSection';
import RegTeacher from './components/RegTeacherEl';
import Faq from './components/Faq';

function App() {
	return (
		<>
			<div className='gradient-holder'>
				<img className='gradient-img' src={gradient} alt='gradient' />
				<Header></Header>
				<AnimatedLine />
				<RolesSection />
				<RegTeacher />
			</div>
			<Faq />
		</>
	);
}

export default App;
