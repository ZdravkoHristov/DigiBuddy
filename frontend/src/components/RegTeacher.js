import { useDispatch } from 'react-redux';
import { changeActive } from '../store/slices/homeStateSlice';
import RegisterEl from './styles/RegisterEl.style';
import AnimatedLine from './AnimatedLine';
import illustration from '../assets/svgs/role-teacher.svg';
import Button from './Button';
import { useState } from 'react';
import axios from 'axios';

export default function RegTeacherEl() {
	const dispatch = useDispatch();

	const changeActiveForm = newActive => {
		dispatch(changeActive(newActive));
	};

	const dataTemp = {
		name: '',
		lname: '',
		email: '',
		subject: '',
		school: '',
		town: '',
		comm: '',
		area: '',
		password: '',
		password_confirmation: '',
	};

	const [data, setData] = useState({ ...dataTemp });

	const [errors, setErrors] = useState({});

	const handleInput = e => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const register = async e => {
		e.preventDefault();

		const res = await axios.post(
			'https://digibuddy-backend.herokuapp.com/api/teacher/register',
			data
		);
		// console.log(res.data.status);
		if (res.data.status === 200) {
			setErrors({});
			setData({ ...dataTemp });
			window.location.href = res.data.url;
		}
		if (res.data.status === 400) {
			setErrors(res.data.errors);
		}
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

				{/* ----------------FORM---------------------- */}

				<form className='input-holder' onSubmit={register}>
					<div className='group'>
						<label htmlFor='name'>Име:</label>
						<input
							name='name'
							type='text'
							onChange={handleInput}
							placeholder='Въведете своето име'
							value={data.name}
						/>
						<span className='danger'>{errors.name || ''}</span>
					</div>
					<div className='group'>
						<label htmlFor='lname'>Фамилия:</label>
						<input
							name='lname'
							type='text'
							placeholder='Въведете своята фамилия'
							onChange={handleInput}
							value={data.lname}
						/>
						<span className='danger'>{errors.lname || ''}</span>
					</div>
					<div className='group'>
						<label htmlFor='email'>Email:</label>
						<input
							name='email'
							type='email'
							placeholder='Въведете своя email'
							onChange={handleInput}
							value={data.email}
						/>
						<span className='danger'>{errors.email || ''}</span>
					</div>
					<div className='group'>
						<label htmlFor='subject'>Учебен предмет/и:</label>
						<input
							name='subject'
							type='text'
							placeholder='Въведете учебен предмет/и'
							onChange={handleInput}
							value={data.subject}
						/>
						<span className='danger'>{errors.subject || ''}</span>
					</div>
					<div className='group'>
						<label htmlFor='school'>Учебно заведение:</label>
						<input
							name='school'
							type='text'
							placeholder='Въведете име на учебно заведение'
							onChange={handleInput}
							value={data.school}
						/>
						<span className='danger'>{errors.school || ''}</span>
					</div>
					<div className='group'>
						<label htmlFor='town'>Град/село:</label>
						<input
							name='town'
							type='text'
							placeholder='Въведете градът на учебното заведение'
							onChange={handleInput}
							value={data.town}
						/>
						<span className='danger'>{errors.town || ''}</span>
					</div>
					<div className='group'>
						<label htmlFor='comm'>Община:</label>
						<input
							name='comm'
							type='text'
							placeholder='Въведете общината на учебното заведение'
							onChange={handleInput}
							value={data.comm}
						/>
						<span className='danger'>{errors.comm || ''}</span>
					</div>
					<div className='group'>
						<label htmlFor='area'>Област:</label>
						<input
							name='area'
							type='text'
							placeholder='Въведете областта на учебното заведение'
							onChange={handleInput}
							value={data.area}
						/>
						<span className='danger'>{errors.area || ''}</span>
					</div>
					<div className='group'>
						<label htmlFor='password'>Парола:</label>
						<input
							name='password'
							type='password'
							placeholder='Въведете парола'
							onChange={handleInput}
							value={data.password}
						/>
						<span className='danger'>{errors.password || ''}</span>
					</div>
					<div className='group'>
						<label htmlFor='password_confirmation'>Потвърдете паролата:</label>
						<input
							name='password_confirmation'
							type='password'
							placeholder='Потвърдете паролата'
							onChange={handleInput}
							value={data.password_confirmation}
						/>
					</div>

					{/* Button */}

					<div className='group'>
						<Button className='button'>Регистрация</Button>
						<Button
							className='button'
							theme='darkBlue'
							onClick={() => changeActiveForm(null)}
							type='submit'
						>
							Затвори
						</Button>
					</div>
				</form>
			</div>
		</RegisterEl>
	);
}
