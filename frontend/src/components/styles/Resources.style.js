import styled from 'styled-components';

const ResourcesEl = styled.div`
	& {
		min-height: 100vh;
		background: linear-gradient(
			-135deg,
			#f05454 0%,
			#6d4163 27%,
			#30475e 58%,
			#213140 100%
		);
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
		position: relative;
		top: 200px;

		grid-column-gap: 7rem;
		padding: 1rem;
	}
`;

export default ResourcesEl;
