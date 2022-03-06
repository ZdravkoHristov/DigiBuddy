import styled from 'styled-components';

const AssignmentsInfoModalEl = styled.div`
	h2 {
		font-size: 2.5rem;
	}
	.number {
		font-size: 0.8em;
	}

	.assignment-name {
		text-align: center;
		font-size: 1.5rem;
		margin: 0.5rem 0;
	}

	.files-field {
		background: #f1f1f1;
		width: 95%;
		margin: 2rem auto;
		max-height: 320px;
		overflow-y: auto;
		font-size: 1.3rem;
		padding: 0 2rem;
	}

	.file {
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
		color: var(--purple);
		margin: 2rem 0;
		.icon {
			font-size: 2rem;
		}
	}
`;

export default AssignmentsInfoModalEl;
