import { useState, createRef, useRef, useEffect, forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { teacherSelector } from '../../store/store';
import WorksheetsEl from './Worksheets.style';
export default function Worksheets() {
	const { collections } = useSelector(teacherSelector).info;

	const Content = forwardRef(({ collection }, ref) => {
		return (
			<>
				<div className='files-wrapper' ref={ref}>
					<div className='files-holder'>
						{collection.files.map(file => {
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
					return <FolderHolder collection={child}></FolderHolder>;
				})}
			</>
		);
	});

	const FolderHolder = ({ collection }) => {
		const [opened, setOpened] = useState(false);
		const [branchDownHeight, setBranchDownHeight] = useState(0);
		const filesWrapperRef = createRef();
		const folderContentRef = useRef();

		useEffect(() => {
			if (!filesWrapperRef.current || !folderContentRef.current) return;
			const filesHeight = filesWrapperRef.current.offsetHeight;
			let foldersHeight = 0;
			// const foldersHeight =
			// 	filesWrapperRef.current.nextElementSibling?.offsetHeight || 0;

			// folderContentRef.current
			// 	.querySelectorAll('.folder-content')
			// 	.forEach(folderContent => {
			// 		foldersHeight += folderContent.offsetHeight;
			// 	});

			// console.log(
			// 	folderContentRef.current.querySelectorAll(':scope > .folder-content')
			// );
			console.log(
				folderContentRef.current.parentElement.querySelectorAll(
					':scope > .folder-holder'
				)
			);

			folderContentRef.current.parentElement
				.querySelectorAll(':scope > .folder-holder')
				.forEach(holder => {
					foldersHeight += holder.offsetHeight;
				});

			// for (
			// 	let nextFolder = folderContentRef.current;
			// 	nextFolder;
			// 	nextFolder = folderContentRef.nextElementSibling
			// ) {
			// 	foldersHeight += nextFolder.offsetHeight;
			// 	console.log(nextFolder);
			// }
			// console.log('stop');

			// // console.log(filesWrapperRef.current.nextElementSibling);
			// // console.log(filesHeight, foldersHeight);
			// // console.log(
			// // 	folderHolderRef.current.nextElementSibling,
			// // 	folderHolderRef.current.offsetHeight,
			// // 	filesHeight,
			// // 	foldersHeight
			// // );

			setBranchDownHeight(foldersHeight);
		});

		// setInterval(() => {
		// 	if (!filesWrapperRef.current || !folderContentRef.current) return;
		// 	const filesHeight = filesWrapperRef.current.offsetHeight;
		// 	let foldersHeight = 0;
		// 	// const foldersHeight =
		// 	// 	filesWrapperRef.current.nextElementSibling?.offsetHeight || 0;

		// 	folderContentRef.current
		// 		.querySelectorAll('.folder-content')
		// 		.forEach(folderContent => {
		// 			console.log(folderContent);
		// 			foldersHeight += folderContent.offsetHeight;
		// 		});

		// 	console.log(foldersHeight);

		// 	// for (
		// 	// 	let nextFolder =
		// 	// 		folderContentRef.current.querySelector('.folder-content');
		// 	// 	nextFolder;
		// 	// 	nextFolder =
		// 	// 		nextFolder.parentElement.nextElementSibling?.querySelector(
		// 	// 			'.folder-content'
		// 	// 		)
		// 	// ) {
		// 	// 	foldersHeight += nextFolder.offsetHeight;
		// 	// 	console.log(nextFolder);
		// 	// }
		// 	// console.log('stop');

		// 	// // console.log(filesWrapperRef.current.nextElementSibling);
		// 	// // console.log(filesHeight, foldersHeight);
		// 	// // console.log(
		// 	// // 	folderHolderRef.current.nextElementSibling,
		// 	// // 	folderHolderRef.current.offsetHeight,
		// 	// // 	filesHeight,
		// 	// // 	foldersHeight
		// 	// // );

		// 	setBranchDownHeight(foldersHeight);
		// }, 3000);

		return (
			<section
				className='folder-holder'
				key={collection.id}
				ref={folderContentRef}
			>
				<div className='folder-content'>
					<div className='row content-row'>
						<div
							className='branch-down'
							style={{ height: branchDownHeight + 'px' }}
						></div>
						<div className='info'>
							<i className='far fa-folder'></i>{' '}
							<span className='name'>{collection.name}</span>
						</div>

						<div className='icons-holder'>
							<div className='crud-icons'>
								<i className='fas fa-folder-plus icon'></i>
								<i className='fas fa-file-import icon'></i>
								<i className='far fa-edit icon'></i>
								<i className='fas fa-trash-alt icon'></i>
							</div>

							<span
								className='open-close-icon '
								onClick={() => setOpened(!opened)}
							>
								{opened ? (
									<i className='fas fa-chevron-up icon'></i>
								) : (
									<i className='fas fa-chevron-down icon'></i>
								)}
							</span>
						</div>
					</div>
					{opened ? (
						<Content collection={collection} ref={filesWrapperRef} />
					) : null}
				</div>
			</section>
		);
	};

	return (
		<WorksheetsEl className='container purple-scrollbar'>
			{collections.map(collection => {
				return <FolderHolder collection={collection}></FolderHolder>;
			})}
		</WorksheetsEl>
	);
}
