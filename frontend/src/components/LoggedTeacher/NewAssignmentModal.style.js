import styled from 'styled-components';

const NewAssignmentModalEl = styled.div`
	.button-holder {
		display: flex;
		justify-content: flex-end;

		margin: 2rem 0 5rem 0;

		button {
			padding: 0.5rem 2rem;
			font-size: 1.4rem;
			letter-spacing: 0.1rem;
			margin: 0;
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
