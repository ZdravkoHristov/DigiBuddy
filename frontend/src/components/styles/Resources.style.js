import styled from 'styled-components';

const ResourcesEl = styled.div`
	& {
		background: linear-gradient(
			-135deg,
			#f05454 0%,
			#6d4163 27%,
			#30475e 58%,
			#213140 100%
		);
		min-height: calc(100vh - 131px);
	}

	.resource {
		background: #f5f5f5;
		padding: 1.5rem 1rem;
		border-radius: 8px;
		margin: 20px;
		cursor: pointer;

		a {
			color: var(--purple);
		}

		transition: 0.3s ease-in-out;

		&:hover {
			transform: scale(1.05);
		}
	}

	.main-nav {
		background: #f5f5f5;

		a {
			border-radius: 8px;
		}

		a:hover {
			background-color: var(--purple);
			color: #fff;
		}

		.burger-icon {
			display: none;
		}
	}

	.resources {
		padding: 1rem;
	}
`;

export default ResourcesEl;
