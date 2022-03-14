import CustomAssignmentModalEl from './CustomAssignmentModal.style';
import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { loggedUiSelector } from '../../store/store';
import { setUiInfo } from '../../store/slices/loggedUiSlice';
import axios from 'axios';
import Modal from '../Modal';
import Button from '../Button';
import SelectAnswerType from './SelectAnswerType';
import OpenAnswerType from './OpenAnswerType';
import { setTeacher } from '../../store/slices/teacherSlice';
export default function CustomAssignmentModal() {
	const dispatch = useDispatch();
	const { uiInfo } = useSelector(loggedUiSelector);
	const [assignmentInfo, setAssignmentInfo] = useState({});
	const [answers, setAnswers] = useState([]);
	const initialAnswers = useMemo(() => assignmentInfo.answers || [],[assignmentInfo]);
	const {id} = useParams();
	const [errors, setErrors] = useState({});
	const [openAnswer, setOpenAnswer] = useState('');

	let additionalData = {};

	const submitHandler = async (e) => {
		e.preventDefault();
		const type = uiInfo.customType;
		let res;

		if(type === 'choose'){
			const filteredAnswers = answers.filter(({value}) => value !== '');
			additionalData = {...filteredAnswers, n_answers:filteredAnswers.length}

			if (uiInfo.reviewingCustomAssignment) {
				res = await axios.put(`${process.env.REACT_APP_BACKEND}/api/teacher/${id}/task/${assignmentInfo.id}/${type}/update`, {...assignmentInfo, ...additionalData}) 
			} else {
				res = await axios.post(`${process.env.REACT_APP_BACKEND}/api/teacher/${id}/tasks/${type}/insert`, {...assignmentInfo, ...additionalData}) 
			}
		} else if (type === 'open') {
			if (uiInfo.reviewingCustomAssignment) {
				res = await axios.put(`${process.env.REACT_APP_BACKEND}/api/teacher/${id}/task/${assignmentInfo.id}/${type}/update`, {...assignmentInfo, answer: openAnswer}) 
			} else {
				res = await axios.post(`${process.env.REACT_APP_BACKEND}/api/teacher/${id}/tasks/${type}/insert`, {...assignmentInfo, answer: openAnswer});
			}
		}

		setErrors({});
		
		if(res.data.status === 200){
			console.log(res.data.info);
		}
		if(res.data.status === 400){
			setErrors(res.data.errors);
		}
	}

	useEffect(() => {
		const updatedInfo = uiInfo.reviewingCustomAssignment
			? uiInfo.customAssignment
			: {};

		setAssignmentInfo({...updatedInfo});
		setOpenAnswer(updatedInfo.answer || '')
	}, [uiInfo.reviewingCustomAssignment]);

	useEffect(() => {
		dispatch(setTeacher({activeCustomAssignment:assignmentInfo}))
	}, [assignmentInfo]);

	return (
		<CustomAssignmentModalEl>
			<Modal
				onClose={() => {
					dispatch(
						setUiInfo({
							showCustomAssignment: false,
						})
					);
				}}
			>
				<form onSubmit={submitHandler}>
					<div className='generic-data'>
						<label htmlFor='name'>Име: </label>
						<input
						className='rounded-input'
							type='text'
							id='name'
							value={assignmentInfo.name || ''}
							placeholder = 'Въведете име на задачата'
							onChange={e => {
								setAssignmentInfo({ ...assignmentInfo, name: e.target.value });
							}}
							/>
						<span className='danger'>{errors.name||""}</span>
						<label htmlFor='question'>Въпрос: </label>
						<input
						className='rounded-input'
							type='text'
							id='question'
							value={assignmentInfo.question || ''}
							placeholder = 'Въведете въпрос'
							onChange={e => {
								setAssignmentInfo({
									...assignmentInfo,
									question: e.target.value,
								});
							}}
						/>
						<span className='danger'>{errors.question||""}</span>
					</div>

					{uiInfo.customType === 'choose' && (
						<SelectAnswerType initialAnswers={initialAnswers} setAnswers={setAnswers} />
					)}

					{uiInfo.customType === 'open' && (
						<OpenAnswerType
							answer={openAnswer}
							setAnswer={setOpenAnswer}
							errors={errors}
						/>
					)}

					<div className='button-holder'>
						<Button type='submit'>Готово</Button>
					</div>
				</form>

			</Modal>
		</CustomAssignmentModalEl>
	);
}