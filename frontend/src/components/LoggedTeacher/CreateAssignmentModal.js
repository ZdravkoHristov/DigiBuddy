import NewAssignmentModalEl from './NewAssignmentModal.style';
import Modal from '../Modal';
import NewAssignmentForm from './NewAssignmentForm';

export default function CreateAssignmentModal() {
	return (
		<NewAssignmentModalEl>
			<Modal>
				<div className='content'>
					<h2>Създаване на задание: </h2>
					<p className='instruction'>
						Попълнете всички полета и създайте задание с нашите инструменти!
					</p>
					<NewAssignmentForm />{' '}
				</div>
			</Modal>
		</NewAssignmentModalEl>
	);
}
