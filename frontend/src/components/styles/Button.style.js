import styled from 'styled-components';

const ButtonEl = styled.button`
	& {
		background-color: #4e2841;
		position: relative;
		border: 0;
		cursor: pointer;
		color: #fff;
		padding: 8px 16px;
		font-size: 18px;
		z-index: 2;
		border-radius: 8px;

		z-index: 2;
	}

	&::after {
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		background-color: #878486;
		opacity: 0.7;
		left: 0;
		top: 0;
		border-radius: 8px;
		transform: rotate(6deg);
		z-index: 1;
	}
`;

export { ButtonEl };
