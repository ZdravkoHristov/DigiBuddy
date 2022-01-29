import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setUiInfo } from '../../store/slices/teacherSlice';
import { teacherSelector } from '../../store/store';
import Modal from '../Modal';
import AssignmentsInfoEl from './AssignmentsInfoModal.style';

export default function AssignmentsInfoModal({ children }) {
	const dispatch = useDispatch();
	const { info, uiInfo } = useSelector(teacherSelector);
	const { activeClassId, activeStudentId, activeAssignmentId } = uiInfo;
	const activeClass = info.classes.find(({ id }) => id === activeClassId);
	const activeStudent = activeClass.students.find(
		({ id }) => id === activeStudentId
	);

	const activeAssignment = activeStudent.assignments.find(
		({ id }) => id === activeAssignmentId
	);

	const prevAssignment = () => {
		const assignmentIndex = activeStudent.assignments.findIndex(
			({ id }) => id === activeAssignmentId
		);
		const newIndex =
			(assignmentIndex + activeStudent.assignments.length - 1) %
			activeStudent.assignments.length;

		const previousAssignment = activeStudent.assignments[newIndex];
		dispatch(setUiInfo({ activeAssignmentId: previousAssignment.id }));
	};

	const nextAssignment = () => {
		const assignmentIndex = activeStudent.assignments.findIndex(
			({ id }) => id === activeAssignmentId
		);
		const newIndex = (assignmentIndex + 1) % activeStudent.assignments.length;

		const nextAssignment = activeStudent.assignments[newIndex];
		dispatch(setUiInfo({ activeAssignmentId: nextAssignment.id }));
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
