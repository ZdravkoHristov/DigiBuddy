import { useSelector, useDispatch } from 'react-redux';
import { loggedUiSelector, teacherSelector } from '../../store/store';
import FoldingContainer from '../styles/FoldingContainer.style';
import SingleClass from './SingleClass.js';
import StudentInfoModal from './StudentInfoModal';
import AssignmentsInfo from '../AssignmentsInfoModal';
import UploadAssignmentModal from './UploadAssignmentModal';
import AddAssignmentModal from './AddAssignmentModal';
import ToolsModal from './ToolsModal';

export default function MyClasses() {
	const { info } = useSelector(teacherSelector);
	const { showStudentInfo, showAssignmentInfo } =
		useSelector(loggedUiSelector).uiInfo;

	const { classes } = info;

	return (
		<>
			{showStudentInfo && <StudentInfoModal></StudentInfoModal>}

			{showAssignmentInfo && <AssignmentsInfo></AssignmentsInfo>}

			<FoldingContainer className='classes-holder  container'>
				{!classes.length && (
					<h1>Здравейте, г-н/г-жо {info.fullName}, Вие нямате класове</h1>
				)}

				{classes.map(singleClass => {
					return <SingleClass key={singleClass.id} info={singleClass} />;
				})}
				<div className='new-class'>
					<i className='fas fa-user-plus icon'></i> Добавете клас
				</div>
			</FoldingContainer>
		</>
	);
}
