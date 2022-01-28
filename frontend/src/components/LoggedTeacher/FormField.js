import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { teacherSelector } from '../../store/store';
export default function FormField({ labelTxt, dataChunk, inputType = 'text' }) {
	const [editing, setEditing] = useState(false);
	const data = useSelector(teacherSelector).info[dataChunk];
	const [value, setValue] = useState(data);
	const inputRef = useRef();

	const handleIconClick = () => {
		inputRef.current.focus();
		setEditing(!editing);
	};

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
				readOnly={!editing}
			/>
			<span className='icon' onClick={handleIconClick}>
				{editing ? null : <i className='fas fa-edit'></i>}
			</span>
		</div>
	);
}
