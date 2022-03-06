import FormField from '../SettingsFormField';
import { useState } from 'react';
import Button from '../Button';
import { teacherSelector } from '../../store/store';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router';



export default function Settings() {
	
	const teacherInfo = useSelector(teacherSelector).info;

	const {id} = useParams();

	const [password, setPassword] = useState("");

	const handleInput = e => {
		setPassword(e.target.value);
	}
	
	const update = async e => {
		e.preventDefault();
		const res = await axios.put(`https://digibuddy-backend.herokuapp.com/api/teacher/${id}/profile/settings`, {...teacherInfo, password}) 
		// console.log(teacherInfo);
		// console.log(password);
		if(res.data.status === 200){
			setPassword('');
		}
		if(res.data.status === 400){
			console.log(res.data.errors);
		}
	}


	return (
		<form className='data-form'  /**Denitsa */ onSubmit={update}>
			<FormField labelTxt='Име: ' dataChunk='name' />
			<FormField labelTxt='Фамилия: ' dataChunk='lname' />
			{/* <FormField labelTxt='Имейл: ' dataChunk='email' /> */}
			<FormField labelTxt='Учебно заведение: ' dataChunk='school' />
			<FormField labelTxt='Специализация: ' dataChunk='subject' />
			<FormField labelTxt='Град: ' dataChunk='town' />
			<FormField labelTxt='Община: ' dataChunk='comm' />
			<FormField labelTxt='Област: ' dataChunk='area' />
			<div className='form-field'>
				<label htmlFor='password'>Сегашна парола:</label>
							<input
								name='password'
								type='password'
								placeholder='Сегашна парола'
								onChange={handleInput}
								value={password}
							/>

			</div>
			{/* <FormField labelTxt='Потвърдете паролата: ' dataChunk='password_confirmation' /> */}
			<Button className='btn'>Запази</Button>
		</form>
	);
}
