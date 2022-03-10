import { useState, useRef, useEffect } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import { useSelector } from 'react-redux';
import { teacherSelector } from '../../store/store';
import WorksheetsEl from './Worksheets.style';
export default function Worksheets() {
	const { collections } = useSelector(teacherSelector).info;

	const Content = ({ collection }) => {
		return (
			<>
				<div className='files-wrapper'>
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
	};

	const FolderHolder = ({ collection }) => {
		const [opened, setOpened] = useState(false);
		const [showTooltip, setShowTooltip] = useState(false);
		const moreRef = useRef();
		const tooltipRef = useRef();
		const clickedOutsideTooltip = useOutsideClick(tooltipRef);

		useEffect(() => {
			const [outsideClick, target] = clickedOutsideTooltip;
			if (target === moreRef.current) return;
			if (outsideClick) setShowTooltip(false);
		}, [clickedOutsideTooltip]);

		return (
			<section className='folder-holder' key={collection.id}>
				<div className='folder-content'>
					<div className='branch-down'></div>
					<div
						className='row content-row '
						onClick={e => {
							setOpened(!opened);
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
								<i className='fas fa-folder-plus icon'></i>
								<i className='fas fa-file-import icon'></i>
								<i className='far fa-edit icon'></i>
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
										<p>
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
											<span>
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
					{opened ? <Content collection={collection} /> : null}
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
