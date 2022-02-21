import styled from 'styled-components';
import wave from '../../assets/svgs/modal-wave.svg';
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

	.wave {
		background-image: url(${wave});
		position: absolute;
		top: 0;
		left: 58px;
		right: 0;
		bottom: 0;
		background-size: cover;
		z-index: -1;
		background-repeat: no-repeat;
	}

	h2 {
		text-align: center;
		font-weight: normal;
		font-size: 2.5rem;
	}

	.modal-box {
		background-color: #f5f5f5;
		width: 80%;
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 40px;
		padding: 4rem 2rem;
		overflow: hidden;

		& > .content {
			max-height: 350px;
			overflow-x: hidden;
			overflow-y: auto;
			padding-right: 20px;
		}
	}

	&.gradient-modal .modal-box {
		background: linear-gradient(#243a4c, #213140);
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
