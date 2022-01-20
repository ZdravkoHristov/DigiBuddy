import { useDispatch } from 'react-redux';
import { changeActive } from '../store/slices/homeStateSlice';
import RolesSec from './styles/RolesSection.style';
import Button from './Button';
import illustration1 from '../assets/svgs/role-student.svg';
import illustration2 from '../assets/svgs/role-teacher.svg';
export default function Roles() {
	const dispatch = useDispatch();

	const changeActiveForm = newActive => {
		dispatch(changeActive(newActive));
	};

	return (
		<RolesSec className='roles container'>
			<h1 className='heading-l'>
				Регистрирайте се и станете част от нашата платформа!
			</h1>
			<h3 className='heading-s'>Моля първо изберете своята роля:</h3>
			<div className='holder'>
				<div className='img-holder'>
					<img src={illustration2} alt='teacher' />
					<div className='line'></div>
					<Button
						className='button heading-s'
						onClick={() => changeActiveForm('regTeacher')}
					>
						Учител
					</Button>
				</div>
				<div className='img-holder'>
					<img src={illustration1} alt='student' />
					<div className='line'></div>
					<Button
						className='button heading-s'
						onClick={() => changeActiveForm('regStudent')}
					>
						Ученик
					</Button>
				</div>
			</div>
		</RolesSec>
	);
}
