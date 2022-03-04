import styled from 'styled-components';
import whitePlace from '../../assets/svgs/white-space-header.svg';

const HeaderEl = styled.header`
	& {
		position: relative;
		z-index: 100;
		color: #5f5d66;
		min-height: 100vh;
		background-position-y: top;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		padding-top: 128px;
	}
`;

export default HeaderEl;
