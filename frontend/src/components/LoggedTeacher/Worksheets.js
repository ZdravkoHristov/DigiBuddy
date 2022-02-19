import { useState } from 'react';
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

		return (
			<section className='folder-holder' key={collection.id}>
				<div className='folder-content'>
					<div className='branch-down'></div>
					<div className='row content-row'>
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
