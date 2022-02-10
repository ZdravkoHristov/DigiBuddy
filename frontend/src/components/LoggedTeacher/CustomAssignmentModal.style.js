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

	input[id='count'] {
		border: 0;
		width: 60px;
		padding: 10px;
		margin-left: 10px;
	}

	h3 {
		font-size: 2rem;
		margin: 1rem 0;
	}

	.answer {
		margin: 10px 0;
	}

	input[type='radio'],
	input[type='checkbox'] {
		margin-right: 10px;
	}

	input[type='radio'] + input,
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
