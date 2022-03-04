import { useDispatch } from 'react-redux';
import { setUiInfo } from '../../store/slices/loggedUiSlice';
import Button from '../Button';
import Modal from '../Modal';
import JoinClassModalEl from './JoinClassModal.style';

export default function JoinClassModal() {
	const dispatch = useDispatch();

	return (
		<Modal
			onClose={() => {
				dispatch(
					setUiInfo({
						showJoinClass: false,
					})
				);
			}}
		>
			<JoinClassModalEl>
				<h2>
					Въведете кода на класната стая, към която искате да се присъедините
				</h2>

				<input
					type='text'
					placeholder='Въведете своя код, придържайки се към малките и големи букви'
				/>

				<div className='button-holder'>
					<Button>Готово</Button>
				</div>
			</JoinClassModalEl>
		</Modal>
	);
}
