import ModalEl from './styles/Modal.style';

export default function Modal({ children, onClose, style, ...rest }) {
	return (
		<ModalEl {...rest}>
			<div className='modal-box' style={style}>
				<i className='fas fa-times close-icon icon' onClick={onClose}></i>
				{children}
			</div>
		</ModalEl>
	);
}
