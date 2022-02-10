import { useSelector, useDispatch } from 'react-redux';
import { loggedUiSelector, teacherSelector } from '../../store/store';
import FoldingContainer from '../styles/FoldingContainer.style';
import AssignmentType from './AssignmentType';
import CustomAssignmentModal from './CustomAssignmentModal';

export default function Assignments() {
	const { info } = useSelector(teacherSelector);
	const { uiInfo } = useSelector(loggedUiSelector);
	const { showStudentInfo, showAssignmentInfo } =
		useSelector(loggedUiSelector).uiInfo;

	const { classes } = info;

	const types = [
		{
			name: 'Задачи с 1 верен отговор',
			type: 'singleAnswer',
		},
	];

	return (
		<>
			{uiInfo.showCustomAssignment && <CustomAssignmentModal />}
			<FoldingContainer className=' container'>
				{types.map(type => {
					return <AssignmentType info={type} />;
				})}
			</FoldingContainer>
		</>
	);
}
