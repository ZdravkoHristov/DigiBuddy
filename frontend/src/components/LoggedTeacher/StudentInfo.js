import { useSelector } from 'react-redux';
import { teacherSelector } from '../../store/store';
import Modal from '../Modal';
import StudentInfoEl from './StudentInfo.style';

export default function StudentInfo({ children, id, activateStudentId }) {
	const { students } = useSelector(teacherSelector).info;

	const activeStudent = students.find(student => student.id === id);
	const doneAssignments = activeStudent.assignments.filter(
		({ state }) => state === 'предадено'
	);

	return (
		<StudentInfoEl>
			{children}
			<Modal onClose={() => activateStudentId(null)}>
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
									<i className='fas fa-eye icon'></i>
								) : (
									<div></div>
								)}
							</div>
						);
					})}
				</main>
			</Modal>
		</StudentInfoEl>
	);
}
