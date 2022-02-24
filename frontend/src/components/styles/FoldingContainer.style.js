import styled from 'styled-components';

const FoldingContainer = styled.div`
	& {
		padding: 0 3rem;
	}

	h1 {
		font-weight: normal;
	}

	.header {
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
			color: #f1f1f1;
			font-size: 1.8rem;
			display: block;
			width: 50%;
		}

		.main-text {
			font-size: 1.8rem;
		}

		.right-side {
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 1.6rem;
		}

		.count {
			margin-right: 5rem;
		}

		.icons > * {
			font-size: 1.4rem;
			margin-right: 1rem;
		}
	}

	.main {
		background-color: #fff;
		padding: 0.5rem 2rem;
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
	}

	.number {
		font-size: 1.8rem;
		margin-right: 8px;
	}

	.content {
		max-height: 300px;
		overflow-y: auto;
	}

	.row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: var(--purple);
		margin: 1rem 0;
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

		.deadline {
			flex: 1;
			margin-right: 50px;
			text-align: right;
		}

		.state {
			margin-right: 20px;
		}
	}

	.more-info {
		margin-top: 1rem;
	}

	.done-assignments {
		margin-left: 30px;
	}

	.students {
		padding-bottom: 1rem;
		width: 96.5%;

		padding-right: 2rem;
	}

	.icons > * {
		cursor: pointer;
		margin-right: 5px;
	}

	.fa-file-import {
		margin-right: 10px;
	}

	.new-class {
		cursor: pointer;
		font-size: 1.2rem;
		padding: 10px 8px;
		color: var(--purple);
		i {
			margin-right: 5px;
		}
	}
`;

export default FoldingContainer;
