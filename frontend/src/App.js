import { useSelector, useDispatch } from 'react-redux';
import { homeStateSelector } from './store/store';
import { changeActiveNavItem } from './store/slices/homeStateSlice';
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
import Navbar from './components/Navbar';

function App() {
	const dispatch = useDispatch();
	const { activeForm, activeNavItem } = useSelector(homeStateSelector);

	const changeActiveItem = newActive => {
		dispatch(changeActiveNavItem(newActive));
	};

	return (
		<>
			<div className='gradient-holder'>
				{/* <img className='gradient-img' src={gradient} alt='gradient' /> */}

				<Header>
					<Navbar active={activeNavItem} setActive={changeActiveItem}></Navbar>{' '}
				</Header>
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
