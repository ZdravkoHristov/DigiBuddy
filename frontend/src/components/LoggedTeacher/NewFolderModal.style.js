import styled from 'styled-components';

const NewFolderModalEl = styled.div`
	& {
		width: 90%;
		margin: auto;
	}

	h2 {
		font-size: 3rem;
	}

	input {
		border-radius: 15px;
		width: 100%;
		display: block;
		font-size: 1.4rem;
		padding: 1.7rem 2rem;
		border-width: 1px;
		background: transparent;
		width: 90%;

		margin: 2.5rem auto;
	}

	.button-holder {
		display: flex;
		justify-content: flex-end;
		margin-top: 1.5rem;

		button {
			margin: 0;
			padding: 0.5rem 2rem;
			font-size: 1.4rem;
			letter-spacing: 0.1rem;
		}
	}
`;

export default NewFolderModalEl;
