import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';
import { teacherSelector } from '../../store/store';

export default function NewAssignmentForm() {
	const { classes } = useSelector(teacherSelector).info;

	const [selectData, setSelectData] = useState({
		value: 'default',
		showClasses: [...classes],
		id: uuid(),
	});

	const [selectedClasses, setSelectedClasses] = useState([]);

	const changeHandler = (e, inputIndex) => {
		if (e.target.value === 'all') {
			setSelectedClasses([...classes]);
			setSelectData({ ...selectData, value: 'default' });
			return;
		}
		const selectedClass = classes.find(({ id }) => id === e.target.value);

		setSelectedClasses([...selectedClasses, selectedClass]);
		setSelectData({ ...selectData, value: 'default' });
	};

	const deselectClass = classToDeselect => {
		setSelectedClasses(selectedClasses =>
			selectedClasses.filter(currentClass => currentClass !== classToDeselect)
		);
	};

	useEffect(() => {
		const newShowClasses = classes.filter(currentClass => {
			return !selectedClasses.includes(currentClass);
		});

		setSelectData({
			...selectData,
			showClasses: newShowClasses,
		});
	}, [selectedClasses]);

	return (
		<form>
			<div className='labels'>
				<label htmlFor='name'>Име: </label>
				<label htmlFor='for'>За: </label>
				<label htmlFor='deadline'>Краен срок: </label>
				<label htmlFor='category'>Категория: </label>
			</div>
			<div className='inputs'>
				<input type='text' placeholder='Въведете името на заданието' />
				<select
					name='for'
					id='for'
					key={selectData.id}
					value={selectData.value}
					onChange={e => changeHandler(e)}
				>
					<option value='default' disabled hidden>
						Изберете класове
					</option>
					{selectData.showClasses.length && <option value='all'>Всички</option>}
					{selectData.showClasses.map((currentClass, index) => {
						return (
							<option value={currentClass.id} key={currentClass.id}>
								{currentClass.name}
							</option>
						);
					})}
				</select>
			</div>
			<div className='selected-class'>
				{selectedClasses.map(singleClass => {
					return (
						<div className='selected-class' key={singleClass.id}>
							{singleClass.name}
							<i
								class='fas fa-times deselect-icon icon'
								onClick={() => deselectClass(singleClass)}
							></i>
						</div>
					);
				})}
			</div>
		</form>
	);
}
