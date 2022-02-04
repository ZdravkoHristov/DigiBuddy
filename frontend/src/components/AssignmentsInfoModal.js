import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setUiInfo } from '../store/slices/loggedUiSlice';
import { loggedUiSelector, teacherSelector } from '../store/store';
import Modal from './Modal';
import AssignmentsInfoEl from './styles/AssignmentsInfoModal.style';

export default function AssignmentsInfoModal() {
	const dispatch = useDispatch();
	const { info } = useSelector(teacherSelector);
	const { uiInfo } = useSelector(loggedUiSelector);
	const { activeStudent, activeAssignment } = uiInfo;

	const prevAssignment = () => {
		const assignmentIndex = activeStudent.assignments.findIndex(
			({ id }) => id === activeAssignment.id
		);
		const newIndex =
			(assignmentIndex + activeStudent.assignments.length - 1) %
			activeStudent.assignments.length;

		const previousAssignment = activeStudent.assignments[newIndex];
		dispatch(setUiInfo({ activeAssignment: previousAssignment }));
	};

	const nextAssignment = () => {
		const assignmentIndex = activeStudent.assignments.findIndex(
			({ id }) => id === activeAssignment.id
		);
		const newIndex = (assignmentIndex + 1) % activeStudent.assignments.length;

		const nextAssignment = activeStudent.assignments[newIndex];
		dispatch(setUiInfo({ activeAssignment: nextAssignment }));
	};

	return (
		<AssignmentsInfoEl>
			<i
				className='fas fa-chevron-left prev-arrow icon'
				onClick={prevAssignment}
			></i>
			<i
				className='fas fa-chevron-right next-arrow icon'
				onClick={nextAssignment}
			></i>
			<Modal onClose={() => dispatch(setUiInfo({ showAssignmentInfo: false }))}>
				<h2>
					<span className='number'>{activeStudent.number}. </span>{' '}
					{activeStudent.fullName}
				</h2>
				<p className='assignment-name'>{activeAssignment.name}</p>

				<div className='files-field purple-scroll'>
					{activeAssignment.files.map(file => {
						return (
							<div className='file' key={file.id}>
								<p className='file-name'>{file.name}</p>
								<i className='fas fa-download icon'></i>
							</div>
						);
					})}
				</div>
			</Modal>
		</AssignmentsInfoEl>
	);
}
