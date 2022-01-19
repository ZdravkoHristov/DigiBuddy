import styled from 'styled-components';

const NavbarEl = styled.nav`
	& {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem 2rem;
		width: 84%;
		margin: auto;
		max-width: 1200px;
	}

	.logo-holder {
		width: 80px;
		height: 80px;
		padding-top: 10px;
	}

	.main-menu {
		list-style: none;
		display: flex;
	}

	a {
		text-decoration: none;
		color: #f5f5f5;
	}

	.menu-item {
		background: transparent;
		margin-right: 2rem;
		padding: 8px 15px;
		border-radius: 8px;
		border: 1px solid transparent;
		outline: 2px solid transparent;
		letter-spacing: 0.5px;
		cursor: pointer;
		font-size: 1.3rem;

		&:hover {
			background: #f5f5f5;
			transition: background 0.5s ease-in-out;
			a {
				color: #724263;
			}
		}
	}

	.menu-item:last-child {
		margin-right: 0;
	}

	.active-out {
		background: linear-gradient(90deg, #7a4464, #9b4b67);
		border: 1px solid #f5f5f5;
		outline: 2px solid #744263;

		a {
			color: #f5f5f5;
		}

		&:hover {
			background: linear-gradient(90deg, #7a4464, #9b4b67);
			a {
				color: #f5f5f5;
			}
		}
	}

	.active-in {
		background: #f5f5f5;
		a {
			color: #724263;
		}
	}
`;

export default NavbarEl;
