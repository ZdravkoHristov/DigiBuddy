import FormField from '../SettingsFormField';
import { useState } from 'react';
import Button from '../Button';
import { studentSelector } from '../../store/store';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router';

export default function Settings() {

	const studentInfo = useSelector(studentSelector).info;

	const {id} = useParams();

	const [password, setPassword] = useState("");

	const handleInput = e => {
		setPassword(e.target.value);
	}
	
	const [errors, setErrors] = useState({});

	const update = async e => {
		e.preventDefault();
		const res = await axios.put(`http://127.0.0.1:8000/api/student/${id}/profile/settings`, {...studentInfo, password}) 
		if(res.data.status === 200){
			setPassword('');
		}
		if(res.data.status === 400){
			console.log(res.data.errors);
			setErrors(res.data.errors);
		}
	}

	return (
		<form className='data-form' onSubmit={update}>
			<FormField role='student' labelTxt='Име: ' dataChunk='name' />
			<span className='danger'>{errors.name||""}</span>
			<FormField role='student' labelTxt='Фамилия: ' dataChunk='lname' />
			<span className='danger'>{errors.lname||""}</span>
			<FormField role='student' labelTxt='Учебно заведение: ' dataChunk='school' />
			<span className='danger'>{errors.school||""}</span>
			<FormField role='student' labelTxt='Клас: ' dataChunk='class' />
			<span className='danger'>{errors.subject||""}</span>
			<FormField role='student' labelTxt='Град: ' dataChunk='town' />
			<span className='danger'>{errors.town||""}</span>
			<FormField role='student' labelTxt='Община: ' dataChunk='comm' />
			<span className='danger'>{errors.comm||""}</span>
			<FormField role='student' labelTxt='Област: ' dataChunk='area' />
			<span className='danger'>{errors.area||""}</span>
			<div className='form-field'>
				<label htmlFor='password'>Сегашна парола:</label>
							<input
								name='password'
								type='password'
								placeholder='Сегашна парола'
								onChange={handleInput}
								value={password}
							/>
				<span className='danger'>{errors.password||""}</span>

			</div>
			<Button className='btn'>Запази</Button>
		</form>
	);
}
