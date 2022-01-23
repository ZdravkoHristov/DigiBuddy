import { useSelector } from 'react-redux';
import { navbarSelector } from '../../store/store';
import Header from '../Header';
import Navbar from '../Navbar';
import Hero from '../Hero';
import Home from './Home';
import Class from './Class';
import Profile from './Profile';
import '../../LoggedTeacher.css';

export default function LoggedTeacher() {
	const { active: navActive } = useSelector(navbarSelector);

	const navLinks = [
		{ text: 'Начало', to: '#', value: 'home' },
		{ text: 'Колекции', to: '#', value: 'collections' },
		{ text: 'Моят клас', to: '#', value: 'class' },
		{ text: 'Моят профил', to: '#', value: 'profile' },
		{ text: 'Изход', to: '#', value: 'exit' },
	];

	return (
		<>
			<div className='gradient-holder'>
				<Header>
					<Navbar links={navLinks} outCount={1}></Navbar>
					{navActive === 'home' && <Home />}{' '}
					{navActive === 'class' && <Class />}
					{navActive === 'profile' && <Profile />}
				</Header>
			</div>
		</>
	);
}
