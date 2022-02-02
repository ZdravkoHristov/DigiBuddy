import styled from 'styled-components';

const ToolsModalEl = styled.div`
	& {
		color: var(--purple);
	}
	.tools-grid {
		display: grid;
		grid-template-columns: 1fr 3fr;
		grid-column-gap: 1.5rem;
	}

	h3 {
		font-size: 2rem;
		text-align: center;
		font-weight: normal;
		margin-bottom: 1rem;
	}

	.tools-wrapper {
		background: #fff;
		padding: 1rem;
	}

	.tool {
		display: flex;
		align-items: center;
		margin: 1rem 0;
		text-align: right;
		cursor: pointer;

		.name {
			flex-grow: 1;
			font-size: 1.2rem;
		}

		img {
			width: 45px;
			margin-left: 20px;
		}
	}

	.selected-tools {
		background-color: #fff;
		padding: 3rem;
		text-align: center;

		.icon {
			color: #a8a6a7;
			font-size: 7rem;
			margin: 6rem 0 4rem 0;
		}

		p {
			margin-bottom: 3rem;
		}
	}

	.button-holder {
		display: flex;
		justify-content: flex-end;
		margin-top: 1.5rem;

		button {
			margin: 0;
			padding: 0.5rem 2rem;
			font-size: 1.4rem;
			letter-spacing: 0.1rem;
		}
	}
`;

export default ToolsModalEl;
