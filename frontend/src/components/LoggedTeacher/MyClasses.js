import { useState } from 'react';
import { useSelector } from 'react-redux';
import { teacherSelector } from '../../store/store';
import AddAssignmentModal from './AddAssignmentModal';
import ClassesHolderEl from './ClassesHolder.style';
import SingleClass from './SingleClass.js';
import StudentInfo from './StudentInfo';

export default function MyClasses() {
	const [activeStudentId, setActiveStudentId] = useState(null);
	const [activeClassId, setActiveClassId] = useState(null);
	const { info } = useSelector(teacherSelector);
	const { classes, students } = info;

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
		console.log(newIndex);
		const previousStudent = currentClass.students[newIndex];
		setActiveStudentId(previousStudent.id);
	};

	const nextStudent = () => {
		const [currentClass, currentIndex] = getCurrentStudentInfo();
		const newIndex = (currentIndex + 1) % currentClass.students.length;

		const previousStudent = currentClass.students[newIndex];
		setActiveStudentId(previousStudent.id);
	};

	return (
		<>
			<AddAssignmentModal />
			{activeStudentId === null ? null : (
				<>
					<StudentInfo
						id={activeStudentId}
						activateStudentId={setActiveStudentId}
					>
						<i
							className='fas fa-chevron-left prev-arrow icon'
							onClick={prevStudent}
						></i>
						<i
							className='fas fa-chevron-right next-arrow icon'
							onClick={nextStudent}
						></i>
					</StudentInfo>
				</>
			)}
			<ClassesHolderEl className='classes-holder  container'>
				{classes.length === 0 ? (
					<h1>Здравейте, г-н/г-жо {info.fullName}, Вие нямате класове</h1>
				) : null}

				{classes.map(singleClass => {
					return (
						<SingleClass
							key={singleClass.id}
							info={singleClass}
							activateStudentId={setActiveStudentId}
							activateClassId={setActiveClassId}
						/>
					);
				})}
				<div className='new-class'>
					<i className='fas fa-user-plus'></i> Добавете клас
				</div>
			</ClassesHolderEl>
		</>
	);
}
