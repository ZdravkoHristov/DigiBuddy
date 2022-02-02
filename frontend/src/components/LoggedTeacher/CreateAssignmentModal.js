import NewAssignmentModalEl from './NewAssignmentModal.style';
import Modal from '../Modal';
import NewAssignmentForm from './NewAssignmentForm';
import Button from '../Button';

export default function CreateAssignmentModal() {
	return (
		<NewAssignmentModalEl>
			<Modal className='gradient-modal' style={{ width: '70%' }}>
				<div className='wave'></div>
				<div className='content'>
					<h2>Създаване на задание: </h2>
					<p className='instruction'>
						Попълнете всички полета и създайте задание с нашите инструменти!
					</p>
					<NewAssignmentForm />{' '}
					<div className='button-holder'>
						<Button>Към инструменти</Button>
					</div>
				</div>
			</Modal>
		</NewAssignmentModalEl>
	);
}
