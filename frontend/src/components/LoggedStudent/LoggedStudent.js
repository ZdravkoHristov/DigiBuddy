import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { navbarSelector, studentSelector } from '../../store/store';
import { setStudent } from '../../store/slices/studentSlice';
import Header from '../Header';
import Navbar from '../Navbar';

import Home from '../LoggedHome';
import Classes from './Classes';
import LoggedProfile from '../LoggedProfile';
import MyProfile from './MyProfile';
import Settings from './Settings';
import headerBackground from '../../assets/svgs/full-back-student.svg';
// import '../../LoggedStudent.css';

export default function LoggedStudent() {
	const { active: navActive } = useSelector(navbarSelector);
	const { info: studentInfo } = useSelector(studentSelector);

	const dispatch = useDispatch();

	const { id } = useParams();
	let homeText = 'Зареждане...';

	if (studentInfo.fullName) {
		homeText = 'Здравейте, ' + studentInfo.fullName;
	}

	const navLinks = [
		{ text: 'Начало', to: '#', value: 'home' },
		{ text: 'Класове и задания', to: '#', value: 'classes' },

		{ text: 'Профил', to: '#', value: 'profile' },
		{ text: 'Изход', to: '#', value: 'exit' },
	];

	const breakpoints = new Map();
	breakpoints.set(1430, 2);

	useEffect(() => {
		(async () => {
			const res = await axios.get(
				`${process.env.REACT_APP_BACKEND}/api/student/${id}/home`
			);

			const fullName = res.data.info.name + ' ' + res.data.info.lname;

			dispatch(setStudent({ ...res.data.info, fullName }));
		})();
	}, []);


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
						{navActive === 'home' && <Home text={homeText} />}
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
