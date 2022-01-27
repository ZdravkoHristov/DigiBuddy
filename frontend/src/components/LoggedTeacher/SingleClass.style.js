import styled from 'styled-components';

const SingleClassEl = styled.div`
	& {
		padding: 0 3rem;
		margin-bottom: 2rem;
	}
	.class-header {
		background-color: var(--purple);
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #fff;
		padding: 1rem 2.5rem;

		input {
			background: transparent;
			border: 0;
			outline: 0;
			color: #fff;
			font-size: 1.8rem;
			display: block;
			width: 50%;
		}

		.right-side {
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 1.6rem;
		}

		.students-count {
			margin-right: 5rem;
			.number {
				font-size: 1.8rem;
				margin-right: 8px;
			}
		}

		.icons > * {
			font-size: 1.4rem;
			margin-right: 1rem;
			cursor: pointer;
		}
	}

	.class-main {
		background-color: #fff;
		padding: 0.5rem 2rem;
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
	}

	.student-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: var(--purple);
		margin-top: 1rem;
		font-size: 1.2rem;
		.right-side {
			display: flex;
		}

		.order {
			margin-right: 5px;
			font-size: 1.1rem;
		}

		.assignments-info {
			margin-left: 10px;
			margin-right: 2rem;
		}
	}

	.students {
		padding-bottom: 1rem;
		width: 96.5%;

		padding-right: 2rem;
	}

	.icons > * {
		cursor: pointer;
		margin-right: 2px;
	}
`;

export default SingleClassEl;
