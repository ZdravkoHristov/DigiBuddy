import { useDispatch } from 'react-redux';
import { setHomeData } from '../store/slices/homeStateSlice';
import RegisterEl from './styles/RegisterEl.style';
import AnimatedLine from './AnimatedLine';
import illustration from '../assets/svgs/role-teacher.svg';
import Button from './Button';
export default function RegTeacherEl() {
	const dispatch = useDispatch();

	const changeActiveForm = newActive => {
		dispatch(setHomeData({ activeForm: newActive }));
	};

	return (
		<RegisterEl className='container'>
			{/* <header>
				<AnimatedLine className='line'></AnimatedLine>
				<div className='text'>
					<h1 className='heading-l'>Регистрация като учител</h1>
					<h3 className='heading-s'>Моля попълнете всички полета:</h3>
				</div>
			</header> */}

			<h1 className='heading-l'>Регистрация като учител</h1>
			<br />
			<h3 className='heading-s'>Моля попълнете всички полета:</h3>

			<div className='holder'>
				<div className='img-holder'>
					<img src={illustration} />
					<p className='heading-m'>Вече имате регистрация?</p>
					<Button
						className='button'
						theme='red'
						onClick={() => changeActiveForm('logTeacher')}
					>
						Вход
					</Button>
				</div>
				<form className='input-holder'>
					<div className='group'>
						<label htmlFor='name'>Име:</label>
						<input name='name' type='text' placeholder='Въведете своето име' />
					</div>
					<div className='group'>
						<label htmlFor='l-name'>Фамилия:</label>
						<input
							name='l-name'
							type='text'
							placeholder='Въведете своята фамилия'
						/>
					</div>
					<div className='group'>
						<label htmlFor='email'>Email:</label>
						<input
							name='email'
							type='email'
							placeholder='Въведете своя email'
						/>
					</div>
					<div className='group'>
						<label htmlFor='subject'>Учебен предмет/и:</label>
						<input
							name='subject'
							type='text'
							placeholder='Въведете учебен предмет/и'
						/>
					</div>
					<div className='group'>
						<label htmlFor='school'>Учебно заведение:</label>
						<input
							name='school'
							type='text'
							placeholder='Въведете име на учебно заведение'
						/>
					</div>
					<div className='group'>
						<label htmlFor='town'>Град/село:</label>
						<input
							name='town'
							type='text'
							placeholder='Въведете градът на учебното заведение'
						/>
					</div>
					<div className='group'>
						<label htmlFor='comm'>Община:</label>
						<input
							name='comm'
							type='text'
							placeholder='Въведете общината на учебното заведение'
						/>
					</div>
					<div className='group'>
						<label htmlFor='area'>Област:</label>
						<input
							name='area'
							type='text'
							placeholder='Въведете областта на учебното заведение'
						/>
					</div>
					<div className='group'>
						<label htmlFor='pass'>Парола:</label>
						<input name='pass' type='text' placeholder='Въведете парола' />
					</div>
					<div className='group'>
						<label htmlFor='name'>Потвърдете паролата:</label>
						<input
							name='c-pass'
							type='text'
							placeholder='Потвърдете паролата'
						/>
					</div>
					<div className='group'>
						<Button className='button'>Регистрация</Button>
						<Button
							className='button'
							theme='darkBlue'
							onClick={() => changeActiveForm(null)}
						>
							Затвори
						</Button>
					</div>
				</form>
			</div>
		</RegisterEl>
	);
}
