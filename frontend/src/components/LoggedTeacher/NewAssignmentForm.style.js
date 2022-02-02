import styled from 'styled-components';

const NewAssignmentFormEl = styled.form`
	label {
		display: block;
		text-align: right;
		font-size: 1.2rem;
		margin: 1rem 0;
	}

	.form-grid {
		display: grid;
		grid-template-columns: max-content min-content;
		grid-gap: 1rem;
		margin: auto;
		width: max-content;
	}

	.deadline-holder,
	input,
	select {
		align-self: center;
	}

	.deadline-holder {
		display: flex;

		input {
			padding-right: 10px;
		}
	}

	input[name='name'] {
		width: 330px;
	}

	select[name='for'] {
		width: 250px;
	}

	select[name='category'] {
		width: 270px;
	}

	input[name='date'] {
		width: 250px;
		margin-right: 10px;
	}

	input,
	select {
		border: 1px solid var(--purple);
		border-radius: 8px;
		padding: 0.5rem 2rem;
		font-size: 1.2rem;
		color: var(--purple);
		width: auto;
		background-color: transparent;
	}

	select {
		appearance: none;
	}

	.selected-classes {
		display: flex;

		& > * {
			background-color: var(--purple);
			color: #fff;
			padding: 0.5rem 1rem;
			border-radius: 8px;
			margin-right: 5px;
			cursor: pointer;
			position: relative;
		}

		.icon {
			position: absolute;
			top: 3px;
			right: 2px;
			font-size: 12px;
		}
	}
`;

export default NewAssignmentFormEl;
