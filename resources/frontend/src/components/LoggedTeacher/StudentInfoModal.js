import { useSelector, useDispatch } from 'react-redux';
import { loggedUiSelector, teacherSelector } from '../../store/store';
import { setUiInfo } from '../../store/slices/loggedUiSlice';
import Modal from '../Modal';
import StudentInfoModalEl from './StudentInfoModal.style';

export default function StudentInfoModal({ children }) {
	const dispatch = useDispatch();
	const { info } = useSelector(teacherSelector);
	const { uiInfo } = useSelector(loggedUiSelector);
	const { students, classes } = info;
	const { activeStudent, activeClass } = uiInfo;

	const doneAssignments = activeStudent.assignments.filter(
		({ state }) => state === 'предадено'
	);

	const prevStudent = () => {
		const currentIndex = activeClass.students.findIndex(
			({ id }) => id === activeStudent.id
		);
		const newIndex =
			(currentIndex + activeClass.students.length - 1) %
			activeClass.students.length;

		const newStudent = activeClass.students[newIndex];
		dispatch(setUiInfo({ activeStudent: newStudent }));
	};

	const nextStudent = () => {
		const currentIndex = activeClass.students.findIndex(
			({ id }) => id === activeStudent.id
		);

		const newIndex = (currentIndex + 1) % activeClass.students.length;

		const newStudent = activeClass.students[newIndex];
		dispatch(setUiInfo({ activeStudent: newStudent }));
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
													activeAssignment: assignment,
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
