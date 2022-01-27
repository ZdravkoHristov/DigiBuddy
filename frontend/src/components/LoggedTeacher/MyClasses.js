import { useSelector } from 'react-redux';
import { teacherSelector } from '../../store/store';
import ClassesHolderEl from './ClassesHolder.style';
import SingleClass from './SingleClass.js';

export default function MyClasses() {
	const { classes } = useSelector(teacherSelector).info;

	return (
		<>
			<ClassesHolderEl className=' classes-holder container'>
				{classes.map(singleClass => {
					return <SingleClass key={singleClass.id} info={singleClass} />;
				})}
				<div className='new-class'>
					<i class='fas fa-user-plus'></i> Добавете клас
				</div>
			</ClassesHolderEl>
		</>
	);
}
