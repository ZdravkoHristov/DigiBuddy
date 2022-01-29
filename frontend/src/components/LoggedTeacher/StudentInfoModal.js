import { useSelector, useDispatch } from 'react-redux';
import { teacherSelector } from '../../store/store';
import { setUiInfo } from '../../store/slices/teacherSlice';
import Modal from '../Modal';
import StudentInfoModalEl from './StudentInfoModal.style';

export default function StudentInfoModal({ children }) {
	const dispatch = useDispatch();
	const { info, uiInfo } = useSelector(teacherSelector);
	const { students, classes } = info;
	const { activeStudentId, activeClassId } = uiInfo;

	const activeStudent = students.find(
		student => student.id === activeStudentId
	);
	const doneAssignments = activeStudent.assignments.filter(
		({ state }) => state === 'предадено'
	);

	const getCurrentStudentInfo = () => {
		const studentClass = classes.find(({ id }) => id === activeClassId);

		const studentIndex = studentClass.students.findIndex(
			({ id }) => id === activeStudentId
		);

		return [studentClass, studentIndex];
	};

	const prevStudent = () => {
		const [currentClass, currentIndex] = getCurrentStudentInfo();
		const newIndex =
			(currentIndex + currentClass.students.length - 1) %
			currentClass.students.length;

		const previousStudent = currentClass.students[newIndex];
		dispatch(setUiInfo({ activeStudentId: previousStudent.id }));
	};

	const nextStudent = () => {
		const [currentClass, currentIndex] = getCurrentStudentInfo();
		const newIndex = (currentIndex + 1) % currentClass.students.length;

		const previousStudent = currentClass.students[newIndex];
		dispatch(setUiInfo({ activeStudentId: previousStudent.id }));
	};

	return (
		<StudentInfoModalEl>
			<i
				className='fas fa-chevron-left prev-arrow icon'
				onClick={prevStudent}
			></i>
			<i
				className='fas fa-chevron-right next-arrow icon'
				onClick={nextStudent}
			></i>
			<Modal
				onClose={() =>
					dispatch(
						setUiInfo({
							showStudentInfo: false,
						})
					)
				}
			>
				<header>
					<h2>
						<span className='number'>{activeStudent.number}.</span>{' '}
						{activeStudent.fullName}
					</h2>

					<span className='done'>
						предадени:
						<span className='numbers'>
							{doneAssignments.length}/{activeStudent.assignments.length}
						</span>
					</span>
				</header>

				<main className='assignments-field purple-scrollbar'>
					{activeStudent.assignments.map(assignment => {
						return (
							<div className='assignment-row' key={assignment.id}>
								{assignment.name}

								<span className='state'>{assignment.state}</span>

								{assignment.state === 'предадено' ? (
									<i
										className='fas fa-eye icon'
										onClick={() =>
											dispatch(
												setUiInfo({
													showStudentInfo: false,
													showAssignmentInfo: true,
													activeAssignmentId: assignment.id,
												})
											)
										}
									></i>
								) : (
									<div></div>
								)}
							</div>
						);
					})}
				</main>
			</Modal>
		</StudentInfoModalEl>
	);
}
