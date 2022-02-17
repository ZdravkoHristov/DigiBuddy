import ModalEl from './styles/Modal.style';

export default function Modal({ children, onClose, style, ...rest }) {
	return (
		<ModalEl {...rest}>
			<div className='modal-box ' style={style}>
				<div className='content purple-scrollbar'>
					<i className='fas fa-times close-icon icon' onClick={onClose}></i>
					{children}
				</div>
			</div>
		</ModalEl>
	);
}
