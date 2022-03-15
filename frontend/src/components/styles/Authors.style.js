import styled from 'styled-components';

const AuthorsEl = styled.section`
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

	.authors-wrapper {
		position: relative;
		top: 200px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 7rem;
		padding: 1rem;
	}

	.author-card {
		background: #f5f5f5;
		border-radius: 10px;
		padding: 1.5rem;
		text-align: center;

		transition: 0.3s ease-in-out;

		&:hover {
			transform: scale(1.05);
		}
	}

	.dots {
		display: flex;
	}

	.dot {
		width: 15px;
		height: 15px;
		border-radius: 50%;
		margin-right: 5px;

		&:nth-child(1) {
			background: #b787ac;
		}

		&:nth-child(2) {
			background: #b6c7dc;
		}

		&:nth-child(3) {
			background: #fbcdcd;
		}
	}

	.name {
		font-size: 2rem;
		margin: 1rem 0;
	}

	.info {
		font-size: 1.1rem;
		line-height: 1.7;
		width: 80%;
		margin: auto;
	}

	.img-holder {
		width: 200px;
		height: 170px;
		margin: auto;

		img {
			width: 100%;
			height: 100%;
		}
	}

	@media (max-width: 870px) {
		& {
			min-height: calc(100vh + 8rem);
			padding-bottom: 2rem;
		}
		.authors-wrapper {
			grid-template-columns: 1fr;
			grid-row-gap: 2rem;
		}
	}

	@media (max-width: 500px) {
		& {
			min-height: calc(100vh + 14rem);
		}
	}
`;

export default AuthorsEl;
