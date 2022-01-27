import ModalEl from './styles/Modal.style';

export default function Modal({ children, onClose, ...rest }) {
	return (
		<ModalEl {...rest}>
			<div className='modal-box'>
				<i className='fas fa-times close-icon icon' onClick={onClose}></i>
				{children}
			</div>
		</ModalEl>
	);
}
