import styled from 'styled-components';

const WorksheetsEl = styled.div`
	& {
		margin-block: 2rem;

		& > .folder-holder:first-child > .folder-content > .row::after {
			display: none;
		}

		max-height: 400px;
		overflow-y: auto;
		padding-right: 20px;
	}
	.folder-holder {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	.folder-content {
		position: relative;
		/*
		&::before {
			content: '';
			position: absolute;
			width: 2px;
			background: var(--purple);
			height: 100%;
			left: -2px;
		} */
		width: 98%;
	}

	.branch-down {
		position: absolute;
		width: 1px;
		top: 1rem;
		background: var(--purple);
		left: -1%;
		height: calc(100% - 3rem);
		top: 2rem;
	}

	.row {
		display: flex;
		justify-content: space-between;
		margin: 1rem 0;
		position: relative;
		&::before {
			content: '';
			position: absolute;
			height: 2px;
			left: -1%;
			top: 50%;
			transform: translateY(-50%);
			width: 1%;
			background: var(--purple);
		}

		&::after {
			content: '';
			position: absolute;
			height: calc((100% + 2rem - 0.85rem));
			left: -1%;
			top: calc(-100% - 0.5rem);

			width: 1px;
			background: var(--purple);
		}

		.icons-holder {
			display: flex;
		}

		.crud-icons .icon {
			margin: 0 0.3rem;
		}

		.crud-icons {
			margin-right: 2rem;
		}

		.empty-space {
			width: 1.75rem;
		}
	}

	section:last-of-type {
		.branch-down {
			display: none;
		}
	}

	/* .content-row {
		padding-left: 40px;
	} */

	i {
		font-size: 1.7rem;
	}

	.info {
		/* position: relative;
		&::before {
			content: '';
			position: absolute;
			height: 2px;
			left: -20px;
			top: 50%;
			transform: translateY(-50%);
			width: 20px;
			background: var(--purple);
		} */

		.name {
			font-size: 1.3rem;
			margin-left: 0.85rem;
		}
	}

	.files-wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	.files-holder {
		width: 98%;
	}
`;

export default WorksheetsEl;
