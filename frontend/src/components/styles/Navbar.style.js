import styled from 'styled-components';

const NavbarEl = styled.nav`
	& {
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 100;
		transition: 0.5s ease-in-out;
		max-height: 8rem;

		&.sticky {
			box-shadow: 0 0 25px #242130;
			background: #f1f1f1fa;
		}
	}

	.logo-holder {
		width: 80px;
		height: 80px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.main-menu {
		list-style: none;
		display: flex;
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem 2rem;

		margin: auto;
	}

	.burger-icon {
		position: relative;
		cursor: pointer;
		z-index: 2000;
		.line {
			display: block;
			height: 4px;
			width: 30px;
			background: var(--purple);
			margin-bottom: 4px;
			transition: 0.3s;
			position: relative;
		}

		&:hover {
			.line {
				width: 32px;
			}
		}

		&.close {
			.line {
				background: #fff;
			}
			.line:nth-child(1) {
				transform: rotate(45deg);
			}
			.line:nth-child(2) {
				display: none;
			}
			.line:nth-child(3) {
				transform: rotate(-45deg);
				bottom: 8px;
			}
		}
	}

	a {
		text-decoration: none;
		color: #f5f5f5;
	}

	.menu-item {
		background: transparent;
		margin-right: 2rem;

		border-radius: 8px;
		border: 1px solid transparent;
		outline: 2px solid transparent;
		letter-spacing: 0.5px;
		cursor: pointer;
		font-size: 1.3rem;
		transition: background 0.5s ease-in-out;

		a {
			padding: 8px 15px;
			display: block;
		}

		&:hover {
			background: #f5f5f5;
			a {
				color: #724263;
			}
		}
	}

	.menu-item:last-child {
		margin-right: 0;
	}

	.out a {
		color: #744263;
	}

	.active.out {
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

	.active.in {
		background: #f5f5f5;
		a {
			color: #724263;
		}
	}

	@media (min-width: 651px) {
		.container {
			width: 84%;
		}

		.burger-icon {
			display: none;
		}
	}

	@media (max-width: 650px) {
		.main-menu {
			display: none;
		}
	}
`;

export default NavbarEl;
