import styled from 'styled-components';
import wave from '../../assets/svgs/modal-wave.svg';

const NewAssignmentModalEl = styled.div`
	.modal-box {
		background: linear-gradient(#243a4c, #213140);
		overflow: hidden;
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

	.button-holder {
		position: relative;

		margin: 2rem 0 5rem 0;

		button {
			padding: 0.5rem 2rem;
			font-size: 1.4rem;
			letter-spacing: 0.1rem;
			position: absolute;
			right: 0;
		}
	}

	.content {
		width: 80%;
		margin: auto;
		color: var(--purple);
	}

	h2 {
		font-size: 3rem;
	}

	.instruction {
		width: 60%;
		margin: 1rem auto;
		font-size: 1.3rem;
		text-align: center;
	}

	.modal-grid {
		display: flex;
		justify-content: space-around;
	}
	.upload-holder {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 2rem;

		p {
			margin: 1.3rem 0;
		}
	}
`;

export default NewAssignmentModalEl;
