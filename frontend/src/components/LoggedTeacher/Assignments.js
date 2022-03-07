import { useSelector, useDispatch } from 'react-redux';
import { loggedUiSelector, teacherSelector } from '../../store/store';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import FoldingContainer from '../styles/FoldingContainer.style';
import AssignmentType from './AssignmentType';
import CustomAssignmentModal from './CustomAssignmentModal';

export default function Assignments() {
	const { info } = useSelector(teacherSelector);
	const { uiInfo } = useSelector(loggedUiSelector);
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [assignments, setAssignments] = useState({});
	const { showStudentInfo, showAssignmentInfo } =
		useSelector(loggedUiSelector).uiInfo;

	const assignmentTypes = {
		choose: 'Задачи с избираем отговор',
		open: 'Задачи с отворен отговор',
	};

	const fetchAssignments = () => {
		let currentInfo = {};
		const typesLength = Object.keys(assignmentTypes).length;
		Object.entries(assignmentTypes).forEach(async ([type, title], index) => {
			const res = await axios.get(
				`http://127.0.0.1:8000/api/teacher/${id}/tasks/${type}`
			);

			if (res.data.status === 200) {
				const newType = { title, items: res.data.tasks };
				currentInfo = { ...currentInfo, [type]: newType };
				console.log(res.data.tasks);
				if (index === typesLength - 1) {
					setLoading(false);
					setAssignments({ ...assignments, ...currentInfo });
				}
			}
		});
	};

	useEffect(() => {
		fetchAssignments();
	}, []);

	const assignmentElements = () => {
		return Object.entries(assignments).map(([type, info]) => {
			const { title, items } = info;

			return (
				<AssignmentType key={type} items={items} title={title} type={type} />
			);
		});
	};

	return (
		<>
			{uiInfo.showCustomAssignment && <CustomAssignmentModal />}
			<FoldingContainer className=' container'>
				{loading ? 'Зарежда...' : assignmentElements()}
			</FoldingContainer>
		</>
	);
}
