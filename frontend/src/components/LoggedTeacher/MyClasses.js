import { useSelector } from 'react-redux';
import { teacherSelector } from '../../store/store';
import ClassesHolderEl from './ClassesHolder.style';
import SingleClass from './SingleClass.js';

export default function MyClasses() {
	const { info } = useSelector(teacherSelector);
	// const { classes } = info;
	const classes = [];

	return (
		<>
			<ClassesHolderEl className=' classes-holder container'>
				{classes.length === 0 ? (
					<h1>Здравейте, г-н/г-жо {info.fullName}, Вие нямате класове</h1>
				) : null}

				{/* {classes.length === 0 ? <h1>Здравейте, г-н/г-жо  : null</h1>} */}
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
