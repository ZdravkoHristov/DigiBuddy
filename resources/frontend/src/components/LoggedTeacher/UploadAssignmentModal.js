import NewAssignmentModalEl from './NewAssignmentModal.style';
import Modal from '../Modal';
import NewAssignmentForm from './NewAssignmentForm';
import Button from '../Button';
import UploadIcon from './UploadIcon';

export default function UploadAssignmentModal() {
	return (
		<NewAssignmentModalEl>
			<Modal className='gradient-modal'>
				<div className='wave'></div>
				<div className='content'>
					<h2>Качване на задание: </h2>
					<p className='instruction'>
						Попълнете всички полета и създайте задание, като прикачите свой
						файл!
					</p>
					<div className='modal-grid'>
						<NewAssignmentForm />{' '}
						<div className='upload-holder'>
							<UploadIcon />
							<p>Изберете файлове</p>
						</div>
					</div>

					<div className='button-holder'>
						<Button>Готово</Button>
					</div>
				</div>
			</Modal>
		</NewAssignmentModalEl>
	);
}
