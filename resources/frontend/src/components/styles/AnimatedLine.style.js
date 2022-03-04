import styled from 'styled-components';

const AnimatedLineEl = styled.div`
	& {
		width: 2px;
		height: 120px;
		background: rgba(245, 245, 245, 0.4);
		position: absolute;
		margin: auto;

		position: relative;
		overflow: hidden;
	}

	.content {
		background: #fff;
		width: 3px;
		position: absolute;
		height: 30%;
		top: -30%;
		animation: line 1.2s linear infinite forwards;
	}

	@keyframes line {
		0% {
			top: -30%;
		}

		100% {
			top: 100%;
		}
	}
`;

export default AnimatedLineEl;
