import CustomAssignmentModalEl from './CustomAssignmentModal.style';
import { useDispatch, useSelector } from 'react-redux';
import { loggedUiSelector } from '../../store/store';
import { setUiInfo } from '../../store/slices/loggedUiSlice';
import Modal from '../Modal';
import Button from '../Button';
import SingleAnswerType from './SelectAnswerType';
export default function CustomAssignmentModal() {
	const dispatch = useDispatch();
	const { uiInfo } = useSelector(loggedUiSelector);
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

					{uiInfo.customType === 'singleAnswer' && (
						<SingleAnswerType type='singleAnswer' />
					)}
					{uiInfo.customType === 'multipleChoice' && (
						<SingleAnswerType type='multipleChoice' />
					)}
				</form>

				<div className='button-holder'>
					<Button>Готово</Button>
				</div>
			</Modal>
		</CustomAssignmentModalEl>
	);
}
