import Modal from '../Modal';
import AddAssignmentEl from './AssignmentModal.style';
import UploadIcon from './UploadIcon';

import createBg from '../../assets/svgs/create-assignment-bg.svg';

export default function AddAssignmentModal() {
	return (
		<AddAssignmentEl>
			<Modal className='gradient-modal'>
				<div className='wave'></div>
				<h2>Добавяне на задание: </h2>
				<div className='grid'>
					<div className='upload'>
						<UploadIcon />

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
