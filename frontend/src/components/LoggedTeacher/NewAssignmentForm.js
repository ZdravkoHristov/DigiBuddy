import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';
import { teacherSelector } from '../../store/store';
import NewAssignmentFormEl from './NewAssignmentForm.style';

export default function NewAssignmentForm() {
	const { classes } = useSelector(teacherSelector).info;

	const [selectData, setSelectData] = useState({
		value: 'default',
		showClasses: [...classes],
		id: uuid(),
	});

	const [selectedClasses, setSelectedClasses] = useState([]);
	const [allCategories, setAllCategories] = useState([
		{
			name: 'категория 1',
			id: uuid(),
		},
		{
			name: 'категория 2',
			id: uuid(),
		},
	]);

	const [categoryValue, setCategoryValue] = useState('default');

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
		<NewAssignmentFormEl>
			<div className='form-grid'>
				<label htmlFor='name'>Име: </label>
				<input
					id='name'
					name='name'
					type='text'
					placeholder='Въведете името на заданието'
				/>
				<label htmlFor='for'>За: </label>
				<select
					name='for'
					id='for'
					value={selectData.value}
					onChange={e => changeHandler(e)}
				>
					<option value='default' disabled hidden>
						Изберете класове
					</option>
					{selectData.showClasses.length && <option value='all'>Всички</option>}
					{selectData.showClasses.map(currentClass => {
						return (
							<option value={currentClass.id} key={currentClass.id}>
								{currentClass.name}
							</option>
						);
					})}
				</select>
				<label htmlFor='deadline'>Краен срок: </label>
				<div className='deadline-holder'>
					<input id='deadline' name='date' type='date' />
					<input type='time' name='time' />
				</div>
				<label htmlFor='category'>Категория: </label>

				<select
					name='category'
					id='category'
					value={categoryValue}
					onChange={e => setCategoryValue(e.target.value)}
				>
					<option value='default' disabled hidden>
						Изберете категория
					</option>
					{allCategories.map(category => {
						return (
							<option value={category.name} key={category.id}>
								{category.name}
							</option>
						);
					})}
				</select>
			</div>

			<div className='selected-classes'>
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
		</NewAssignmentFormEl>
	);
}
