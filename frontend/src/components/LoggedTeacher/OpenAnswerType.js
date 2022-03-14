import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { teacherSelector } from '../../store/store';
import uuid from 'react-uuid';
export default function OpenAnswerType({ answer = '5', setAnswer, errors }) {
	//const [answer, setAnswer] = useState(initialAnswer);

	return (
		<>
			<h3>Oтговор: </h3>

			<div className='answer'>
				<input
					className='rounded-input'
					name='answer'
					type='text'
					value={answer}
					onChange={e => setAnswer(e.target.value)}
					placeholder='Въведете отговор'
				/>
				<span className='danger'>{errors.answer || ''}</span>
			</div>
		</>
	);
}
