import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import useOutsideClick from '../../hooks/useOutsideClick';
import listToTree from 'list-to-tree-lite'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { setUiInfo } from '../../store/slices/loggedUiSlice';
import { loggedUiSelector, teacherSelector } from '../../store/store';
import { setTeacher } from '../../store/slices/teacherSlice';
import WorksheetsEl from './Worksheets.style';
import NewFolderModal from './FolderModal';
export default function Worksheets() {
	const dispatch = useDispatch();
	const {id} = useParams();
	const { collections } = useSelector(teacherSelector).info;
	const { showFolderModal } = useSelector(loggedUiSelector).uiInfo;

	const fetchFolders = async () => {
		console.log('fetching')
			const res = await axios.get(
				`${process.env.REACT_APP_BACKEND}/api/teacher/${id}/folders`
			);
		

			if (res.data.status === 200) {
				const foldersTree = listToTree(res.data.folders, {parentKey: 'parent_id'});
				// console.log(foldersTree)
				dispatch(setTeacher({collections: foldersTree}))
			}
		
	};

	useEffect(fetchFolders, [])

	const Content = ({ collection, ids }) => {
		return (
			<>
				<div className='files-wrapper'>
					<div className='files-holder'>
						{collection.files?.map(file => {
							return (
								<div className='row content-row' key={file.id}>
									<div className='info'>
										<i className='fas fa-file'></i>
										<span className='name'>{file.name}</span>
									</div>

									<div className='icons-holder'>
										<div className='crud-icons'>
											<i className='far fa-edit icon'></i>
											<i className='fas fa-trash-alt icon'></i>
										</div>
										<div className='empty-space'></div>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{collection.children?.map(child => {
					return (
						<FolderHolder
							collection={child}
							key={child.id}
							id={child.id}
							ids={[...ids, child.id]}
						></FolderHolder>
					);
				})}
			</>
		);
	};

	const FolderHolder = ({ collection, ids }) => {
		const openedInfo =
			JSON.parse(localStorage.getItem('openedFoldersIds')) || {};

		const [opened, setOpened] = useState(openedInfo[collection.id] || false);
		const [showTooltip, setShowTooltip] = useState(false);
		const moreRef = useRef();
		const tooltipRef = useRef();
		const clickedOutsideTooltip = useOutsideClick(tooltipRef);

		const modalAction = (e, action) => {
		//	console.log('COLLECTION: ', collection)
			e.stopPropagation();
			dispatch(
				setUiInfo({
					showFolderModal: true,
					folderIds: ids,
					targetFolderId: collection.id,
					folderAction: action,
					targetFolderName: collection.name,
				})
			);
		};

		useEffect(() => {
			const [outsideClick, target] = clickedOutsideTooltip;
			if (target === moreRef.current) return;
			if (outsideClick) setShowTooltip(false);
		}, [clickedOutsideTooltip]);

		return (
			<section className='folder-holder'>
				<div className='folder-content'>
					<div className='branch-down'></div>
					<div
						className='row content-row '
						onClick={e => {
							setOpened(!opened);
							openedInfo[collection.id] = !opened;
							localStorage.setItem(
								'openedFoldersIds',
								JSON.stringify(openedInfo)
							);
						}}
					>
						<div className='info'>
							{opened ? (
								<i className='far fa-folder-open'></i>
							) : (
								<i className='far fa-folder'></i>
							)}

							<span className='name'>{collection.name}</span>
						</div>

						<div className='icons-holder'>
							<div className='crud-icons'>
								<i
									className='fas fa-folder-plus icon'
									onClick={e => modalAction(e, 'create')}
								></i>
								<i className='fas fa-file-import icon'></i>
								<i
									className='far fa-edit icon'
									onClick={e => modalAction(e, 'edit')}
								></i>
								<i className='fas fa-trash-alt icon'></i>
							</div>

							<div
								className='more'
								ref={moreRef}
								onClick={e => {
									e.stopPropagation();

									setShowTooltip(!showTooltip);
								}}
							>
								...
								{showTooltip && (
									<div className='tooltip' ref={tooltipRef}>
										<p onClick={e => modalAction(e, 'create')}>
											<span>
												<i className='fas fa-folder-plus icon'></i> Нова папка
											</span>
										</p>
										<p>
											<span>
												{' '}
												<i className='fas fa-file-import icon'></i> Вмъкване
											</span>
										</p>
										<p>
											<span onClick={e => modalAction(e, 'edit')}>
												{' '}
												<i className='far fa-edit icon'></i> Редактиране
											</span>
										</p>
										<p>
											<span>
												<i className='fas fa-trash-alt icon'></i>Изтриване
											</span>
										</p>
									</div>
								)}
							</div>

							<span className='open-close-icon '>
								{opened ? (
									<i className='fas fa-chevron-up icon'></i>
								) : (
									<i className='fas fa-chevron-down icon'></i>
								)}
							</span>
						</div>
					</div>
					{opened ? <Content collection={collection} ids={ids} /> : null}
				</div>
			</section>
		);
	};

	return (
		<>
			{showFolderModal && <NewFolderModal />}
			<WorksheetsEl className='container'>
				<div className='scroll-container  purple-scrollbar'>
					{collections.map(collection => {
						console.log('collection: ', collection)
						return (
							<FolderHolder
								collection={collection}
								key={collection.id}
								ids={[collection.id]}
							></FolderHolder>
						);
					})}
				</div>

				<div
					className='add-row'
					onClick={() =>
						dispatch(
							setUiInfo({ showFolderModal: true, folderAction: 'create' })
						)
					}
				>
					<span className='icon'>
						<i className='fa fa-folder-plus'></i>
					</span>{' '}
					Добавете папка
				</div>
			</WorksheetsEl>
		</>
	);
}
