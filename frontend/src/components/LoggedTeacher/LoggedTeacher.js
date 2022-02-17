import { useSelector } from 'react-redux';
import { navbarSelector } from '../../store/store';
import Header from '../Header';
import Navbar from '../Navbar';

import Home from '../LoggedHome';
import Worksheets from './Worksheets';
import MyClasses from './MyClasses';
import LoggedProfile from '../LoggedProfile';
import MyProfile from './MyProfile';
import Settings from './Settings';
import Assignments from './Assignments';
import headerBackground from '../../assets/svgs/full-back-teacher-back.svg';
import '../../LoggedTeacher.css';

export default function LoggedTeacher() {
	const { active: navActive } = useSelector(navbarSelector);

	const navLinks = [
		{ text: 'Начало', to: '#', value: 'home' },

		{ text: 'Задачи', to: '#', value: 'assignments' },
		{ text: 'Работни листове', to: '#', value: 'worksheets' },
		{ text: 'Класове', to: '#', value: 'classes' },
		{ text: 'Профил', to: '#', value: 'profile' },
		{ text: 'Изход', to: '#', value: 'exit' },
	];

	return (
		<>
			<div className='gradient-holder'>
				<Header style={{ backgroundImage: `url("${headerBackground}")` }}>
					<Navbar links={navLinks} outCount={2}></Navbar>
					<div style={{ padding: '4rem 1rem 1rem 1rem' }}>
						{navActive === 'home' && <Home text='учител' />}
						{navActive === 'worksheets' && <Worksheets />}
						{navActive === 'classes' && <MyClasses />}
						{navActive === 'assignments' && <Assignments />}
						{navActive === 'profile' && (
							<LoggedProfile
								myProfile={<MyProfile />}
								settings={<Settings />}
							/>
						)}
					</div>
				</Header>
			</div>
		</>
	);
}
