import { useSelector } from 'react-redux';
import { teacherSelector } from '../../store/store';
import SingleClass from './SingleClass.js';

export default function MyClasses() {
	const { classes } = useSelector(teacherSelector).info;

	return (
		<>
			<div className=' classes-holder container'>
				{classes.map(singleClass => {
					return <SingleClass key={singleClass.id} info={singleClass} />;
				})}
			</div>
		</>
	);
}
