import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { navbarSelector, teacherSelector } from '../../store/store';
import { setTeacher } from '../../store/slices/teacherSlice';
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
import TeacherEl from '../styles/LoggedTeacher.style';

export default function LoggedTeacher() {
	const { active: navActive } = useSelector(navbarSelector);
	const { info: teacherInfo } = useSelector(teacherSelector);

	const dispatch = useDispatch();

	const { id } = useParams();
	let homeText = 'Зареждане...';

	if (teacherInfo.fullName) {
		homeText = 'Г-н/Г-жа ' + teacherInfo.fullName;
	}

	const navLinks = [
		{ text: 'Начало', to: '#', value: 'home' },

		{ text: 'Задачи', to: '#', value: 'assignments' },
		{ text: 'Работни листове', to: '#', value: 'worksheets' },
		{ text: 'Класове', to: '#', value: 'classes' },
		{ text: 'Профил', to: '#', value: 'profile' },
		{ text: 'Изход', to: '/', value: 'exit' },
	];

	useEffect(() => {
		(async () => {
			const res = await axios.get(
				`http://127.0.0.1:8000/api/teacher/${id}/home`
			);

			const fullName = res.data.info.name + ' ' + res.data.info.lname;

			dispatch(setTeacher({ ...res.data.info, fullName }));
		})();
	}, []);

	return (
		<>
			<TeacherEl>
				<div className='gradient-holder'>
					<Header
						style={{
							backgroundImage: `url("${headerBackground}")`,
						}}
					>
						<Navbar links={navLinks} outCount={2}></Navbar>
						<div>
							{navActive === 'home' && <Home text={homeText} />}
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
			</TeacherEl>
		</>
	);
}
