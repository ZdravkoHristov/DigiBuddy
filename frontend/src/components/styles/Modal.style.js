import styled from 'styled-components';

const ModalEl = styled.div`
	& {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.6);
		z-index: 200;
	}

	.modal-box {
		background-color: #f5f5f5;
		width: 80%;
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 40px;
		padding: 3rem 2rem;
	}

	.close-icon {
		position: absolute;
		right: 30px;
		top: 10px;
		font-size: 3rem;
		color: var(--purple);
	}
`;

export default ModalEl;
