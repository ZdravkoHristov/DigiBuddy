import AnimatedLineEl from './styles/AnimatedLine.style.js';

export default function AnimatedLine(props) {
	return (
		<AnimatedLineEl {...props}>
			<div className='content'></div>
		</AnimatedLineEl>
	);
}
