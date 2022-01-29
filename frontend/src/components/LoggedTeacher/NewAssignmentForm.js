import { useState } from 'react';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';
import { teacherSelector } from '../../store/store';

export default function NewAssignmentForm() {
	const { classes } = useSelector(teacherSelector).info;
	const [selectsCount, setSelectsCount] = useState(1);
	// const [showClasses, setShowClasses] = useState([...classes]);
	const [inputsData, setInputsData] = useState([
		{
			value: 'default',
			showClasses: [...classes],
			id: uuid(),
		},
	]);
	const [selectValue, setSelectValue] = useState('default');

	const [selectedClasses, setSelectedClasses] = useState([]);

	const changeHandler = (e, inputIndex) => {
		const selectedClassIndex = classes.findIndex(
			({ id }) => id === e.target.value
		);
		const selectedClass = classes[selectedClassIndex];

		const inputData = inputsData[inputIndex];

		let newInputsData = [...inputsData];

		const newSelectedClasses = selectedClasses.concat([selectedClass]);

		if (inputData.value !== 'default') {
			const indexInSelected = newSelectedClasses.findIndex(
				({ id }) => id === selectedClass.id
			);
			newSelectedClasses.splice(indexInSelected, 1);
			newInputsData = newInputsData.map((data, currentIndex) => {
				if (currentIndex === inputIndex) return data;
				const newShowClasses = data.showClasses.concat([selectedClass]);
				return { ...data, showClasses: newShowClasses };
			});
		}

		if (
			inputIndex + 1 === inputsData.length &&
			inputsData.length < classes.length
		) {
			newInputsData.push({
				value: 'default',
				showClasses: [...classes],
				id: uuid(),
			});
		}

		newInputsData = newInputsData.map((inputData, index) => {
			if (index === inputIndex) return inputData;

			const currentShowClasses = classes.filter(currentClass => {
				return (
					!newSelectedClasses.includes(currentClass) ||
					inputData.value === currentClass.id
				);
			});
			return { ...inputData, showClasses: currentShowClasses };
		});

		newInputsData[inputIndex].value = e.target.value;

		setInputsData(newInputsData);
		setSelectedClasses(newSelectedClasses);
	};

	const deleteSelect = selectIndex => {
		console.log(selectIndex);
		const deletedId = inputsData[selectIndex].value;
		const indexInSelected = selectedClasses.findIndex(
			({ id }) => id === deletedId
		);
		const [deletedClass] = selectedClasses.splice(indexInSelected, 1);
		console.log(deletedClass);

		const newInputsData = inputsData
			.filter((_, index) => index !== selectIndex)
			.map(inputData => {
				return {
					...inputData,
					showClasses: [...inputData.showClasses, deletedClass],
				};
			});

		setInputsData(newInputsData);
	};

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
				{inputsData.map(({ value, showClasses, id }, inputIndex) => {
					return (
						<div key={id}>
							<select
								name='for'
								id='for'
								value={value}
								onChange={e => changeHandler(e, inputIndex)}
							>
								<option value='default' disabled hidden>
									Изберете класове
								</option>
								{showClasses.map((currentClass, index) => {
									return (
										<option value={currentClass.id} key={currentClass.id}>
											{currentClass.name}
										</option>
									);
								})}
							</select>
							<i
								className='fas fa-trash-alt icon'
								onClick={() => deleteSelect(inputIndex)}
							></i>
						</div>
					);
				})}
			</div>
		</form>
	);
}
