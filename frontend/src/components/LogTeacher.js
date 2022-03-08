import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setHomeData } from '../store/slices/homeStateSlice';
import RegisterEl from './styles/RegisterEl.style';

import illustration from '../assets/svgs/role-teacher.svg';
import Button from './Button';
export default function LogTeacher() {
	const dispatch = useDispatch();
	
	const dataTemp = {
		email: '',
		password: '',
	};

	const [errors, setErrors] = useState({});
	const [data, setData] = useState({ ...dataTemp });

	const closeForm = () => {
		dispatch(setHomeData({ showForm: false }));
	};

	const changeActiveForm = newActive => {
		dispatch(setHomeData({ activeForm: newActive }));
	};

	const handleInput = e => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const login = async e => {
		e.preventDefault();

		const res = await axios.post(
			`${process.env.REACT_APP_BACKEND}/api/teacher/login`,
			data
		);
		console.log(res.data.status);
		if (res.data.status === 200) {
			window.location.href = res.data.url;
		}
		if (res.data.status === 400) {
			setErrors(res.data.errors);
		}
	};

	return (
		<RegisterEl className='container'>
			<h1 className='heading-l'>Вход като учител</h1>
			<br />
			<h3 className='heading-s'>Моля попълнете всички полета:</h3>
			<div className='holder'>
				<div className='img-holder'>
					<img src={illustration} />
					<p className='heading-m'>Нямате регистрация?</p>
					<Button
						className='button heading-s'
						theme='red'
						onClick={() => changeActiveForm('regTeacher')}
						type='button'
					>
						Регистрация
					</Button>
				</div>
				<form className='input-holder flex-c' onSubmit={login}>
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
						<label htmlFor='pass'>Парола:</label>
						<input
							name='password'
							type='password'
							placeholder='Въведете парола'
							onChange={handleInput}
							value={data.password}
						/>
						<span className='danger'>{errors.login || ''}</span>
					</div>
					<div className='group'>
						<Button className='button heading-s' type='submit'>
							Вход
						</Button>
						<Button
							className='button heading-s mobile-button'
							theme='red'
							onClick={() => changeActiveForm('regTeacher')}
							type='button'
						>
							Регистрация
						</Button>
						<Button
							className='button heading-s'
							theme='darkBlue'
							onClick={closeForm}
						>
							Затвори
						</Button>
					</div>
				</form>
			</div>
		</RegisterEl>
	);
}
