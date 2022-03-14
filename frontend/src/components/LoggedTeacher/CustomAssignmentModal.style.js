import styled from 'styled-components';

const CustomAssignmentModalEl = styled.div`
	

	.generic-data label {
		display: block;
		font-size: 2rem;
	}

	 

	.answer {
		margin: 10px 0;

		input {
			color: var(--purple);
		}
	}

	input[type='checkbox'] {
		-webkit-appearance: none;
		flex-shrink: 0;
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

	@media (max-width: 600px) {
		.generic-data {
			label {
				font-size: 1.3rem;
			}
			input {
				font-size: 0.9rem;
			}
		}
		

		.add-answer {
			font-size: 1rem;
		}
	}
`;

export default CustomAssignmentModalEl;
