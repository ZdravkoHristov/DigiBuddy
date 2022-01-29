import Modal from '../Modal';
import AddAssignmentEl from './AssignmentModal.style';
import uploadBg from '../../assets/svgs/upload-assignment-bg.svg';
import createBg from '../../assets/svgs/create-assignment-bg.svg';

export default function AddAssignmentModal() {
	return (
		<AddAssignmentEl>
			<Modal>
				<h2>Добавяне на задание: </h2>
				<div className='grid'>
					<div className='upload'>
						<div className='img-wrapper'>
							<img src={uploadBg} alt='background' className='bg' />
							<i class='fas fa-file-upload icon'></i>
						</div>

						<div className='line'></div>
						<h4>Качване на задание</h4>
					</div>

					<div className='create'>
						<div className='img-wrapper'>
							<img src={createBg} alt='background' className='bg' />
							<i class='fas fa-file-import icon'></i>
						</div>

						<div className='line'></div>

						<h4>Добавяне на задание</h4>
					</div>
				</div>
			</Modal>
		</AddAssignmentEl>
	);
}
