import { useSelector, useDispatch } from 'react-redux';
import { teacherSelector } from '../../store/store';
import ClassesHolderEl from './ClassesHolder.style';
import SingleClass from './SingleClass.js';
import StudentInfoModal from './StudentInfoModal';
import AssignmentsInfo from './AssignmentsInfoModal';
import UploadAssignmentModal from './UploadAssignmentModal';
import AddAssignmentModal from './AddAssignmentModal';
import ToolsModal from './ToolsModal';

export default function MyClasses() {
	const {
		info,
		uiInfo: { showStudentInfo, showAssignmentInfo },
	} = useSelector(teacherSelector);
	const { classes } = info;

	return (
		<>
			<ToolsModal />
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
