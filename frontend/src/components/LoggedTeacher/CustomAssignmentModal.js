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
	const [assignmentInfo, setAssignmentInfo] = useState([]);

	const [answers, setAnswers] = useState([]);
	const initialAnswers = useMemo(
		() => assignmentInfo.answers || [],
		[assignmentInfo]
	);
	const { id } = useParams();
	const [errors, setErrors] = useState({});

	let additionalData = {};

	const submitHandler = async e => {
		e.preventDefault();
		console.log(uiInfo.customType);
		if (uiInfo.customType === 'choose') {
			const filteredAnswers = answers.filter(({ value }) => value !== '');
			additionalData = {
				...filteredAnswers,
				n_answers: filteredAnswers.length,
			};
		}

		const res = await axios.post(
			`http://127.0.0.1:8000/api/teacher/${id}/tasks/choose/insert`,
			{ ...assignmentInfo, ...additionalData }
		);

		console.log('res: ', res);

		if (res.data.status === 200) {
			console.log(res.data.info);
		}
		if (res.data.status === 400) {
			console.log(res.data.errors);
			setErrors({});
		}
	};

	useEffect(() => {
		const updatedInfo = uiInfo.reviewingCustomAssignment
			? uiInfo.customAssignment
			: {};

		setAssignmentInfo(updatedInfo);
	}, [uiInfo.reviewingCustomAssignment]);

	useEffect(() => {
		dispatch(setTeacher({ activeCustomAssignment: assignmentInfo }));
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
						<label htmlFor='name'>Въведете име на задачата: </label>
						<input
							type='text'
							id='name'
							value={assignmentInfo.name || ''}
							onChange={e => {
								setAssignmentInfo({ ...assignmentInfo, name: e.target.value });
							}}
						/>
						<span className='danger'>{errors.name || ''}</span>
						<label htmlFor='question'>Въведете въпрос: </label>
						<input
							type='text'
							id='question'
							value={assignmentInfo.question || ''}
							onChange={e => {
								setAssignmentInfo({
									...assignmentInfo,
									question: e.target.value,
								});
							}}
						/>
						<span className='danger'>{errors.question || ''}</span>
					</div>

					{uiInfo.customType === 'choose' && (
						<SelectAnswerType
							initialAnswers={initialAnswers}
							setAnswers={setAnswers}
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
