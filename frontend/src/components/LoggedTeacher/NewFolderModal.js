import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { teacherSelector } from '../../store/store';
import { setTeacher } from '../../store/slices/teacherSlice';
import { setUiInfo } from '../../store/slices/loggedUiSlice';
import Button from '../Button';
import Modal from '../Modal';
import NewFolderModalEl from './NewFolderModal.style';
import uuid from 'react-uuid';

export default function NewFolderModal() {
	const dispatch = useDispatch();
	const teacherInfo = useSelector(teacherSelector).info;
	const [folderName, setFolderName] = useState('');

	const addNewFolder = () => {
		/*TODO: a backend request*/
		const newFolder = {
			id: uuid(),
			name: folderName,
			files: [],
		};
		dispatch(
			setTeacher({ collections: [...teacherInfo.collections, newFolder] })
		);
		dispatch(setUiInfo({ showNewFolder: false }));
	};

	return (
		<Modal
			onClose={() => {
				dispatch(
					setUiInfo({
						showNewFolder: false,
					})
				);
			}}
		>
			<NewFolderModalEl>
				<h2>Въведете име на новата папка</h2>

				<input
					type='text'
					placeholder='Име на папката'
					value={folderName}
					onChange={e => setFolderName(e.target.value)}
				/>

				<div className='button-holder'>
					<Button onClick={addNewFolder}>Готово</Button>
				</div>
			</NewFolderModalEl>
		</Modal>
	);
}
