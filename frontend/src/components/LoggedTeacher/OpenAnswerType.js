import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { teacherSelector } from '../../store/store';
import uuid from 'react-uuid';
export default function OpenAnswerType({ initialAnswer = '' }) {
	const [answer, setAnswer] = useState(initialAnswer);

	return (
		<>
			<h3>Oтговор: </h3>

			<div className='answer'>
				<input
					name='answer'
					type='text'
					value={answer}
					onChange={e => setAnswer(e.target.value)}
				/>
			</div>
		</>
	);
}
