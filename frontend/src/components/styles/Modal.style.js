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
		letter-spacing: 2px;
	}

	.rounded-input {
		background-color: #f1f1f1;
		border: solid 1px #74426322;
		font-size: 1.2rem;
		color: var(--purple);
		border-radius: 25px;
		display: block;
		width: 100%;
		padding: 12px 1.2rem;
		margin: 1rem 0;
	}

	input[type=number]{
		background-color: #f1f1f1;
		border-radius: 5px;
		border: solid 1px #74426374;
		padding: 0.1rem 0.2rem;
	}

	h3 {
		font-size: 2rem;
		margin: 1rem 0;
		text-align: center;
		letter-spacing: 2px;
	}

	h4 {
		text-align: center;
		font-size: 1.2rem;
		letter-spacing: 2px;
	}

	.button-holder {
		display: flex;
		justify-content: flex-end;

		margin: 2rem 0 0 0;

		button {
			padding: 0.5rem 2rem;
			font-size: 1.4rem;
			letter-spacing: 0.1rem;
			margin: 0;
		}
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

	@media (max-width: 600px) {
		.modal-box {
			width: 90%;
		}

		h3 {
			font-size: 1.8rem;
		}
	}
`;

export default ModalEl;
