import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { teacherSelector } from '../../store/store';
export default function FormField({ labelTxt, dataChunk, inputType = 'text' }) {
	const data = useSelector(teacherSelector).info[dataChunk];

	const [value, setValue] = useState(data);
	const inputRef = useRef();

	return (
		<div className='form-field'>
			<label htmlFor={dataChunk}>{labelTxt}</label>
			<input
				type={inputType}
				value={value}
				name={dataChunk}
				onChange={e => setValue(e.target.value)}
				size={data.length * 1.2}
				ref={inputRef}
			/>
		</div>
	);
}
