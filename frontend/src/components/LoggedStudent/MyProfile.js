import { useSelector } from 'react-redux';
import { studentSelector } from '../../store/store';
export default function Profile() {
	const { info } = useSelector(studentSelector);

	let allAssignmentsCount = 0;
	let doneAssignmentsCount = 0;

	info.classes.forEach(({ assignments }) => {
		allAssignmentsCount += assignments.length;
		doneAssignmentsCount += assignments.filter(
			({ state }) => state === 'предадено'
		).length;
	});

	return (
		<>
			<h1 className='welcome-heading'>{info.fullName}</h1>
			<div className='data'>
				<p>Ученик в {info.grade}</p>
				<p>Класове: {info.classes?.length}</p>
				<p>Предадени задания: {doneAssignmentsCount}</p>
				<p>Възложени задания: {allAssignmentsCount}</p>
			</div>
		</>
	);
}
