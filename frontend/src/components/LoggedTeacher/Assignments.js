import { useSelector, useDispatch } from 'react-redux';
import { loggedUiSelector, teacherSelector } from '../../store/store';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import FoldingContainer from '../styles/FoldingContainer.style';
import AssignmentType from './AssignmentType';
import CustomAssignmentModal from './CustomAssignmentModal';
import { setTeacher } from '../../store/slices/teacherSlice';

export default function Assignments() {
	const dispatch = useDispatch();
	const { info, assignments } = useSelector(teacherSelector);
	const { uiInfo } = useSelector(loggedUiSelector);
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	// const [assignments, setAssignments] = useState({});
	const { showStudentInfo, showAssignmentInfo, assignmentTypes } =
		useSelector(loggedUiSelector).uiInfo;

	// console.log(assignments)

	// const fetchAssignments = () => {
	// 	let currentInfo = {};
	// 	const typesLength = Object.keys(assignmentTypes).length;
	// 	Object.entries(assignmentTypes).forEach(async ([type, title], index) => {
	// 		const res = await axios.get(
	// 			`${process.env.REACT_APP_BACKEND}/api/teacher/${id}/tasks/${type}`
	// 		);

	// 		if (res.data.status === 200) {
	// 			const newType = { title, items: res.data.tasks };
	// 			currentInfo = { ...currentInfo, [type]: newType };

	// 			if (index === typesLength - 1) {
	// 				const newAssignments = { ...assignments, ...currentInfo }
	// 				setLoading(false);
					
	// 				setAssignments(newAssignments);
	// 				dispatch(setTeacher({assignments: newAssignments}))
	// 			}
	// 		}
	// 	});
	// };

	// useEffect(() => {
	// 	fetchAssignments();
	// }, []);

	useEffect(() => {
		console.log('assigmnets: ', assignments)
		setLoading(Boolean(assignments));
	}, assignments)

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
