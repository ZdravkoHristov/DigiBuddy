import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { teacherSelector } from '../../store/store';
import { setUiInfo } from '../../store/slices/loggedUiSlice';
export default function AssignmentType({ items, title, type }) {
	const dispatch = useDispatch();
	const [showMain, setShowMain] = useState(true);

	const { assignments } = useSelector(teacherSelector).info;
	const { id } = useParams();
	const borderRadiusBottom = showMain ? 0 : 8;
	const style = {
		borderBottomLeftRadius: borderRadiusBottom + 'px',
		borderBottomRightRadius: borderRadiusBottom + 'px',
		marginBottom: showMain ? '0' : '10px',
	};

	const deleteTask = async taskId => {
		const res = await axios.delete(
			`${process.env.REACT_APP_BACKEND}/api/teacher/${id}/task/${taskId}/${type}/delete`
		);
	};

	const UpArrow = () => {
		return (
			<i className='fas fa-chevron-up' onClick={() => setShowMain(false)}></i>
		);
	};

	const DownArrow = () => {
		return (
			<i className='fas fa-chevron-down' onClick={() => setShowMain(true)}></i>
		);
	};

	const MainPart = ({ assignments, type }) => {
		return (
			<main className='main'>
				<div className='content purple-scrollbar'>
					{assignments.map((assignment, index) => {
						return (
							<div className='row' key={assignment.id}>
								<div className='left-side'>
									<span className='order'>{index + 1}.</span>

									<span className='name'>{assignment.name}</span>
								</div>

								<div className='right-side'>
									<div className='icons' style={{ marginRight: '20px' }}>
										<i
											className='fas fa-eye'
											onClick={() => {
												dispatch(
													setUiInfo({
														customAssignment: assignment,
														showCustomAssignment: true,
														reviewingCustomAssignment: true,
														customType: type,
													})
												);
											}}
										></i>{' '}
										<i
											className='fas fa-trash'
											onClick={() => deleteTask(assignment.id)}
										></i>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</main>
		);
	};

	return (
		<div className='assignment-type'>
			<header className='header' style={style}>
				<p className='main-text'>{title}</p>
				<div className='right-side'>
					<span className='count'>
						<span className='number'>{items.length}</span>

						{items.length === 1 ? 'задача' : 'задачи'}
					</span>
					<div className='icons'>
						<i
							className='fas fa-plus'
							onClick={() => {
								dispatch(
									setUiInfo({
										showCustomAssignment: true,
										customType: type,
										reviewingCustomAssignment: false,
									})
								);
							}}
						></i>
						{showMain ? <UpArrow /> : <DownArrow />}
					</div>
				</div>
			</header>

			{showMain && <MainPart assignments={items} type={type} />}
		</div>
	);
}
