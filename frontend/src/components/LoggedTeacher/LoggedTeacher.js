import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { setTeacher } from '../../store/slices/teacherSlice';
import axios from 'axios';
import { navbarSelector, teacherSelector } from '../../store/store';
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
	const { info: teacherInfo } = useSelector(teacherSelector);

	const dispatch = useDispatch();

	const {id} = useParams();

	const navLinks = [
		{ text: 'Начало', to: '#', value: 'home' },
		{ text: 'Работни листове', to: '#', value: 'worksheets' },
		{ text: 'Задачи', to: '#', value: 'assignments' },
		{ text: 'Класове', to: '#', value: 'classes' },
		{ text: 'Профил', to: '#', value: 'profile' },
		{ text: 'Изход', to: '/', value: 'exit' },
	];


	/**Denitsa */
	const fetchData = async () => {
		const res = await axios.get(`http://127.0.0.1:8000/api/teacher/${id}/home`);

		console.log(res.data.info);
		const fullName = res.data.info.name + " " + res.data.info.lname;

		dispatch(setTeacher({...res.data.info, fullName}));
	}
	useEffect(fetchData,[]);

	let text = "Зареждане...";
	if(teacherInfo.fullName){
		text = "Г-н/Г-жа " + teacherInfo.fullName;
	}

	return (
		<>
			<div className='gradient-holder'>
				<Header style={{ backgroundImage: `url("${headerBackground}")` }}>
					<Navbar links={navLinks} outCount={1}></Navbar>
					<div style={{ padding: '4rem 1rem 1rem 1rem' }}>
						{navActive === 'home' && <Home text={text} />}
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
