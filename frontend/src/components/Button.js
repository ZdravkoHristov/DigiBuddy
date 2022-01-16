import { ButtonEl } from './styles/Button.style';

export default function Button({ children, cb }) {
	return (
		<span className='testfont' style={{ position: 'relative', zIndex: '1' }}>
			<ButtonEl>{children}</ButtonEl>
		</span>
	);
}
