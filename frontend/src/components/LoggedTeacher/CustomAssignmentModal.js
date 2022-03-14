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
import { setTeacher } from '../../store/slices/teacherSlice';
export default function CustomAssignmentModal() {
	const dispatch = useDispatch();
	const { uiInfo } = useSelector(loggedUiSelector);
	const [assignmentInfo, setAssignmentInfo] = useState({});
	const [answers, setAnswers] = useState([]);
	const initialAnswers = useMemo(() => assignmentInfo.answers || [],[assignmentInfo]);
	const {id} = useParams();
	const [errors, setErrors] = useState({});

	let additionalData = {};

	const submitHandler = async (e) => {
		e.preventDefault();
		const type = uiInfo.customType;
		if(type === 'choose'){
			const filteredAnswers = answers.filter(({value}) => value !== '');
			additionalData = {...filteredAnswers, n_answers:filteredAnswers.length}
		}

		let res;

		if (uiInfo.reviewingCustomAssignment) {
			res = await axios.put(`http://127.0.0.1:8000/api/teacher/${id}/task/${assignmentInfo.id}/${type}/update`, {...assignmentInfo, ...additionalData}) 
			console.log(res);
		} else {
			res = await axios.post(`http://127.0.0.1:8000/api/teacher/${id}/tasks/${type}/insert`, {...assignmentInfo, ...additionalData}) 
		}
		
		
		setErrors({});
		
		if(res.data.status === 200){
			console.log(res.data.info);
		}
		if(res.data.status === 400){
			console.log(res.data.errors);
			setErrors(res.data.errors);
		}
	}

	useEffect(() => {
		const updatedInfo = uiInfo.reviewingCustomAssignment
			? uiInfo.customAssignment
			: {};

		setAssignmentInfo({...updatedInfo});
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
					<div className='button-holder'>
						<Button type='submit'>Готово</Button>
					</div>
				</form>

			</Modal>
		</CustomAssignmentModalEl>
	);
}