import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { teacherSelector } from '../../store/store';
import { setUiInfo } from '../../store/slices/teacherSlice';
import AddAssignmentModal from './AddAssignmentModal';
import ClassesHolderEl from './ClassesHolder.style';
import SingleClass from './SingleClass.js';
import StudentInfoModal from './StudentInfoModal';
import AssignmentsInfo from './AssignmentsInfoModal';
import CreateAssignmentModal from './CreateAssignmentModal';

export default function MyClasses() {
	// const [activeStudentId, setActiveStudentId] = useState(null);
	// const [showStudentInfo, setShowStudentInfo] = useState(false);
	// const [activeClassId, setActiveClassId] = useState(null);
	const dispatch = useDispatch();
	const {
		info,
		uiInfo: {
			showStudentInfo,
			showAssignmentInfo,
			activeClassId,
			activeStudentId,
		},
	} = useSelector(teacherSelector);
	const { classes, students } = info;

	return (
		<>
			<CreateAssignmentModal />
			{showStudentInfo && <StudentInfoModal></StudentInfoModal>}

			{showAssignmentInfo && <AssignmentsInfo></AssignmentsInfo>}

			<ClassesHolderEl className='classes-holder  container'>
				{classes.length === 0 ? (
					<h1>Здравейте, г-н/г-жо {info.fullName}, Вие нямате класове</h1>
				) : null}

				{classes.map(singleClass => {
					return <SingleClass key={singleClass.id} info={singleClass} />;
				})}
				<div className='new-class'>
					<i className='fas fa-user-plus icon'></i> Добавете клас
				</div>
			</ClassesHolderEl>
		</>
	);
}
