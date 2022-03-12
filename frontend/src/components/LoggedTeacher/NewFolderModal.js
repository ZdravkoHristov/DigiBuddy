import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { teacherSelector, loggedUiSelector } from '../../store/store';
import { setTeacher } from '../../store/slices/teacherSlice';
import { setUiInfo } from '../../store/slices/loggedUiSlice';
import Button from '../Button';
import Modal from '../Modal';
import NewFolderModalEl from './NewFolderModal.style';
import uuid from 'react-uuid';

export default function NewFolderModal() {
	const dispatch = useDispatch();
	const { collections } = useSelector(teacherSelector).info;
	const { folderIds, addFolderTo } = useSelector(loggedUiSelector).uiInfo;
	const [folderName, setFolderName] = useState('');

	const getCollectionInfo = () => {
		const collectionsCopy = JSON.parse(JSON.stringify(collections));
		let currentLevel = collectionsCopy;
		let collection;
		folderIds.forEach((id, index) => {
			collection = currentLevel.find(collection => collection.id === id);

			currentLevel = collection.children;
			console.log(collection);
		});

		return [collectionsCopy, collection];
	};

	const addNewFolder = () => {
		/*TODO: a backend request*/
		const newFolder = {
			parentId: addFolderTo,
			id: uuid(),
			name: folderName,
			files: [],
			children: [],
		};

		if (!folderIds.length) {
			dispatch(
				setUiInfo({
					showNewFolder: false,
				})
			);
			dispatch(setTeacher({ collections: [...collections, newFolder] }));
			return;
		}

		const [collectionsCopy, currentItem] = getCollectionInfo();

		currentItem.children = [...currentItem.children, newFolder];

		dispatch(setTeacher({ collections: collectionsCopy }));
		dispatch(
			setUiInfo({
				showNewFolder: false,
			})
		);
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
