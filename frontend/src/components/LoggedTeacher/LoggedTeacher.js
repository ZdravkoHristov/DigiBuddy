import { useSelector } from 'react-redux';
import { navbarSelector } from '../../store/store';
import Header from '../Header';
import Navbar from '../Navbar';

import Home from './Home';
import MyClasses from './MyClasses';
import Profile from './Profile';
import headerBackground from '../../assets/svgs/full-back-teacher-back.svg';
import '../../LoggedTeacher.css';

export default function LoggedTeacher() {
	const { active: navActive } = useSelector(navbarSelector);

	const navLinks = [
		{ text: 'Начало', to: '#', value: 'home' },
		{ text: 'Колекции', to: '#', value: 'collections' },
		{ text: 'Моите класове', to: '#', value: 'class' },
		{ text: 'Моят профил', to: '#', value: 'profile' },
		{ text: 'Изход', to: '#', value: 'exit' },
	];

	return (
		<>
			<div className='gradient-holder'>
				<Header style={{ backgroundImage: `url("${headerBackground}")` }}>
					<Navbar links={navLinks} outCount={1}></Navbar>
					<div style={{ padding: '4rem 1rem 1rem 1rem' }}>
						{navActive === 'home' && <Home />}{' '}
						{navActive === 'class' && <MyClasses />}
						{navActive === 'profile' && <Profile />}
					</div>
				</Header>
			</div>
		</>
	);
}
