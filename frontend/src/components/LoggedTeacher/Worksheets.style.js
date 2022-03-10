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

		@media (max-width: 1200px) {
			max-height: 600px;
		}
	}
	.folder-holder {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	.folder-content {
		position: relative;

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
		cursor: pointer;
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

		.more {
			font-size: 1.7rem;

			position: relative;
			top: -10px;
			cursor: pointer;
		}

		.tooltip {
			position: absolute;
			bottom: -117px;
			background: #f5f5f5;
			font-size: 15px;
			left: -114px;
			border-radius: 5px;

			border: 1px solid var(--purple);
			z-index: 1;

			&::before {
				content: '';
				background: var(--purple);
				width: 20px;
				height: 11px;
				display: block;
				clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
				position: absolute;
				top: -11px;
				right: 2px;
			}

			p {
				border-bottom: 1px solid rgba(116, 66, 99, 0.2);

				&:first-child {
					border-top-left-radius: 5px;
					border-top-right-radius: 5px;
				}

				&:nth-child(2) {
					i {
						position: relative;
						left: -2px;
					}
				}

				&:last-child {
					border-bottom-left-radius: 5px;
					border-bottom-right-radius: 5px;
					border-bottom: 0;
				}

				&:hover {
					background-color: var(--purple);
					color: #fff;
				}
			}

			span {
				padding: 4px 8px;
				display: flex;

				i {
					font-size: 14px;
					margin-right: 3px;
				}
			}
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

	@media (min-width: 701px) {
		.more {
			display: none;
		}
	}

	@media (max-width: 700px) {
		.crud-icons,
		.open-close-icon {
			display: none;
		}
	}
`;

export default WorksheetsEl;
