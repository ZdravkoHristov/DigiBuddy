import { useSelector } from 'react-redux';
import { teacherSelector } from '../../store/store';
export default function MyProfile() {
	const { info } = useSelector(teacherSelector);

	return (
		<>
			<h1 className='welcome-heading'>Г-н/Г-жа {info.fullName}</h1>
			<div className='data'>
				<p>Учител по {info.subject}</p>
				<p>Колекции: {info.collections?.length}</p>
				<p>Класове: {info.classes?.length}</p>
				<p>Ученици: {info.students?.length}</p>
				<p>Възложени задания: {info.activeAssignments?.length}</p>
			</div>
		</>
	);
}
