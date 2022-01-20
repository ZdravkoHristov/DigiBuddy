import styled from 'styled-components';

const ButtonEl = styled.button`
	& {
		background-color: ${props => props.theme.background};
		color: #f5f5f5;
		border: 1px solid #f5f5f5;
		border-radius: 8px;
		cursor: pointer;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		letter-spacing: 1px;
		position: relative;
		transition: 1s ease-in-out;
	}
	&::before {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;

		background-color: ${props => props.theme.background};
		opacity: 0.76;
		z-index: -1;
		transform: scale(1.06) rotate(5deg);
		border-radius: 8px;
		transition: 1s ease-in-out;
	}
	//hover
	&:hover {
		background-color: ${props => props.theme.hover};
	}
	&:hover::before {
		background-color: ${props => props.theme.hover};
		opacity: 0.76;
		transform: rotate(-5deg);
	}
`;

export { ButtonEl };
