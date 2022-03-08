import { useDispatch } from 'react-redux';
import { changeActive } from '../store/slices/homeStateSlice';
import RegisterEl from './styles/RegisterEl.style';
import {useState} from 'react';
import axios from 'axios';

import illustration from '../assets/svgs/role-teacher.svg';
import Button from './Button';
export default function LogTeacher() {
	const dispatch = useDispatch();

	const [errors, setErrors] = useState({});

	const changeActiveForm = newActive => {
		dispatch(changeActive(newActive));

	};

	
	/**Denitsa */
	const dataTemp = {
		email: '',
		password: '',
	};

	const [data, setData] = useState({...dataTemp});

	const handleInput = e => {
		setData({
			...data,[e.target.name]:e.target.value
		})
	}

	const login = async e => {
		e.preventDefault();
		
		const res = await axios.post('http://127.0.0.1:8000/api/teacher/login', data) 
		if(res.data.status === 200){
			window.location.href = res.data.url;
		}
		if(res.data.status === 400){
			setErrors(res.data.errors);
		}
	}

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
						className='button'
						theme='red'
						onClick={() => changeActiveForm('regTeacher')}
					>
						Регистрация
					</Button>
				</div>

				{/* ----------------FORM---------------------- */}

				<form className='input-holder flex-c' /**Denitsa */ onSubmit={login}>
					<div className='group'>
						<label htmlFor='email'>Email:</label>
						<input
							name='email'
							type='email'
							placeholder='Въведете своя email'
							/**Denitsa */
							onChange={handleInput}
							value={data.email}
							/>
						<span className='danger'>{errors.email||""}</span>
					</div>
					<div className='group'>
						<label htmlFor='password'>Парола:</label>
						<input 
							name='password' 
							type='password' 
							placeholder='Въведете парола' 
							/**Denitsa */
							onChange={handleInput}
							value={data.password}
						/>
						<span className='danger'>{errors.password||""}</span>
						<span className='danger'>{errors.login||""}</span>
					</div>

					{/* Button */}

					<div className='group'>
						<Button className='button'>Вход</Button>
						<Button
							className='button'
							theme='darkBlue'
							onClick={() => changeActiveForm(null)}
							/**Denitsa */
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
