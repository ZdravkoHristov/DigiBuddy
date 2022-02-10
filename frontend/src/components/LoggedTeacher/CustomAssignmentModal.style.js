import styled from 'styled-components';

const CustomAssignmentModalEl = styled.div`
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

	.generic-data label {
		display: block;
		font-size: 2rem;
	}

	.generic-data input {
		background-color: #fff;
		border: 0;
		border-radius: 25px;
		display: block;
		width: 100%;
		padding: 5px 12px;
		margin: 1rem 0;
	}

	h3 {
		font-size: 2rem;
		margin: 1rem 0;
	}

	.answer {
		margin: 10px 0;
	}

	input[type='checkbox'] {
		-webkit-appearance: none;
		appearance: none;
		-moz-appearance: none;
		width: 20px;
		height: 20px;
		border: 1px solid var(--purple);
		border-radius: 5px;
		margin: 0 10px;
		position: relative;
		top: 5px;
		cursor: pointer;
	}

	input[type='checkbox']:checked::before {
		content: '';
		width: 10px;
		height: 10px;
		top: 4px;
		left: 4px;
		position: absolute;
		background: var(--purple);
		clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
	}

	input[type='checkbox'] + input {
		padding: 5px 8px;
		border: 0;
		font-size: 1rem;
		width: 300px;
	}

	.add-answer {
		display: block;
		font-size: 1.2rem;
		margin: 30px 0;
		cursor: pointer;
	}
`;

export default CustomAssignmentModalEl;
