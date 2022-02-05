import { useSelector } from 'react-redux';
import { navbarSelector } from '../../store/store';
import Header from '../Header';
import Navbar from '../Navbar';

import Home from '../LoggedHome';
import Classes from './Classes';
import LoggedProfile from '../LoggedProfile';
import MyProfile from './MyProfile';
import Settings from './Settings';
import headerBackground from '../../assets/svgs/full-back-student.svg';
// import '../../LoggedTeacher.css';

export default function LoggedStudent() {
	const { active: navActive } = useSelector(navbarSelector);

	const navLinks = [
		{ text: 'Начало', to: '#', value: 'home' },
		{ text: 'Класове и задания', to: '#', value: 'classes' },

		{ text: 'Профил', to: '#', value: 'profile' },
		{ text: 'Изход', to: '#', value: 'exit' },
	];

	return (
		<>
			<div className='gradient-holder'>
				<Header
					style={{
						backgroundImage: `url("${headerBackground}")`,
						backgroundPositionY: '-81px',
					}}
				>
					<Navbar links={navLinks} outCount={1}></Navbar>
					<div style={{ padding: '4rem 1rem 1rem 1rem' }}>
						{navActive === 'home' && <Home text='ученик' />}
						{navActive === 'classes' && <Classes />}
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
