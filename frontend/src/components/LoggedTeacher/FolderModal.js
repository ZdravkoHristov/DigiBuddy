import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { teacherSelector, loggedUiSelector } from '../../store/store';
import { setTeacher } from '../../store/slices/teacherSlice';
import { setUiInfo } from '../../store/slices/loggedUiSlice';
import Button from '../Button';
import Modal from '../Modal';
import FolderModalEl from './FolderModal.style';
import uuid from 'react-uuid';
import axios from 'axios';
import { useParams } from 'react-router';
import { current } from '@reduxjs/toolkit';

export default function NewFolderModal() {
	const dispatch = useDispatch();
	const { collections } = useSelector(teacherSelector).info;

	const { folderIds, targetFolderId, folderAction, targetFolderName } =
		useSelector(loggedUiSelector).uiInfo;

		
	const initialName = folderAction === 'edit' ? targetFolderName : '';
	const [folderName, setFolderName] = useState(initialName);

	const {id} = useParams();


	const getCollectionInfo = () => {
		const collectionsCopy = JSON.parse(JSON.stringify(collections));
		let currentLevel = collectionsCopy;
		let collection;
		console.log(folderIds)
		
		folderIds.forEach(id => {
	
			collection = currentLevel.find(collection => collection.id === id);
			console.log(collection, collection.children)
			currentLevel = collection.children;

		});

		return [collectionsCopy, collection];
	};

	const editFolder = () => {
		const [collections, currentItem] = getCollectionInfo();
		currentItem.name = folderName;
		console.log(collections);
		dispatch(setTeacher({ collections }));
		dispatch(setUiInfo({ showFolderModal: false }));
	};

	const addNewFolder = async () => {
		/*TODO: a backend request*/
		
		let newFolder = {
			parent_id: targetFolderId,
			name: folderName,
		};

		const res = await axios.post(
			`${process.env.REACT_APP_BACKEND}/api/teacher/${id}/folder/insert`,
			newFolder
		);

		newFolder = {...newFolder, id: res.data.id};

		if (!folderIds.length) {
			dispatch(
				setUiInfo({
					showFolderModal: false,
				})
			);
			dispatch(setTeacher({ collections: [...collections, newFolder] }));
			return;
		}

		const [collectionsCopy, currentItem] = getCollectionInfo();
		const addcurrentChildren = currentItem.children || [];
		currentItem.children = [...currentChildren, newFolder];

		dispatch(setTeacher({ collections: collectionsCopy }));
		dispatch(
			setUiInfo({
				showFolderModal: false,
			})
		);
	};

	return (
		<Modal
			onClose={() => {
				dispatch(
					setUiInfo({
						showFolderModal: false,
					})
				);
			}}
		>
			<FolderModalEl>
				<h2>Въведете име на папка</h2>

				<input
					type='text'
					placeholder='Име на папката'
					value={folderName}
					onChange={e => setFolderName(e.target.value)}
				/>

				<div className='button-holder'>
					<Button
						onClick={folderAction === 'create' ? addNewFolder : editFolder}
						type='submit'
					>
						Готово
					</Button>
				</div>
			</FolderModalEl>
		</Modal>
	);
}
