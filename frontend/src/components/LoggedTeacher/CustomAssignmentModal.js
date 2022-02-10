import CustomAssignmentModalEl from './CustomAssignmentModal.style';
import { useSelector } from 'react-redux';
import { loggedUiSelector } from '../../store/store';
import Modal from '../Modal';
import Button from '../Button';
import SingleAnswerType from './SelectAnswerType';
export default function CustomAssignmentModal() {
	const { uiInfo } = useSelector(loggedUiSelector);
	return (
		<CustomAssignmentModalEl>
			<Modal>
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
