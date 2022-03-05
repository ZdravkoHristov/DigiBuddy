import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setUiInfo } from '../../store/slices/loggedUiSlice';

const MainPart = ({ info }) => {
	const dispatch = useDispatch();
	return (
		<main className='main'>
			<div className='content purple-scrollbar'>
				{info.students.map(student => {
					return (
						<div className='row' key={student.id}>
							<div className='left-side'>
								<span className='order'>{student.number}.</span>

								<span className='name'>{student.fullName}</span>
							</div>

							<div className='right-side'>
								предадени:{' '}
								<span className='assignments-info'>
									{student.doneAssignments}/{student.totalAssignments}
								</span>
								<div className='icons'>
									<i
										className='fas fa-eye'
										onClick={() => {
											dispatch(
												setUiInfo({
													activeClass: info,
													activeStudent: student,
													showStudentInfo: true,
												})
											);
										}}
									></i>{' '}
									<i className='fas fa-user-minus'></i>
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

	const EditIcon = () => {
		return <i className='fas fa-edit' onClick={() => setEditing(true)}></i>;
	};

	const SaveIcon = () => {
		return <i className='fas fa-save' onClick={() => setEditing(false)}></i>;
	};

	useEffect(() => {
		if (!editing) return;
		inputRef.current.focus();
	}, [editing]);

	return (
		<div className='single-class'>
			<header className='header' style={style}>
				<input
					className='class-name'
					type='text'
					readOnly={!editing}
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
					ref={inputRef}
				/>
				<div className='right-side'>
					<span className='count'>
						<span className='number'>{info.students.length}</span>

						{info.students.length === 1 ? 'ученик' : 'ученици'}
					</span>
					<div className='icons'>
						{editing ? <SaveIcon /> : <EditIcon />}
						<i className='fas fa-trash-alt'></i>

						{showMain ? <UpArrow /> : <DownArrow />}
					</div>
				</div>
			</header>
			{showMain ? <MainPart info={info} /> : null}
		</div>
	);
}