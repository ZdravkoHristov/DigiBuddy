import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTeacher } from '../store/slices/teacherSlice';
import { studentSelector, teacherSelector } from '../store/store';
export default function FormField({
	labelTxt,
	dataChunk,
	inputType = 'text',
	role = 'teacher',
}) {
	const dispatch = useDispatch();
	const [editing, setEditing] = useState(false);
	const dataSelector = role === 'teacher' ? teacherSelector : studentSelector;
	const data = useSelector(dataSelector).info[dataChunk];
	const inputRef = useRef();

	const handleIconClick = () => {
		inputRef.current.focus();
		setEditing(!editing);
	};

	const changeHandler = e => {
		dispatch(setTeacher({[dataChunk]:e.target.value}))
	}

	return (
		<div className='form-field'>
			<label htmlFor={dataChunk}>{labelTxt}</label>
			<input
				type={inputType}
				value={data}
				name={dataChunk}
				onChange={changeHandler}
				size={data.length * 1.2}
				ref={inputRef}
				readOnly={!editing}
			/>
			<span className='icon' onClick={handleIconClick}>
				{editing ? null : <i className='fas fa-edit'></i>}
			</span>
			{/* <span className='danger'>{errors.data||""}</span> */}
		</div>
	);
}
