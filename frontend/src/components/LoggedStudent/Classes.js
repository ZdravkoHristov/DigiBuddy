import { useSelector, useDispatch } from 'react-redux';
import { loggedUiSelector, studentSelector } from '../../store/store';
import ClassesHolderEl from '../styles/ClassesHolder.style';
import SingleClass from './SingleClass.js';
import AssignmentsInfo from '../AssignmentsInfoModal';

export default function Classes() {
	const { info } = useSelector(studentSelector);
	const { uiInfo } = useSelector(loggedUiSelector);
	const { classes } = info;

	return (
		<>
			<ClassesHolderEl className='classes-holder  container'>
				{uiInfo.showAssignmentInfo && <AssignmentsInfo></AssignmentsInfo>}
				{classes.length === 0 ? (
					<h1>
						Здравейте, {info.fullName}! Все още не сте част от никакви класове
					</h1>
				) : null}

				{classes.map(singleClass => {
					return <SingleClass key={singleClass.id} info={singleClass} />;
				})}
				<div className='new-class'>
					<i className='fas fa-user-plus icon'></i> Присъединете се към клас
				</div>
			</ClassesHolderEl>
		</>
	);
}
