import styled from 'styled-components';

const MobileMenuEl = styled.div`
	& {
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 1000;
		background-color: #744263d9;
	}

	.menu {
		width: 100%;
		list-style: none;
		margin: 13rem 0;
	}

	li {
		font-size: 1.5rem;
		margin-bottom: 2rem;
		padding: 1rem;
		text-align: center;

		a {
			padding: 1rem 3rem;
		}

		&.active,
		&:hover {
			a {
				background: #fff;
				color: var(--purple);
				border-radius: 25px;
			}
		}
	}
`;

export default MobileMenuEl;
