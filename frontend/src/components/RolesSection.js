import { useDispatch, useSelector } from 'react-redux';
import { setHomeData } from '../store/slices/homeStateSlice';
import { homeStateSelector } from '../store/store';
import RolesSec from './styles/RolesSection.style';
import Button from './Button';
import AnimatedLine from './AnimatedLine';
import illustration1 from '../assets/svgs/role-student.svg';
import illustration2 from '../assets/svgs/role-teacher.svg';
export default function Roles() {
	const dispatch = useDispatch();
	const { activeForm } = useSelector(homeStateSelector);

	const changeActiveForm = newActive => {
		dispatch(setHomeData({ activeForm: newActive, showForm: true }));
	};

	return (
		<RolesSec className='roles container' id='entrance'>
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
						onClick={() => changeActiveForm('logTeacher')}
					>
						Учител
					</Button>
					{(activeForm === 'regTeacher' || activeForm === 'logTeacher') && (
						<AnimatedLine className='animated-line' />
					)}
				</div>
				<div className='img-holder'>
					<img src={illustration1} alt='student' />
					<div className='line'></div>
					<Button
						className='button heading-s'
						onClick={() => changeActiveForm('logStudent')}
					>
						Ученик
					</Button>
					{(activeForm === 'regStudent' || activeForm === 'logStudent') && (
						<AnimatedLine className='animated-line' />
					)}
				</div>
			</div>
		</RolesSec>
	);
}
