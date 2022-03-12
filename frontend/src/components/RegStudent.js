import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setHomeData } from '../store/slices/homeStateSlice';
import RegisterEl from './styles/RegisterEl.style';

import illustration from '../assets/svgs/role-student.svg';
import Button from './Button';
export default function RegStudent() {
	const dispatch = useDispatch();

	//DENITSA

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

	const closeForm = () => {
		dispatch(setHomeData({ showForm: false }));
	};
	const changeActiveForm = newActive => {
		dispatch(setHomeData({ activeForm: newActive }));
	};

	return (
		<RegisterEl className='container student-form'>
			<h1 className='heading-l'>Регистрация като ученик</h1>

			<h3 className='heading-s'>Моля попълнете всички полета:</h3>
			<div className='holder'>
				<div className='img-holder'>
					<img src={illustration} />
					<p className='heading-m'>Вече имате регистрация?</p>
					<Button
						className='button heading-s'
						theme='red'
						onClick={() => changeActiveForm('logStudent')}
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
						<label htmlFor='subject'>Клас и паралелка:</label>
						<input
							name='subject'
							type='text'
							placeholder='Въведете клас и паралелка: Напр. "12б"'
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
						<Button className='button heading-s'>Регистрация</Button>
						<Button
							className='button heading-s mobile-button'
							theme='red'
							onClick={() => changeActiveForm('logStudent')}
						>
							Вход
						</Button>
						<a href='#entrance'>
							<Button
								className='button heading-s'
								theme='darkBlue'
								onClick={closeForm}
							>
								Затвори
							</Button>
						</a>
					</div>
				</form>
			</div>
		</RegisterEl>
	);
}
