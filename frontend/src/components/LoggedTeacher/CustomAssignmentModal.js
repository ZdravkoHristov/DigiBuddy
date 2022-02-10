import CustomAssignmentModalEl from './CustomAssignmentModal.style';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loggedUiSelector } from '../../store/store';
import { setUiInfo } from '../../store/slices/loggedUiSlice';
import Modal from '../Modal';
import Button from '../Button';
import SelectAnswerType from './SelectAnswerType';
export default function CustomAssignmentModal() {
	const dispatch = useDispatch();
	const { uiInfo } = useSelector(loggedUiSelector);
	const [assignmentInfo, setAssignmentInfo] = useState([]);

	useEffect(() => {
		const updatedInfo = uiInfo.reviewingCustomAssignment
			? uiInfo.customAssignment
			: [];

		setAssignmentInfo(updatedInfo);
	}, [uiInfo.reviewingCustomAssignment]);

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
				<form>
					<div className='generic-data'>
						<label htmlFor='name'>Въведете име на задачата: </label>
						<input type='text' id='name' />
						<label htmlFor='question'>Въведете въпрос: </label>
						<input type='text' id='question' />
					</div>

					{uiInfo.customType === 'selectAnswer' && (
						<SelectAnswerType initialAnswers={assignmentInfo.answers || []} />
					)}
				</form>

				<div className='button-holder'>
					<Button>Готово</Button>
				</div>
			</Modal>
		</CustomAssignmentModalEl>
	);
}
