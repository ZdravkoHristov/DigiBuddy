import { useState, useEffect, useRef } from 'react';

import SingleClassEl from './SingleClass.style.js';

const MainPart = ({ info }) => {
	return (
		<main className='class-main'>
			<div className='students'>
				{info.students.map((student, index) => {
					return (
						<div className='student-row'>
							<div className='left-side'>
								<span className='order'>{index + 1}.</span>

								<span className='name'>{student.name}</span>
							</div>

							<div className='right-side'>
								предадени:{' '}
								<span className='assignments-info'>
									{student.doneAssignments}/{student.totalAssignments}
								</span>
								<div className='icons'>
									<i class='fas fa-eye'></i> <i class='fas fa-user-minus'></i>
								</div>
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

	const borderRadiusBottom = showMain ? 0 : 8;
	const radiusStyle = {
		borderBottomLeftRadius: borderRadiusBottom + 'px',
		borderBottomRightRadius: borderRadiusBottom + 'px',
	};

	const UpArrow = () => {
		return <i class='fas fa-chevron-up' onClick={() => setShowMain(false)}></i>;
	};

	const DownArrow = () => {
		return (
			<i class='fas fa-chevron-down' onClick={() => setShowMain(true)}></i>
		);
	};

	const EditIcon = () => {
		return <i class='fas fa-edit' onClick={() => setEditing(true)}></i>;
	};

	const SaveIcon = () => {
		return <i class='fas fa-save' onClick={() => setEditing(false)}></i>;
	};

	useEffect(() => {
		if (!editing) return;
		inputRef.current.focus();
	}, [editing]);

	return (
		<SingleClassEl>
			<header className='class-header' style={radiusStyle}>
				<input
					className='class-name'
					type='text'
					readOnly={!editing}
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
					ref={inputRef}
				/>
				<div className='right-side'>
					<span className='students-count'>
						<span className='number'>{info.students.length}</span>

						{info.students.length === 1 ? 'ученик' : 'ученици'}
					</span>
					<div className='icons'>
						{editing ? <SaveIcon /> : <EditIcon />}
						<i class='fas fa-trash-alt'></i>

						{showMain ? <UpArrow /> : <DownArrow />}
					</div>
				</div>
			</header>
			{showMain ? <MainPart info={info} /> : null}
		</SingleClassEl>
	);
}
