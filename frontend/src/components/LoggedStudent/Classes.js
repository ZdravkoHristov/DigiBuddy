import { useSelector, useDispatch } from 'react-redux';
import { loggedUiSelector, studentSelector } from '../../store/store';
import { setUiInfo } from '../../store/slices/loggedUiSlice';
import FoldingContainer from '../styles/FoldingContainer.style';
import SingleClass from './SingleClass.js';
import AssignmentsInfo from '../AssignmentsInfoModal';
import JoinClassModal from './JoinClassModal';

export default function Classes() {
	const dispatch = useDispatch();
	const { info } = useSelector(studentSelector);
	const { uiInfo } = useSelector(loggedUiSelector);
	const { classes } = info;

	return (
		<>
			{uiInfo.showJoinClass && <JoinClassModal />}
			<FoldingContainer className='classes-holder  container'>
				{uiInfo.showAssignmentInfo && <AssignmentsInfo></AssignmentsInfo>}
				{classes.length === 0 ? (
					<h1>
						Здравейте, {info.fullName}! Все още не сте част от никакви класове
					</h1>
				) : null}

				{classes.map(singleClass => {
					return <SingleClass key={singleClass.id} info={singleClass} />;
				})}
				<div
					className='new-class'
					onClick={() => {
						dispatch(setUiInfo({ showJoinClass: true }));
					}}
				>
					<i className='fas fa-user-plus icon'></i> Присъединете се към клас
				</div>
			</FoldingContainer>
		</>
	);
}
