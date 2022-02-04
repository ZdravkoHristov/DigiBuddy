import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { studentSelector } from '../../store/store';
import { setUiInfo } from '../../store/slices/loggedUiSlice';

const MainPart = ({ info }) => {
	const dispatch = useDispatch();
	const { info: studentInfo } = useSelector(studentSelector);

	const DoneIcons = ({ assignment }) => {
		return (
			<>
				<i
					className='fas fa-eye'
					onClick={() => {
						dispatch(
							setUiInfo({
								showAssignmentInfo: true,
								activeAssignment: assignment,

								activeStudent: studentInfo,
							})
						);
					}}
				></i>

				<i className='far fa-edit'></i>
			</>
		);
	};

	const NotDoneIcons = () => {
		return (
			<>
				<i className='fas fa-file-import'></i>
				<i className='fas fa-check-circle'></i>
			</>
		);
	};

	return (
		<main className='class-main'>
			<div className='students purple-scrollbar'>
				{info.assignments.map((assignment, index) => {
					return (
						<div className='student-row' key={assignment.id}>
							<div className='left-side'>
								<span className='order'>{index + 1}.</span>

								<span className='name'>{assignment.name}</span>
							</div>

							<div className='deadline'>
								{assignment.state === 'възложено' &&
									'срок: ' + assignment.deadline}
							</div>

							<div className='state'>{assignment.state}</div>

							<div className='icons'>
								{assignment.state === 'предадено' ? (
									<DoneIcons assignment={assignment} />
								) : (
									<NotDoneIcons />
								)}
							</div>
						</div>
					);
				})}
			</div>
		</main>
	);
};

export default function SingleClass({ info }) {
	const [editing, setEditing] = useState(false);
	const [showMain, setShowMain] = useState(true);
	const [inputValue, setInputValue] = useState(info.name);
	const inputRef = useRef();

	let allAssignmentsCount = 0;
	let doneAssignmentsCount = 0;

	info.assignments.forEach(assignment => {
		allAssignmentsCount++;
		assignment.state === 'предадено' && doneAssignmentsCount++;
	});

	const borderRadiusBottom = showMain ? 0 : 8;
	const style = {
		borderBottomLeftRadius: borderRadiusBottom + 'px',
		borderBottomRightRadius: borderRadiusBottom + 'px',
		marginBottom: showMain ? '0' : '10px',
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

	useEffect(() => {
		if (!editing) return;
		inputRef.current.focus();
	}, [editing]);

	return (
		<div className='single-class'>
			<header className='class-header' style={style}>
				<div style={{ flex: 1 }}>
					<input
						className='class-name'
						type='text'
						readOnly={!editing}
						value={inputValue}
						onChange={e => setInputValue(e.target.value)}
						ref={inputRef}
						style={{ width: '100%' }}
					/>
					<div className='more-info'>
						<span className='teacher'>Преподавател: {info.teacher}</span>
						<span className='done-assignments'>
							<span className='numbers'>
								{doneAssignmentsCount}/{allAssignmentsCount}
							</span>{' '}
							задания
						</span>
					</div>
				</div>

				<div className='right-side'>
					<div className='icons'>{showMain ? <UpArrow /> : <DownArrow />}</div>
				</div>
			</header>
			{showMain ? <MainPart info={info} /> : null}
		</div>
	);
}
