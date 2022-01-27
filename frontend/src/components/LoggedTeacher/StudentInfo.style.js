import styled from 'styled-components';

const StudentInfoEl = styled.div`
	& {
		color: var(--purple);
		z-index: 1000;
		position: relative;
	}
	header {
		display: flex;
		align-items: flex-end;
		justify-content: center;
		margin-top: 20px;

		.done {
			font-size: 1.5rem;
			margin-left: 40px;
		}
	}
	h2 {
		font-size: 2.5rem;
		text-align: center;
		font-weight: normal;
	}

	.assignments-field {
		background: #fff;
		width: 95%;
		margin: 2rem auto;
		max-height: 320px;
		overflow-y: auto;
		font-size: 1.3rem;
		padding: 2rem;
	}

	.assignment-row {
		display: grid;
		grid-template-columns: 3fr 1fr 1fr;
		margin-bottom: 5px;
	}

	.state,
	.state + * {
		justify-self: end;
	}

	.prev-arrow,
	.next-arrow {
		position: fixed;
		z-index: 2000;
		color: #fff;
		font-size: 2rem;
		top: 50%;
		transform: translateY(-50%);
	}

	.prev-arrow {
		left: 5%;
	}

	.next-arrow {
		right: 5%;
	}
`;

export default StudentInfoEl;
